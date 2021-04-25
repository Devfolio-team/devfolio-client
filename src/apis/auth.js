import axios from 'axios';

axios.defaults.headers.post['Content-Type'] = 'application/json';

export const signIn = async auth_token => {
  return await axios.post(`${process.env.REACT_APP_API_URL}/auth/signin`, {
    authentication: auth_token,
  });
};
