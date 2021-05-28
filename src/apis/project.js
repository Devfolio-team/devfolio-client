import axios from './customAxios';

export const fetchProjects = async (sort, page, limit) => {
  return await axios.get(`/api/projects?sort=${sort}&page=${page}&size=${limit}`);
};

export const postProject = async projectData => {
  return await axios.post('/api/project', projectData);
};

export const getProject = async userId => {
  return await axios(`/api/project/${userId}`);
};

export const deleteProject = async projectId => {
  return await axios.delete(`/api/project/${projectId}`);
};

export const getIsPressLikeButton = async (projectId, loginUserId) => {
  return await axios(`/api/project_like?project_id=${projectId}&user_id=${loginUserId}`);
};

export const postLikeCountPlus = async (projectId, loginUserId) => {
  return await axios.post(`/api/project_like?project_id=${projectId}&user_id=${loginUserId}`);
};

export const delLikeCountMinus = async (projectId, loginUserId) => {
  return await axios.delete(`/api/project_like?project_id=${projectId}&user_id=${loginUserId}`);
};

export const editProject = async (projectData, projectId) => {
  return await axios.patch(`/api/project/${projectId}`, projectData);
};

export const fetchFavoriteProjects = async (userId, page, limit) => {
  return await axios.get(`/api/favorite_projects/${userId}?page=${page}&limit=${limit}`);
};

export const searchProjectByTitle = async search => {
  return await axios.get(`/api/projects/search?q=${search}`);
};
