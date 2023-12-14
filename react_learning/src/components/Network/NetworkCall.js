import axios from 'axios';
// network calls using axios

export const getCallAxios = async (req) => {
  console.log('axios get call with ', req)
   const res = await axios.get(req);
      const users = res.data;
      return users;
}
