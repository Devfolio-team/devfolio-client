import { signIn } from 'apis/auth';
import { fetchProjects, postProject } from 'apis/project';
import { postImage } from 'apis/image';
import { getPortfolio } from 'apis/portfolio';
import { fetchTechStacks } from 'apis/techStacks';
import { editPortfolio } from 'apis/portfolio';

const ajax = {
  signIn,
  fetchProjects,
  postImage,
  postProject,
  getPortfolio,
  fetchTechStacks,
  editPortfolio,
};

export default ajax;
