import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://restcountries.com/v2', // Replace with your base URL
  // timeout: 10000, // Optional: Set a timeout of 10 seconds
  // headers: {
  //   'Content-Type': 'application/json',
  //   // You can add more default headers if needed
  //   // 'Authorization': 'Bearer YOUR_TOKEN_HERE',
  // },
});