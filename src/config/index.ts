import axios from 'axios';
import { useEffect } from 'react';
import {API_KEY, BASE_URL} from '../constants/config';

const AxiosInstance = axios.create({
  baseURL: BASE_URL,
  params: {apiKey: API_KEY},
});

export {AxiosInstance};

// const fetchNews = () => {
//   useEffect(() => {
//     let didCancel = false;
//     // setUsers([]);

//     axios({
//       method: 'GET',
//       url: `https://reqres.in/api/users?delay=1`,
//     })
//       .then(res => {
//         if (!didCancel) {
//         //   const allUsers = res.data.data.map(user => <p>{user[name]}</p>);
//         //   setUsers(prev => [...prev, ...allUsers]);
//         }
//       })
//       .catch(e => {
//         console.log(e);
//       });

//     return () => {
//       didCancel = true;
//     };
//   }, []);
// };
