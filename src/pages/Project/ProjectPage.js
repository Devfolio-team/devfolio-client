import React, { useState, useEffect, useRef } from 'react';
import {
  DivisionLine,
  DeleteModalDialog,
  TeamMembers,
  ProjectRegistInfo,
  ProjectNavigator,
  ProjectPlanIntention,
  LikeButton,
  Container,
} from 'components';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import scrollToTop from 'utils/scrollToTop';
import ajax from 'apis/ajax';
import { ProjectComments, ProjectExplanation, ProjectInfo, UseTechStacks } from 'containers';

const StyledProjectPage = styled.main`
  width: 768px;
  margin: 96px auto 0;
  background: #f8f9fa;
  position: relative;
  @media (max-width: 828px) {
    width: 100%;
    padding: 64px 30px 0;
  }
`;

const BottomLikeButton = styled(LikeButton)`
  top: 76px;
  right: 0;

  @media (min-width: 1024px) {
    display: none;
  }
`;

const initalProjectState = {
  projectLoading: true,
  projectData: {
    authorInfo: [{ nickname: '', profile_photo: '' }],
    created: '',
    deploy_url: '',
    end_date: '',
    github_url: '',
    is_private: false,
    main_contents: '',
    plan_intention: '',
    project_id: 0,
    start_date: '',
    subject: '',
    team_name: '',
    thumbnail: '',
    user_id: '',
    likeCount: 0,
    teamMembers: [],
  },
  projectTechStack: [{}],
};

const ProjectPage = ({ match, history }) => {
  const currentUser = useSelector(state => state.auth.currentUser);

  const [project, setProject] = useState(initalProjectState);

  const [isLike, setIsLike] = useState({ value: false, loading: true });

  const {
    deploy_url,
    end_date,
    github_url,
    main_contents,
    plan_intention,
    project_id,
    start_date,
    subject,
    team_name,
    thumbnail,
    likeCount,
    teamMembers,
  } = project.projectData;

  const { projectLoading, projectTechStacks = [] } = project;

  const onLikeCountPlusHandler = async () => {
    if (!currentUser) return;

    try {
      setIsLike({ ...isLike, loading: true });

      //해당 유저가 게시글에 좋아요를 눌렀는지 확인
      const likeButtonResponse = await ajax.getIsPressLikeButton(project_id, currentUser.user_id);

      //좋아요 버튼을 이미 눌렀다면 true 안눌렀다면 false값이 담김
      const likeState = likeButtonResponse.data.existeLike;
      if (!likeState) {
        const postLikeCountPlus = await ajax.postLikeCountPlus(project_id, currentUser.user_id);

        setProject({
          ...project,
          projectData: { ...project.projectData, likeCount: postLikeCountPlus.data.likeCount },
        });
        setIsLike({ value: true, loading: false });
      } else {
        const delLikeCount = await ajax.delLikeCountMinus(project_id, currentUser.user_id);

        setProject({
          ...project,
          projectData: { ...project.projectData, likeCount: delLikeCount.data.likeCount },
        });
        setIsLike({ value: false, loading: false });
      }
    } catch (e) {
      throw new Error(e);
    }
  };

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const deleteButtonRef = useRef(null);

  const onDeleteModalOpenHandler = () => {
    setIsDeleteModalOpen(true);
  };

  const onDeleteProjectHandler = async () => {
    try {
      await ajax.deleteProject(match.params.project_id);
      history.push('/');
    } catch (error) {
      history.push('/page-not-found');
    }
  };

  useEffect(() => {
    scrollToTop();

    const getProjectData = async () => {
      try {
        const projectData = await ajax.getProject(match.params.project_id);

        setProject({ ...projectData.data.responseData, projectLoading: false });
      } catch (error) {
        throw new Error(error);
      }
    };
    getProjectData();
  }, [match.params.project_id]);

  useEffect(() => {
    const getIsLike = async () => {
      try {
        const likeButtonResponse = await ajax.getIsPressLikeButton(project_id, currentUser.user_id);
        const value = await likeButtonResponse.data.existeLike;
        setIsLike({ value, loading: false });
      } catch (e) {
        throw new Error(e);
      }
    };

    if (currentUser && project_id) getIsLike();
  }, [currentUser, project_id]);

  return (
    <StyledProjectPage>
      <ProjectRegistInfo projectData={project.projectData} projectLoading={projectLoading} />

      <ProjectNavigator subject={subject} />

      <ProjectInfo
        subject={subject}
        team_name={team_name}
        onDeleteModalOpenHandler={onDeleteModalOpenHandler}
        projectData={project && project.projectData}
        ref={deleteButtonRef}
        onLikeCountPlusHandler={onLikeCountPlusHandler}
        isLike={isLike}
        likeCount={likeCount}
        deploy_url={deploy_url}
        github_url={github_url}
        thumbnail={thumbnail}
      />

      <DivisionLine width="75%" />

      <ProjectPlanIntention planIntention={plan_intention} projectLoading={projectLoading} />

      <DivisionLine width="75%" />

      <TeamMembers teamMembers={teamMembers} projectLoading={projectLoading} />

      <DivisionLine width="75%" />

      <UseTechStacks techStacks={projectTechStacks} projectLoading={projectLoading} />

      <DivisionLine width="75%" />

      <ProjectExplanation
        mainContents={main_contents}
        startDate={start_date}
        endDate={end_date}
        projectLoading={projectLoading}
      />

      <DivisionLine width="75%" />

      <Container position="relative">
        <BottomLikeButton
          isLike={isLike}
          likeCount={likeCount}
          onLikeCountPlusHandler={onLikeCountPlusHandler}
        />
      </Container>

      <ProjectComments projectId={project.projectData.project_id} />

      {isDeleteModalOpen && (
        <DeleteModalDialog
          deleteButtonRef={deleteButtonRef}
          setIsDeleteModalOpen={setIsDeleteModalOpen}
          deleteEvent={onDeleteProjectHandler}
          deleteTargetName="프로젝트"
        />
      )}
    </StyledProjectPage>
  );
};

ProjectPage.defaultProps = {};

ProjectPage.propTypes = {};

export default ProjectPage;
