import TimeLists from './TimeLists';
import DateComponent from './DateComponent';
import '../tutorSubjectsAndTimes.css';

/*
  Name: ManageTutorTimes
  Author: Colum Murphy

  This component allows tutors to add available dates and times to 
  their schedule.

  Props: userId, error 
  This component will take the tutors userId as a prop.
  It will pass server errors up to App level state.

  Desctiption of Code Not Currently Implemented:
  1. When this component loads, a GET request will be made to the server
     to get the tutors available schedule.

  2. When a new date/time period is added to the tutors schedule,
     a POST request will be made to the server.

  3. When a date/time period is removed from the tutors schedule,
     a DELETE request will be made to the server.
*/


const ManageTutorTimes = () => {
  
  const changeSelectedDate = (date) => {
    // handle date change
  }

  return (
    <div className="App">      
      <DateComponent 
        changeSelectedDate={changeSelectedDate}
        datesToHighlight={[]}
      />
      <TimeLists />
    </div>
  );
}

export default ManageTutorTimes;
