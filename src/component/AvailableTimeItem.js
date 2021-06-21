import { BsXCircleFill } from 'react-icons/bs';

const AvailableTimeItem = (props) => {

  const {id, time, onClickDelete} = props;

  return (
    <div className='timeItemContainer'>
      <div>{time}</div>
      <BsXCircleFill 
        id='deleteIcon'
        style={{color: 'red', cursor: 'pointer'}}
        onClick={() => onClickDelete(id) }
      />
    </div>
  )
}
export default AvailableTimeItem;