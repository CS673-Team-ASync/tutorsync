import axios from 'axios';

export const getTutorAvailableTimes = async (id) => {

  try {    
    const url = `${process.env.REACT_APP_SERVER_URL}/available`;
    const res = await axios.get(url);
    const data = res.data;
    return data;
  
  } catch (err) {
    return err; 
  }
}
