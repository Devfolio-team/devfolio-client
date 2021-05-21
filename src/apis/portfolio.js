import axios from 'axios';

export const getPortfolio = async userId => {
  return await axios.get(`${process.env.REACT_APP_API_URL}/api/portfolio?user_id=${userId}`);
};

export const editPortfolio = async (userId, editedInfo) => {
  return await axios.patch(
    `${process.env.REACT_APP_API_URL}/api/portfolio?user_id=${userId}`,
    editedInfo
  );
};
