import axios from 'axios';

axios.defaults.headers.post['Content-Type'] = 'application/json';

const tokenRegExp = new RegExp(/auth_token/);
const AUTH_TOKEN = document.cookie
  ? document.cookie
      .split(';')
      .find(cookie => tokenRegExp.test(cookie))
      .split('=')[1]
  : [];

export const signIn = async () => {
  return await axios.post('http://localhost:3020/auth/signin', { authentication: AUTH_TOKEN });
};
