import axios from 'axios';

// TODO: 배포단계에서 API_URL을 process.env파일로 서버와 분리예정
const API_URL = 'http://devfolio.world:3020';

export const getPortfolio = async userId => {
  return await axios.get(`${API_URL}/api/portfolio?user_id=${userId}`);
};
