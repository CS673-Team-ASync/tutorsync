import { BsXCircleFill } from 'react-icons/bs';
import '../tutorSubjectsAndTimes.css';

/*
  Name: ScheduledTimeItem
  Author: Colum Murphy

  This component represents a time period which has 
  been scheduled by the tutor. The component passes delete requests
  to the parent component.
*/

const ScheduledTimeItem = (props) => {

  const {id, timePeriod, onClickDelete} = props;

  return (
    <div className='timeItemContainer'>
      <div>{timePeriod}</div>
      <BsXCircleFill 
        id='deleteIcon'
        style={{color: 'red', cursor: 'pointer'}}
        onClick={() => onClickDelete(id) }
      />
    </div>
  )
}
export default ScheduledTimeItem;