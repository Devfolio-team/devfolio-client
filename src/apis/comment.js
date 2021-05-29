import axios from './customAxios';

export const postComment = async commentData => {
  return await axios.post('/api/comment', commentData);
};

export const fetchComments = async projectId => {
  return await axios(`/api/comment/${projectId}`);
};

export const deleteComment = async commentId => {
  return await axios.delete(`/api/comment/${commentId}`);
};

export const editComment = async updateCommentData => {
  return await axios.patch('/api/comment', updateCommentData);
};
