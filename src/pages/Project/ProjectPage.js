import {
  Button,
  Container,
  DivisionLine,
  Heading,
  Paragraph,
  ProjectExplanation,
  SkillIcon,
  Span,
  SVGIcon,
  Time,
  DeleteModalDialog,
  SectionHeading,
  TeamMembers,
  ProjectRegistInfo,
  ProjectNavigator,
} from 'components';
import useDetectViewport from 'hooks/useDetectViewport';
import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import styled, { css } from 'styled-components';
import { applyStyle, dateFormMaker } from 'utils';
import scrollToTop from 'utils/scrollToTop';
import ajax from 'apis/ajax';
import Skeleton from '@yisheng90/react-loading';
import { ProjectComments, ProjectInfo } from 'containers';

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

const SkillList = styled.ul`
  ${props => css`
    ${applyStyle(props)}
  `}
`;

const SkillIconItem = styled.li`
  display: flex;
  justify-content: center;
  width: 50%;
  margin: 0 0 20px 0;
  align-items: center;
  @media (max-width: 600px) {
    justify-content: left;
    width: 100%;
  }
  ${props => css`
    ${applyStyle(props)}
  `}
`;

const LikeButton = styled(Button)`
  ${props => css`
    ${applyStyle(props)}
  `}
  &:hover {
    background: #e0e0e0;
    stroke: none;
  }
`;

const HeartIcon = styled(SVGIcon)`
  & {
    stroke: #a3abb3;
  }
  path {
    fill: white;
  }
`;

const SkeletonUI = styled(Skeleton)`
  ${props => css`
    &&&& {
      ${applyStyle(props)}
    }
  `}
`;

const ProjectPage = ({ match, history }) => {
  const { isDesktop, vw, type } = useDetectViewport();
  const initalProject = {
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
      teamMembers: [],
    },
    projectTechStack: [{}],
  };

  const initalLoginUser = {
    user_id: null,
  };
  const [project, setProject] = useState(initalProject);
  const [loginUser, setLoginUser] = useState(initalLoginUser);
  const [isLike, setIsLike] = useState(true);
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

  const { projectTechStacks } = project;
  const loginUserInfo = useSelector(state => state.auth.currentUser);

  const onLikeCountPlusHandler = async () => {
    if (!loginUser.user_id) return;

    //해당 유저가 게시글에 좋아요를 눌렀는지 확인
    const likeButtonResponse = await ajax.getIsPressLikeButton(project_id, loginUser.user_id);

    //좋아요 버튼을 누르면 true 안누르면 false
    const likeState = likeButtonResponse.data.existeLike;
    try {
      if (!likeState) {
        // LikeCount++
        const postLikeCountPlus = await ajax.postLikeCountPlus(project_id, loginUser.user_id);

        setProject(
          { ...project },
          (project.projectData.likeCount = postLikeCountPlus.data.likeCount)
        );
        setIsLike(true);
      } else {
        const DelLikeCount = await ajax.delLikeCountMinus(project_id, loginUser.user_id);

        setProject({ ...project }, (project.projectData.likeCount = DelLikeCount.data.likeCount));
        setIsLike(false);
      }
    } catch (e) {
      throw new Error(e);
    }
  };

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

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

  const deleteButtonRef = useRef(null);

  // 페이지 로딩 될 때 최초 한 번만 뷰포트 최상단으로 끌어올리기
  useEffect(() => {
    scrollToTop();
  }, []);

  useEffect(() => {
    if (loginUserInfo) setLoginUser(loginUserInfo);
    const project = async () => {
      try {
        const projectData = await ajax.getProject(match.params.project_id);

        setProject(projectData.data.responseData);
      } catch (e) {
        // throw new Error(e);
      }
    };
    project();

    //처음에 페이지 접속 했을 때 프로젝트에 좋아요를 눌렀는가?
    const getIsLike = async () => {
      if (!loginUser.user_id) return;
      try {
        const likeButtonResponse = await ajax.getIsPressLikeButton(project_id, loginUser.user_id);
        const likeState = await likeButtonResponse.data.existeLike;

        if (likeState) {
          setIsLike(true);
        } else {
          setIsLike(false);
        }
      } catch (e) {
        throw new Error(e);
      }
    };
    getIsLike();
  }, [loginUser.user_id, loginUserInfo, match.params.project_id, project_id]);

  return (
    <StyledProjectPage>
      <ProjectRegistInfo projectData={project.projectData} />

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
      <Container margin=" 0 0 80px 0">
        {subject ? (
          <SectionHeading id="기획의도">기획 의도 및 소개</SectionHeading>
        ) : (
          <SkeletonUI $width="120px" $height="40px" $margin="100px 0 47px 0" />
        )}
        {subject ? (
          <Paragraph
            color="#666666"
            fontSize={1.6}
            fontWeight="700"
            lineHeight="25px"
            padding="0 15px"
          >
            {plan_intention}
          </Paragraph>
        ) : (
          <SkeletonUI width="100%" height="200px" />
        )}
      </Container>
      <DivisionLine width="75%" />
      <TeamMembers teamMembers={teamMembers} />
      <DivisionLine width="75%" />
      <Container width={isDesktop ? '788px' : '100%'}>
        {subject ? (
          <SectionHeading id="사용기술스택">사용 기술 스택</SectionHeading>
        ) : (
          <SkeletonUI $width="120px" $height="40px" $margin="100px 0 47px 0" />
        )}
        {subject ? (
          <SkillList
            $margin="0 auto"
            $width="100%"
            $display="flex"
            $flexWrap="wrap"
            $justifyContent="space-between"
          >
            {projectTechStacks &&
              projectTechStacks.map(skill => (
                <SkillIconItem key={skill.project_tech_stacks_id}>
                  <SkillIcon type={skill.tech_name} width={60} height={60}></SkillIcon>
                  <Span
                    color="#666666"
                    fontSize={isDesktop ? 2.3 : 2}
                    fontWeight="700"
                    width={isDesktop ? '200px' : type === 'sm' ? '100px' : '100px'}
                    textAlign="left"
                    marginLeft={isDesktop ? '30px' : '10px'}
                  >
                    {skill.tech_name}
                  </Span>
                </SkillIconItem>
              ))}
          </SkillList>
        ) : (
          <SkeletonUI width="100%" height="200px" />
        )}
      </Container>
      <DivisionLine width="75%" />
      <Container>
        {subject ? (
          <SectionHeading id="프로젝트설명">프로젝트 설명</SectionHeading>
        ) : (
          <SkeletonUI $width="120px" $height="40px" $margin="100px 0 47px 0" />
        )}
        <Container margin="0 0 10px">
          {subject ? (
            <>
              <Heading as="h4" fontSize={1.5} margin="0 0 5px 0">
                프로젝트 기간
              </Heading>
              <Time fontSize={1.6} dateTime={dateFormMaker(start_date)} color="#70777d">
                {dateFormMaker(start_date)}
              </Time>
              <Span fontSize={1.6} color="#70777d">
                {' '}
                ~{' '}
              </Span>
              <Time fontSize={1.6} dateTime={dateFormMaker(end_date)} color="#70777d">
                {dateFormMaker(end_date)}
              </Time>
            </>
          ) : (
            <SkeletonUI $width="200px" $height="10px" />
          )}
        </Container>
        {subject ? (
          main_contents === null ? null : (
            <ProjectExplanation>{main_contents}</ProjectExplanation>
          )
        ) : (
          <SkeletonUI width="100%" height="200px" />
        )}
      </Container>

      <DivisionLine width="75%" />

      {vw <= 1024 && (
        <Container position="relative">
          <LikeButton
            aria-label="좋아요 버튼"
            borderRadius="5px"
            background="inherit"
            border="1px solid #A3ABB3"
            width="82px"
            height="33px"
            padding="0"
            display="flex"
            $justifyContent="center"
            $alignItems="center"
            $color="#212121"
            $position="absolute"
            $right="0"
            $top="80px"
            title={loginUser.user_id === null ? '로그인이 필요합니다.' : ''}
            $cursor={loginUser.user_id === null ? 'not-allowed' : ''}
            onClick={onLikeCountPlusHandler}
          >
            {isLike === false ? (
              <HeartIcon type="HeartRed" width={20} height={20}></HeartIcon>
            ) : (
              <SVGIcon type="HeartRed" width={20} height={20}></SVGIcon>
            )}
            <Span fontSize={1.6} lineHeight="16px" margin="0 0 0 10px">
              {likeCount}
            </Span>
          </LikeButton>
        </Container>
      )}

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
