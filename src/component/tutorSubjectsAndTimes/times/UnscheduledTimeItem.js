import { BsPlusCircleFill } from 'react-icons/bs';
import '../tutorSubjectsAndTimes.css';

/*
  Name: UnscheduledTimeItem
  Author: Colum Murphy

  This component represents a time period which has not 
  yet been scheduled by the tutor. The component passes add requests
  to the parent component.
*/

const UnscheduledTimeItem = (props) => {

  const {id, timePeriod, onClickAdd } = props;

  return (
    <div className='timeItemContainer'>
      <div>{timePeriod}</div>
      <BsPlusCircleFill
        id='addIcon'
        style={{color: 'blue', cursor: 'pointer'}}
        onClick={() => onClickAdd(id) }
      />
    </div>
  )
}
export default UnscheduledTimeItem;