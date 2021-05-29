import { default as axios } from 'axios';

const customAxios = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

const authToken = document.cookie.split(';').find(cookie => cookie.includes('auth_token'));

const authTokenValue = authToken ? authToken.split('=')[1] : null;

customAxios.defaults.headers.common['Authorization'] = authTokenValue;
customAxios.defaults.headers.post['Content-Type'] = 'application/json';

export default customAxios;
