import axios from 'axios';

// TODO: 배포단계에서 API_URL을 process.env파일로 서버와 분리예정
const API_URL = 'http://devfolio.world:3020';

export const fetchProjects = async () => {
  return await axios.get(`${API_URL}/api/projects`);
};

export const postProject = async projectData => {
  return await axios.post(`${API_URL}/api/project`, projectData, {
    headers: {
      'Content-type': 'application/json',
    },
  });
};

export const getProject = async userId => {
  return await axios(`${API_URL}/api/project/${userId}`);
};

export const getIsPressLikeButton = async (projectId, loginUserId) => {
  return await axios(`${API_URL}/api/project_like?project_id=${projectId}&user_id=${loginUserId}`);
};

export const postLikeCountPlus = async (projectId, loginUserId) => {
  return await axios({
    method: 'post',
    url: `${API_URL}/api/project_like?project_id=${projectId}&user_id=${loginUserId}`,
  });
};

export const delLikeCountMinus = async (projectId, loginUserId) => {
  return await axios({
    method: 'delete',
    url: `${API_URL}/api/project_like?project_id=${projectId}&user_id=${loginUserId}`,
  });
};
