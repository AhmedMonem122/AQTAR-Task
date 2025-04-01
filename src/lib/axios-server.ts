import axios from "axios";

export const fakeStoreAPIBaseURL = "https://fakestoreapi.com";

export const fakeStoreServer = axios.create({
  baseURL: fakeStoreAPIBaseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const localServer = axios.create({
  baseURL: process.env.NEXT_PUBLIC_LOCAL_SERVER_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
