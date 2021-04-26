import axios from 'axios';

// TODO: 배포단계에서 API_URL을 process.env파일로 서버와 분리예정
const API_URL = 'http://devfolio.world:3020';

export const postImage = async formData => {
  return await axios.post(`${API_URL}/api/image`, formData, {
    headers: {
      'Content-type': 'multipart/form-data',
    },
  });
};
