import axios from 'axios';

axios.defaults.headers.post['Content-Type'] = 'application/json';

export const signIn = async auth_token => {
  return await axios.post('http://localhost:3020/auth/signin', { authentication: auth_token });
};
