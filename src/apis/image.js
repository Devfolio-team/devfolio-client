import axios from 'axios';

export const postImage = async formData => {
  return await axios.post(`${process.env.REACT_APP_API_URL}/api/image`, formData, {
    headers: {
      'Content-type': 'multipart/form-data',
    },
  });
};
