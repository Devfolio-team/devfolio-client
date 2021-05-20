import axios from 'axios';

// TODO: 배포단계에서 API_URL을 process.env파일로 서버와 분리예정
const API_URL = 'http://localhost:3020';

export const postComment = async commentData => {
  return await axios.post(`${API_URL}/api/comment`, commentData, {
    headers: {
      'Content-type': 'application/json',
    },
  });
};

export const fetchComments = async projectId => {
  return await axios(`${API_URL}/api/comment/${projectId}`);
};

export const deleteComment = async commentId => {
  return await axios.delete(`${API_URL}/api/comment/${commentId}`);
};

export const editComment = async (commentData, commentId) => {
  return await axios.patch(`${API_URL}/api/project/${commentId}`, commentData, {
    headers: {
      'Content-type': 'application/json',
    },
  });
};
