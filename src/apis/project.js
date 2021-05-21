import axios from 'axios';

export const fetchProjects = async () => {
  return await axios.get(`${process.env.REACT_APP_API_URL}/api/projects`);
};

export const postProject = async projectData => {
  return await axios.post(`${process.env.REACT_APP_API_URL}/api/project`, projectData, {
    headers: {
      'Content-type': 'application/json',
    },
  });
};

export const getProject = async userId => {
  return await axios(`${process.env.REACT_APP_API_URL}/api/project/${userId}`);
};

export const deleteProject = async projectId => {
  return await axios.delete(`${process.env.REACT_APP_API_URL}/api/project/${projectId}`);
};

export const getIsPressLikeButton = async (projectId, loginUserId) => {
  return await axios(
    `${process.env.REACT_APP_API_URL}/api/project_like?project_id=${projectId}&user_id=${loginUserId}`
  );
};

export const postLikeCountPlus = async (projectId, loginUserId) => {
  return await axios({
    method: 'post',
    url: `${process.env.REACT_APP_API_URL}/api/project_like?project_id=${projectId}&user_id=${loginUserId}`,
  });
};

export const delLikeCountMinus = async (projectId, loginUserId) => {
  return await axios({
    method: 'delete',
    url: `${process.env.REACT_APP_API_URL}/api/project_like?project_id=${projectId}&user_id=${loginUserId}`,
  });
};

export const editProject = async (projectData, projectId) => {
  return await axios.patch(
    `${process.env.REACT_APP_API_URL}/api/project/${projectId}`,
    projectData,
    {
      headers: {
        'Content-type': 'application/json',
      },
    }
  );
};

export const fetchFavoriteProjects = async userId => {
  return await axios.get(`${process.env.REACT_APP_API_URL}/api/favorite_projects/${userId}`);
};
