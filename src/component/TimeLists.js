import { useState, Fragment } from 'react';
import AvailableTimeItem from './AvailableTimeItem';
import UnscheduledTimeItem from './UnscheduledTimeItem';

const TimeLists = () => {

  const [isAM, setAM] = useState(false);

  const [unscheduledTimes, setUnscheduledTimes] = useState(
    [
      { id: 7, timeString: '7 - 8 am' },
      { id: 8, timeString: '8 - 9 am' },
      { id: 9, timeString: '9 - 10 am' },
      { id: 10, timeString: '10 - 11 am' },
      { id: 11, timeString: '11 - 12 am' },
      { id: 12, timeString: '12 - 1 pm' },
      { id: 16, timeString: '4 - 5 pm' },
      { id: 17, timeString: '5 - 6 pm' },
      { id: 18, timeString: '6 - 7 pm' },
      { id: 19, timeString: '7 - 8 pm' },      
      { id: 20, timeString: '8 - 9 pm' },
      { id: 21, timeString: '9 - 10 pm' },
    ]
  ); 

  const [availableTimes, setAvailableTimes] = useState(
    [
      { id: 13, timeString: '1 - 2 pm' },
      { id: 14, timeString: '2 - 3 pm' },
      { id: 15, timeString: '3 - 4 pm' },
    ]
  );

  const onClickPlus = (id) =>{

    // get selected item 
    const selectedListItem = 
      unscheduledTimes.filter(time => time.id === id);
    
    // filter the item from the unscheduled times list
    const unscheduledArray = 
      unscheduledTimes.filter(time => time.id !== id);
    
    // set the unscheduled times  
    setUnscheduledTimes(unscheduledArray);
      
    // add selected item to the available array 
    const availableArray = [...availableTimes, selectedListItem[0]];
    
    // sort available array
    availableArray.sort((a, b) => Number(a.id) - Number(b.id));

    // set the available array 
    setAvailableTimes(availableArray);
  }

  const onClickDelete = (id) => {
    
    // get selected item
    const selectedListItem = 
      availableTimes.filter(time => time.id === id);

    // filter the item from the available times list
    const availableArray = 
      availableTimes.filter(time => time.id !== id);

    // set the available times 
    setAvailableTimes(availableArray);

    // add selected item to the available array 
    const unscheduledArray = [...unscheduledTimes, selectedListItem[0]];

    // sort unscheduled array
    unscheduledArray.sort((a, b) => Number(a.id) - Number(b.id));

    // set the unscheduled array
    setUnscheduledTimes(unscheduledArray);    
  }

  return (
    <div className='twoListContainer'>

      <div>
        <div className='listHeading'>Unscheduled Times</div>
        
        <div className='listContainer'>
          
          <div className='listButton'>
            <div 
              id='amButton'
              onClick={() => setAM(true)}
              style={{ backgroundColor: isAM ? '#007bff' : '#6c757d' }}
            >
              AM
            </div>
            <div 
              id='pmButton'
              onClick={() => setAM(false)}
              style={{ backgroundColor: isAM ? '#6c757d' : '#007bff' }}
            >
              PM
            </div>
          </div>
          
          {unscheduledTimes.map( unscheduledTime => {
            return (
              ((isAM && unscheduledTime.id <= 11)
              || (!isAM && unscheduledTime.id >= 12)) ? 
              <UnscheduledTimeItem 
                key={unscheduledTime.id}
                id={unscheduledTime.id} 
                time={unscheduledTime.timeString} 
                onClickPlus={onClickPlus}
              />
              : ( 
                <Fragment key={unscheduledTime.id} > 
                </Fragment>
              )
            )
          })}      
        </div>
      </div>

      <div>
        <div className='listHeading'>Tutor Available Times</div>  
        <div className='listContainer'>
          {availableTimes.map( availableTime => {
            return (
              <AvailableTimeItem
                key={availableTime.id}
                id={availableTime.id} 
                time={availableTime.timeString} 
                onClickDelete={onClickDelete}
              />
            )
          })}   
        </div>
      </div>  

    </div>
  )
}

export default TimeLists;
