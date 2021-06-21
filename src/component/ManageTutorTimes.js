// import { useEffect } from 'react';
// import { getTutorAvailableTimes } from '../action/getTutorAvailableTimes';
// import moment from 'moment';
import TimeLists from './TimeLists';
import DateComponent from './DateComponent';

const ManageTutorTimes = (props) => {
  
  // const { userId, serverError } = props;

  return (
    <div className="App">      
      <DateComponent />
      <TimeLists />
    </div>
  );
}

export default ManageTutorTimes;
