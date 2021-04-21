import { signIn } from 'apis/auth';
import { fetchProjects, postProject } from 'apis/project';
import { postImage } from 'apis/image';

const ajax = {
  signIn,
  fetchProjects,
  postImage,
  postProject,
};

export default ajax;
