import axios from 'axios';

export const sendMail = async data => {
  try {
    const result = await axios.post('auth/mail', data);
    console.log(result);
  } catch (error) {
    console.log(error.message);
  }
};
