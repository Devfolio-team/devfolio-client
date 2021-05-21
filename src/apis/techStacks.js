import axios from 'axios';

export const fetchTechStacks = async () => {
  return await axios.get(`${process.env.REACT_APP_API_URL}/api/tech_stacks`);
};

export const requestNewTechStack = async stackName => {
  return await axios.post(
    `${process.env.REACT_APP_API_URL}/api/request_tech_stacks?stack_name=${stackName}`
  );
};
