import axios from 'axios';
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
