import {useState, useEffect} from 'react';
import {Button} from 'react-bootstrap';
import ModalWindow from './ModalWindow';

/*
  Name: ModalTestPage  
  Author: Colum Murphy

  This component (ModalTestPage), can launch the ModalWindow
  to test and connect the ModalWindow component to the server.
  
  It has dummy values for userId, tutorId, subjectTitle, 
  subjectDescription and tutorName. 
  
  In the working version of the App, the Modal window will be 
  launched by the Search page.  It will supply values for 
  userId, tutorId, subjectTitle, subjectDescription and tutorName.      
*/

const ModalTestPage = () => {  

  // state to hide or show the modal window
  const [modalShow, setModalShow] = useState(false);
  const showModal = () => setModalShow(true);
  const hideModal = () => setModalShow(false);  

  // state used to update the ModalWindow component
  const [userId, setUserId] = useState('');
  const [tutorId, setTutorId] = useState('');
  const [subjectTitle, setSubjectTitle] = useState('');  
  const [subjectDescription, setSubjectDescription] = useState('');            
  const [tutorName, setTutorName] = useState('');

  useEffect(() => {
    setUserId('60ff3b354f07b26d302b2583');
    setTutorId('60ff3b354f07b26d302b2580');
    setSubjectTitle('Algebra');
    setSubjectDescription('Algebra Desc');
    setTutorName('Bill Burr');
  }, []);

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
      />
    </>
  )
}

export default ModalTestPage;
