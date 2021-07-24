import axios from 'axios';

/*
  Name: postScheduledMeeting
  Author: Colum Murphy

  This component makes a POST request to the server
  with a meeting object payload.  
*/

const postScheduledMeeting = async (meeting) => {

  const config = { headers:{ 'Content-Type' : 'application/json'} };
  const server = process.env.REACT_APP_SERVER_URL;
  const url = `${server}/scheduled-meeting`;

  try {
    const response = await axios.post(url, meeting, config);
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

    error.response ? errObj.msg = 'Schedule Meeting Modal - POST scheduled meeting'
                   : errObj.msg = 'Schedule Meeting Modal - Cannot connect to server';
    
    return errObj;  
  } 
}

export default postScheduledMeeting;
