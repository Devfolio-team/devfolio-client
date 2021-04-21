import { signIn } from 'apis/auth';
import { fetchProjects } from 'apis/project';
import { postImage } from 'apis/image';

const ajax = {
  signIn,
  fetchProjects,
  postImage,
};

export default ajax;
