import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:3001/api",
});

http.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default http;
