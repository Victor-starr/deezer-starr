import axios from "axios";

const api = axios.create({
  baseURL: "https://api.deezer.com",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  params: {
    limit: 30,
  },
});

export default api;
