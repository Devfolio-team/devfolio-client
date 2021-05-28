import axios from './customAxios';

export const signIn = async () => {
  return await axios.post('/auth/signin');
};

export const deleteAccount = async userId => {
  return await axios.delete(`/auth/${userId}`);
};
