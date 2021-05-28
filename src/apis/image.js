import axios from './customAxios';

export const postImage = async formData => {
  return await axios.post('/api/image', formData, {
    headers: {
      'Content-type': 'multipart/form-data',
    },
  });
};
