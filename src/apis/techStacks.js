import axios from 'axios';
const API_URL = 'http://devfolio.world:3020';

export const fetchTechStacks = async () => {
  return await axios.get(`${API_URL}/api/tech_stacks`);
};
