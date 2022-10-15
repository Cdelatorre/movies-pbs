import axios from "axios";

const http = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/photos",
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
