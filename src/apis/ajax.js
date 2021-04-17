import { signIn, signUp } from 'apis/auth';
import { fetchProjects } from 'apis/project';

const ajax = {
  signIn,
  signUp,
  fetchProjects,
};

export default ajax;
