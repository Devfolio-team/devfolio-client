import { signIn } from 'apis/auth';
import { fetchProjects, postProject } from 'apis/project';
import { postImage } from 'apis/image';
import { getPortfolio } from 'apis/portfolio';
import { fetchTechStacks } from 'apis/techStacks';
import {
  getProject,
  getIsPressLikeButton,
  postLikeCountPlus,
  delLikeCountMinus,
} from 'apis/project';

const ajax = {
  signIn,
  fetchProjects,
  postImage,
  postProject,
  getPortfolio,
  fetchTechStacks,
  getProject,
  getIsPressLikeButton,
  postLikeCountPlus,
  delLikeCountMinus,
};

export default ajax;
