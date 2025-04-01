import axios from 'axios';

export const fakeStoreAPIBaseURL = 'https://fakestoreapi.com';

export const axiosServer = axios.create({
  baseURL: fakeStoreAPIBaseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});