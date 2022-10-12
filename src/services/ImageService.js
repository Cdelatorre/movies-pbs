import http from "./BaseService";

export const getRandomImage = () => {
  const randImage = Math.floor(Math.random() * 5000 + 1);
  return http.get(`https://jsonplaceholder.typicode.com/photos/${randImage}`);
};
