import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateComponent = () => {

  const [startDate, setStartDate] = useState(new Date());
  const [highlightDates, setHighlightDates] = useState([]);
 
  var currentDate = new Date();

  const onChange = (date) => {     
    setStartDate(date);           
    setHighlightDates( [...highlightDates, date] );
    console.log( highlightDates );
  }

  return (
    <>
      <div className='dateComponentWrapper'> 
        <DatePicker      
          wrapperClassName="datepicker"

          selected={startDate}
          onChange={(date) => onChange(date)}
          minDate={currentDate}
          highlightDates={highlightDates}
          monthsShown={1}
          inline
        />
      </div>
    </>
  )
}

export default DateComponent;
