import axios from 'axios';
const API_URL = 'http://devfolio.world:3020';

export const postImage = async formData => {
  return await axios.post(`${API_URL}/api/image`, formData, {
    headers: {
      'Content-type': 'multipart/form-data',
    },
  });
};
