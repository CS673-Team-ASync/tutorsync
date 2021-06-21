import { BsPlusCircleFill } from 'react-icons/bs';

const UnscheduledTimeItem = (props) => {

  const {id, time, onClickPlus } = props;

  return (
    <div className='timeItemContainer'>
      <div>{time}</div>
      <BsPlusCircleFill
        id='addIcon'
        style={{color: 'blue', cursor: 'pointer'}}
        onClick={() => onClickPlus(id) }
      />
    </div>
  )
}
export default UnscheduledTimeItem;