import {useState} from 'react';
import {Button} from 'react-bootstrap';
import ModalWindow from './ModalWindow';

/*
  Name: ModalTestPage  
  Author: Colum Murphy

  This component (ModalTestPage), can launch the ModalWindow
  to test and connect the ModalWindow component to the server.
  
  It has dummy values for userId, tutorId, subjectId, tutorSubjectTitle
  and tutorName. 
  
  In the working version of the App, the Modal window will be 
  launched by the Search page.  It will supply values for 
  userId, tutorId, subjectTitle, subjectDescription and tutorName.  
  It will also have the component state, shown below, 
  to hide or show the modal window.    
*/

const ModalTestPage = (props) => {  

  // pass error to parent component
  const {handleError} = props;

  // state to hide or show the modal window
  const [modalShow, setModalShow] = useState(false);
  const showModal = () => setModalShow(true);
  const hideModal = () => setModalShow(false);  

  // dummy values
  const userId = "60ff3b354f07b26d302b2583";  // id of the current user
  const tutorId = "60ff3b354f07b26d302b2580"; // id of the tutor selected by the user
  const subjectTitle = 'Algebra';             // id of the subject selected by the user
  const subjectDescription = 'Algebra Desc';  // title of subject selected by the user
  const tutorName = 'Tuoyang';                // name of tutor selected by the user 

  return (
    <>
      <Button variant="primary" onClick={showModal}>
        Launch Schedule Meeting modal
      </Button>

      <ModalWindow 
        modalShow={modalShow}
        hideModal={hideModal}
        studentId={userId}
        tutorId={tutorId}
        subjectTitle={subjectTitle}
        subjectDescription={subjectDescription}
        tutorName={tutorName}
        handleError={handleError}     
      />

    </>
  )
}

export default ModalTestPage;
