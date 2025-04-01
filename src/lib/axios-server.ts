import axios from "axios";

export const fakeStoreAPIBaseURL = "https://fakestoreapi.com";

export const fakeStoreServer = axios.create({
  baseURL: fakeStoreAPIBaseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

const getBaseUrl = () => {
  if (typeof window !== 'undefined') {
    return window.location.origin;
  }
  return process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
};

export const localServer = axios.create({
  baseURL: getBaseUrl(),
});
