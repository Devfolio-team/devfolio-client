import axios from './customAxios';

export const fetchTechStacks = async () => {
  return await axios.get('/api/tech_stacks');
};

export const requestNewTechStack = async stackName => {
  return await axios.post(`/api/request_tech_stacks?stack_name=${stackName}`);
};
