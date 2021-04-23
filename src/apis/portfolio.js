import axios from 'axios';
const API_URL = 'http://devfolio.world:3020';

export const getPortfolio = async userId => {
  return await axios.get(`${API_URL}/api/portfolio?user_id=${userId}`);
};
