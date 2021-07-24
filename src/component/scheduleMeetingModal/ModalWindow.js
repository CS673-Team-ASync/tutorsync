import {useState, useEffect} from 'react';
import {Row, Col, Container, Button, Modal, Alert} from 'react-bootstrap';
import DateComponent from '../tutorSubjectsAndTimes/times/DateComponent';
import AvailableTimeList from './AvailableTimeList';
import getTutorAvailability from './actions/getTutorAvailability';
import postScheduledMeeting from './actions/postScheduledMeeting';
import deleteTutorTimeSlot from './actions/deleteTutorTimeSlot';
import './modalWindow.css';


/*
  Name: ModalWindow
  Author: Colum Murphy

  This component allows the user to select a date, and a time slot/period
  to schedule a meeting.

  Props: modalShow, studentId, tutorId, subjectId, tutorSubjectTitle, tutorName
  These props have values assigned in the parent component.  
  
  Props: hideModal
  This prop causes the modal window to close.   

  Props: handleError
  This prop allows server errors to be passed to the parent component.
*/

const ModalWindow = (props) => {

  const {modalShow, hideModal, studentId, tutorId, subjectId, 
        tutorSubjectTitle, tutorName, handleError} = props;

  // the tutor availability
  const [tutorAvailability, setTutorAvailability] = useState([]); 

  // all the tutor available dates, for calendar highlighting
  const [allAvailDates, setAllAvailDates] = useState([]);

  // the date selected by the user, from the calendar component
  const currentDate = new Date();
  const [selectedDate, setSelectedDate] = useState(currentDate);
  
  // the selected date converted to a string, used for a useEffect hook
  const selectedDateString = selectedDate.toISOString();

  // all the time slots available, for the selected date
  const [timeSlotsForDate, setTimeSlotsForDate] = useState([]);

  // the time slot selected by the user, for a particular date
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);

  // state used by the Alert component to show messages
  const [showAlert, setShowAlert] = useState(false);
  const [messageText, setMessageText] = useState('');
  const [messageType, setMessageType] = useState('info');

  useEffect(() => {
    const getAvailability = async () => {
      // get tutor availability data
      const result = await getTutorAvailability(tutorId);    
      const { error, msg, data, status } = result;   
      
      // if there is an error, show a message and pass the error to App level
      if (error) {
        showMessage('Error Connecting to Server!', 'danger');
        handleError({status: status, msg: msg});      
        return;
      } 
      // convert response data, change date string to date object    
      convertData(data); 
    }

    // when the modal opens, get the tutor availability data
    if (modalShow === true) {
      getAvailability();
    }
    // eslint-disable-next-line
  }, [modalShow]);


  // update, when the tutor availability, or the date selected in calendar changes
  useEffect(() => {

    // filter the tutor availability for time slots that match
    // the date selected in the calendar
    const matchingTimeSlots = tutorAvailability.filter(item => 
      (equalDates(item.startDateTime, selectedDate)));

      setTimeSlotsForDate(matchingTimeSlots);
  // eslint-disable-next-line
  }, [selectedDateString, tutorAvailability]);


  // update the available dates state (highlight dates)
  // when the the tutor availability changes
  useEffect(() => {
    // map the tutor availability to a dates only array
    const datesArray = tutorAvailability.map(item => {
      return item.startDateTime;
    });
    setAllAvailDates(datesArray);
  }, [tutorAvailability]);


  // Convert the ISO8601 time string in each object to a date object.
  // Filter out any time slots that have a start time before the current time. 
  const convertData = (timeStringArray) => {

    const dateObjectArray = timeStringArray.map(item => {
      return {
        id: item.id,
        startDateTime: new Date(item.startDateTime),
        endDateTime: new Date(item.endDateTime)
      }
    });

    // filter array for start times in the future
    const dateTimeNow = new Date();
    const futureTimeAndDate = dateObjectArray.filter(item => 
      item.startDateTime > dateTimeNow );

    // sort by date + time  
    futureTimeAndDate.sort((a,b) => { 
      return a.startDateTime.getTime() - b.startDateTime.getTime() });

    // set tutor availability
    setTutorAvailability(futureTimeAndDate);
  }  


  // Function returns true if year, month and date match for 2 date objects
  const equalDates = (dateA, dateB) => {
    if (dateA.getFullYear() === dateB.getFullYear()
        && dateA.getMonth() === dateB.getMonth()
        && dateA.getDate() === dateB.getDate() ) {
      return true;
    } 
    return false;
  }


  // Function POSTS a scheduled meeting object to the server
  const scheduleMeeting = async () => {

    // if the student has not selected a date and time
    if (selectedTimeSlot === null) {
      // display an information message and return
      showMessage('Please select a date and time!', 'info');      
      return;
    }
  
    // create a meeting object
    const meeting = {
      studentId: studentId,
      tutorId: tutorId,
      subjectId: subjectId,
      startDateTime: selectedTimeSlot.startDateTime.toISOString(),
      endDateTime: selectedTimeSlot.endDateTime.toISOString()
    }

    // post the meeting object to the server
    const resultOfPost = await postScheduledMeeting(meeting);  

    // if there is an error, show a message and pass error to App level   
    if (resultOfPost.error) {
      showMessage('Error Connecting to Server!', 'danger');
      handleError({status: resultOfPost.status, msg: resultOfPost.msg});
      return;
    } 

    // delete the time slot from the tutor available times.
    const resultOfDelete = await deleteTutorTimeSlot(selectedTimeSlot.id);

    // if there is an error, show a message and pass error to App level 
    if (resultOfDelete.error) {
      showMessage('Error Connecting to Server!', 'danger');
      handleError({status: resultOfDelete.status, msg: resultOfDelete.msg});     
      return;
    } 

    // remove the time slot from the tutor available time slots
    const remainingTimeSlots = tutorAvailability.filter(timeSlot => 
            timeSlot.id !== selectedTimeSlot.id);
    setTutorAvailability(remainingTimeSlots); 

    // show a success message to the user
    showMessage('Meeting Scheduled!', 'success');
  }


  // show a message for 3 seconds 
  const showMessage = (msgText, msgType) => {
    // show a message 
    setMessageText(msgText);
    setMessageType(msgType);
    setShowAlert(true);

    // hide the message after 3 seconds
    setTimeout(() => setShowAlert(false), 3000);
  }


  return (
    <>
      <Modal 
        show={modalShow} 
        onHide={hideModal}        
        animation={false}   
        centered            
      >

        <Modal.Header closeButton>
          <Container>
            <Row>
              <Col>
                <div className="modalTitle">
                  Check Availability
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                {tutorSubjectTitle}
              </Col>
            </Row>
            <Row>
              <Col>
                {tutorName}
              </Col>
            </Row>  
          </Container>
        </Modal.Header>

        <Modal.Body>  
          <Container>
            <Row>
              <Col xs={7} sm={7}>
                <div className="columnTitle">Available Dates</div>
                <DateComponent 
                  changeSelectedDate={(date) => setSelectedDate(date)}
                  datesToHighlight={allAvailDates}
                />
              </Col>
              <Col xs={5} sm={5}>                
                <div>
                  <div className="columnTitle">
                    Available Times
                  </div>
                  <AvailableTimeList 
                    timeSlotsForDate={timeSlotsForDate}
                    changeSelectedTimeSlot={
                      (timeSlot) => setSelectedTimeSlot(timeSlot)
                    }
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </Modal.Body>

        <Modal.Footer>
          <Container>
            <Row>
              <Col>
                <Alert transition={null} show={showAlert} variant={messageType}>
                  {messageText}
                </Alert>  
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="modalButtons">
                  <div>
                    <Button variant="secondary" onClick={hideModal}>
                      Close
                    </Button>
                  </div>
                  <div className="modalScheduleButton">
                    <Button variant="primary" onClick={scheduleMeeting}>
                      Schedule Meeting
                    </Button>
                  </div>
                </div>          
              </Col>
            </Row>  
          </Container>
        </Modal.Footer>

      </Modal>
    </>
  )
}

export default ModalWindow;
