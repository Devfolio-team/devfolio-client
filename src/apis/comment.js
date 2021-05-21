import axios from 'axios';

export const postComment = async commentData => {
  return await axios.post(`${process.env.REACT_APP_API_URL}/api/comment`, commentData, {
    headers: {
      'Content-type': 'application/json',
    },
  });
};

export const fetchComments = async projectId => {
  return await axios(`${process.env.REACT_APP_API_URL}/api/comment/${projectId}`);
};

export const deleteComment = async commentId => {
  return await axios.delete(`${process.env.REACT_APP_API_URL}/api/comment/${commentId}`);
};

export const editComment = async updateCommentData => {
  return await axios.patch(`${process.env.REACT_APP_API_URL}/api/comment`, updateCommentData, {
    headers: {
      'Content-type': 'application/json',
    },
  });
};
