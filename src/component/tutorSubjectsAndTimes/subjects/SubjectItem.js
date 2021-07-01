import { BsXCircleFill } from 'react-icons/bs';
import '../tutorSubjectsAndTimes.css';

/*
  Name: SubjectItem
  Author: Colum Murphy

  This component represents an individual subject in the list 
  of tutor subjects.  It passes delete requests to the parent component.
*/

const SubjectItem = (props) => {  
  const { deleteSubject } = props;
  const { id, subject, description } = props.tutorSubject;

  return (
    <div className='subjectItemContainer'>
      <div className='subjectTitle'>
        <div className='subjectTitleText'>
          {subject}
        </div>
        <BsXCircleFill
          id='deleteSubjectIcon'
          style={{ color: 'red', cursor: 'pointer' }}
          onClick={() => deleteSubject(id)}
        />
      </div>
      <div>{description}</div>
    </div>
  )
}

export default SubjectItem;
