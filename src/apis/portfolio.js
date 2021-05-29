import axios from './customAxios';

export const getPortfolio = async userId => {
  return await axios.get(`/api/portfolio?user_id=${userId}`);
};

export const editPortfolio = async (userId, editedInfo) => {
  return await axios.patch(`/api/portfolio?user_id=${userId}`, editedInfo);
};
