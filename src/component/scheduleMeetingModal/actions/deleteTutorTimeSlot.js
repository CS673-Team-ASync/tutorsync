import axios from 'axios';

/*
  Name: deleteTutorTimeSlot
  Author: Colum Murphy

  This component makes a DELETE request to the server  
  to delete a time period/slot that has been scheduled for a meeting.
*/

const deleteTutorTimeSlot = async (timeSlotId) => {

  const server = process.env.REACT_APP_SERVER_URL;
  const url = `${server}/available-times/${timeSlotId}`;

  try {
    const response = await axios.delete(url);
    return { 
      error: false, 
      msg: '', 
      data: response.data,
      status: response.status   
    };

  } catch (error) {   
    
    const errObj = { error: true, data: null }

    error.response ? errObj.status = error.response.status 
                   : errObj.status = null;

    error.response ? errObj.msg = 'Schedule Meeting Modal - DELETE tutor time slot'
                   : errObj.msg = 'Schedule Meeting Modal - Cannot connect to server';
    
    return errObj; 
  } 
}

export default deleteTutorTimeSlot;
