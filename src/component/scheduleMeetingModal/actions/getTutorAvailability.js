import axios from 'axios';

/*
  Name: getTutorAvailability
  Author: Colum Murphy

  This component makes a GET request to the server 
  and returns the date/time availability for a specific tutor(userId).
*/

const getTutorAvailability = async (userId) => {

  const server = process.env.REACT_APP_SERVER_URL;
  const url = `${server}/users/${userId}/available-times`;

  try {
    const response = await axios.get(url);
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

    error.response ? errObj.msg = 'Schedule Meeting Modal - GET tutor availability'
                   : errObj.msg = 'Schedule Meeting Modal - Cannot connect to server';
    
    return errObj;    
  } 
}

export default getTutorAvailability;
