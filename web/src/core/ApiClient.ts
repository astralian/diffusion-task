import axios from 'axios';

const Api = axios.create({
  baseURL: 'http://localhost:3001/recipes',
  headers: {
    'Content-type': 'application/json',
  },
});

Api.interceptors.request.use(function (config) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      config.headers.async = 'promise';
      resolve(config);
    }, 300);
  });
});

export default Api
