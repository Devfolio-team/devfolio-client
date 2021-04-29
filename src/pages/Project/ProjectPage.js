import {
  Anchor,
  Button,
  Container,
  Heading,
  Image,
  Paragraph,
  ProjectExplanation,
  ProjectNav,
  SkillIcon,
  Span,
  SVGIcon,
  Time,
} from 'components';
import useDetectViewport from 'hooks/useDetectViewport';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled, { css } from 'styled-components';
import { applyStyle } from 'utils';
import scrollToTop from 'utils/scrollToTop';
import ajax from 'apis/ajax';
import { ReactComponent as LoadingSpinner } from 'assets/LoadingSpinner.svg';
import Skeleton from '@yisheng90/react-loading';
import { Flicker } from 'react-micron';
import DeleteModifyButton from './DeleteModifyButton';
import DeleteModalDialog from './DeleteModalDialog';
import StyledToEditPageLink from './ToEditPageLink';

const StyledProjectPage = styled.main`
  ${props => css`
    ${applyStyle(props)}
    position: relative;
  `}
`;

const ProjectWriter = styled(Anchor)`
  ${props => css`
    ${applyStyle(props)}
    width: ${'200px'};
    font-size: ${'1.6rem'};
  `}
`;

const LinkToWebSite = styled.a`
  ${props => css`
    ${applyStyle(props)}
  `}

  &:hover {
    background: #428bca;
    color: #fff;

    path {
      fill: #fff;
    }
  }
`;

const WebSiteIcon = styled(SVGIcon)`
  ${props => css`
    ${applyStyle(props)}
  `}
`;

const DivisionLine = styled.div`
  ${props => css`
    ${applyStyle(props)}
    border-bottom: ${'1px solid #666666'};
    margin: ${'100px auto 0 auto'};
  `}
`;

const SkillList = styled.ul`
  ${props => css`
    ${applyStyle(props)}
  `}
`;

const SkillIconItem = styled.li`
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

const LinkToWebSiteWrapper = styled.div`
  ${props => css`
    ${applyStyle(props)}
  `}
`;

const DisabledLink = styled(Span)`
  ${props => css`
    ${applyStyle(props)}
  `}
`;

const NavListItem = styled.li`
  ${props => css`
    ${applyStyle(props)}
    margin-bottom: 15px;
  `}
`;

const NavLink = styled(Anchor)`
  ${props => css`
    ${applyStyle(props)}
    color : rgb(134, 142, 150);
  `}
`;

const SkeletonUI = styled(Skeleton)`
  ${props => css`
    &&&& {
      ${applyStyle(props)}
    }
  `}
`;

const Spinner = styled(LoadingSpinner)`
  ${props => css`
     {
      ${applyStyle(props)}
    }
  `}
`;

const ProjectPage = ({ match }) => {
  const { isDesktop, vw, type } = useDetectViewport();
  const [scrollY, setScrollY] = useState(0);
  const [isIMGLoading, setIsIMGLoading] = useState(true);
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
    },
    projectTechStack: [{}],
  };

  const initalLoginUser = {
    user_id: null,
  };
  const [project, setProject] = useState(initalProject);
  const [loginUser, setLoginUser] = useState(initalLoginUser);
  const [isLike, setIsLike] = useState(false);
  const {
    created,
    deploy_url,
    end_date,
    github_url,
    // is_private,
    main_contents,
    plan_intention,
    project_id,
    start_date,
    subject,
    team_name,
    thumbnail,
    likeCount,
    user_user_id,
  } = project.projectData;

  // eslint-disable-next-line prefer-destructuring
  const {
    nickname: project_nickname,
    profile_photo: project_profile_photo,
  } = project.projectData.authorInfo[0];

  const { projectTechStacks } = project;
  const loginUserInfo = useSelector(state => state.auth.currentUser);

  const onScrollHandler = () => {
    setScrollY(window.pageYOffset);
  };

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
        // likeCount--
        const DelLikeCount = await ajax.delLikeCountMinus(project_id, loginUser.user_id);

        setProject({ ...project }, (project.projectData.likeCount = DelLikeCount.data.likeCount));
        setIsLike(false);
      }
    } catch (e) {
      throw new Error(e);
    }
  };

  const onIsIMGLoadingHandler = () => {
    setIsIMGLoading(false);
  };

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const onDeleteModalOpenHandler = () => {
    setIsDeleteModalOpen(true);
  };

  // 페이지 로딩 될 때 최초 한 번만 뷰포트 최상단으로 끌어올리기
  useEffect(() => {
    scrollToTop();
  }, []);

  // 날짜를 yyyy.mm.dd 형식으로 변환하는 함수
  const DateFormMaker = date => {
    return date.slice(0, 10).replace('-', '.').replace('-', '.');
  };

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

  useEffect(() => {
    function watchScroll() {
      window.addEventListener('scroll', onScrollHandler);
    }
    watchScroll();
    return () => {
      window.removeEventListener('scroll', onScrollHandler);
    };
  });

  return (
    <StyledProjectPage
      $width={isDesktop ? '768px' : '100%'}
      $margin="96px auto 0 auto"
      $background="#F8F9FA"
    >
      <Container
        width="100%"
        margin={isDesktop ? '0 30px 30px 0' : '0'}
        padding={isDesktop ? '0 70px' : '0 30px'}
        display="flex"
        justifyContent="space-between"
        position={vw > 840 ? 'relative' : ''}
      >
        {/* 뷰포트크기가 840px 이상이면 동그란 좋아요버튼 생성 */}
        {vw > 840 ? (
          <Container position="absolute" left="-10px">
            <Container
              display="flex"
              flexFlow="column"
              justifyContent="center"
              alignItems="center"
              margin="0"
              position={scrollY > 0 ? 'fixed' : ''}
              transform={scrollY > 130 ? 'translate3D(0, 130px, 0)' : ''}
              transition="0.5s"
            >
              {subject ? (
                <>
                  <Flicker
                    events="onMouseEnter"
                    timing="ease-in-out"
                    duration={0.45}
                    inline={false}
                  >
                    <LikeButton
                      borderRadius="50%"
                      background="inherit"
                      border="1px solid #A3ABB3"
                      width="44px"
                      height="44px"
                      padding="0"
                      onClick={onLikeCountPlusHandler}
                      title={loginUser.user_id === null ? '로그인이 필요합니다.' : ''}
                      $cursor={loginUser.user_id === null ? 'not-allowed' : ''}
                    >
                      {isLike === false ? (
                        <HeartIcon type="HeartRed" width={20} height={20}></HeartIcon>
                      ) : (
                        <SVGIcon type="HeartRed" width={20} height={20}></SVGIcon>
                      )}
                    </LikeButton>
                  </Flicker>
                  <Span fontSize={1.4} lineHeight="16px" margin="5px 0 0 0">
                    {likeCount}
                  </Span>{' '}
                </>
              ) : (
                <SkeletonUI circle $width="44px" $height="44px" />
              )}
            </Container>
          </Container>
        ) : (
          ''
        )}
        <Container display="flex" alignItems="center" width="215px" margin="0">
          {subject ? (
            <>
              <Time
                margin={type === 'xs' ? '0 10px 0 0' : '0 43px 0 0'}
                fontSize={1.6}
                dateTime={DateFormMaker(created)}
              >
                {DateFormMaker(created)}
              </Time>
              <Container display="flex">
                <ProjectWriter href={`/portfolio/${user_user_id}`}>
                  <Image
                    src={project_profile_photo}
                    alt="닉네임프로필사진"
                    width="24px"
                    height="24px"
                    borderRadius="50%"
                    $margin="0 8px 0 0"
                  />
                  {project_nickname}
                </ProjectWriter>
              </Container>
            </>
          ) : (
            <SkeletonUI $display="inline-block" $width="200px" $height="16px" />
          )}
        </Container>
        <Container position="relative" display={vw > 1050 ? '' : 'none'}>
          <Container position="absolute" left="250px" width="200px">
            <Container
              position="fixed"
              transform={scrollY > 130 ? 'translate3D(0, 130px, 0)' : ''}
              transition="0.5s"
            >
              {subject ? (
                <ProjectNav
                  borderLeft="1.5px solid rgba(134, 142, 150, .5)"
                  padding="0 40px 0 10px"
                  fontSize={1.5}
                >
                  <NavListItem>
                    <NavLink href="#제목">{subject}</NavLink>
                  </NavListItem>
                  <NavListItem>
                    <NavLink href="#기획의도">기획의도</NavLink>
                  </NavListItem>
                  <NavListItem>
                    <NavLink href="#사용기술스택">사용기술스택</NavLink>
                  </NavListItem>
                  <NavListItem>
                    <NavLink href="#프로젝트설명">프로젝트설명</NavLink>
                  </NavListItem>
                </ProjectNav>
              ) : (
                <SkeletonUI $width="150px" $height="10px" rows={4} />
              )}
            </Container>
          </Container>
        </Container>
      </Container>
      <Container margin="0 0 32px 0" padding={isDesktop ? '0 70px' : '0 30px'} position="relative">
        {subject === '' ? (
          <SkeletonUI $width="300px" $height="50px" $margin="120px 0 0 0" />
        ) : (
          <Heading
            as="h2"
            id="제목"
            fontSize={type === 'xs' ? 2.7 : 4}
            color="#212121"
            lineHeight={type === 'xs' ? '3.5rem' : '5rem'}
            margin={type === 'xs' ? '' : '20px 0'}
            $padding={type === 'xs' ? '30px 0 0 0' : '80px 0 0 0'}
          >
            {subject}
          </Heading>
        )}
        {/* 뷰포트크기가 840px이 이하일 떄 네모난 좋아요버튼 생성 */}
        {vw > 840 ? null : (
          <LikeButton
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
            $top={vw >= 480 ? '-50px' : '-70px'}
            $right={vw >= 768 ? '70px' : '30px'}
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
        )}
        {subject ? (
          <Span
            display="inline-block"
            fontSize={type === 'xs' ? 1.8 : 2}
            lineHeight={type === 'xs' ? '' : '10px'}
            margin={type === 'xs' ? '15px 0 0 0' : ''}
            color="#212121"
          >
            {team_name}
          </Span>
        ) : (
          <SkeletonUI $width="150px" $height="30px" $margin="10px 0 0 0" />
        )}
        {loginUserInfo && project && loginUserInfo.user_id === project.projectData.user_user_id && (
          <Container
            margin="0"
            position="absolute"
            top={vw > 840 ? '-50px' : 0}
            right={vw >= 768 ? '70px' : '30px'}
          >
            <StyledToEditPageLink to={`/edit/project/${project.projectData.project_id}`}>
              수정
            </StyledToEditPageLink>
            <DeleteModifyButton onClick={onDeleteModalOpenHandler}>삭제</DeleteModifyButton>
          </Container>
        )}
      </Container>
      <Container
        display={type === 'xs' ? '' : 'flex'}
        justifyContent={type === 'xs' ? '' : 'space-between'}
        margin="0 0 22px 0"
        padding={isDesktop ? '0 70px' : '0 30px'}
      >
        {subject ? (
          <LinkToWebSiteWrapper
            $cursor="not-allowed"
            title={deploy_url ? '배포된 사이트로 이동' : '배포된 사이트가 없습니다.'}
          >
            {deploy_url ? (
              <LinkToWebSite
                href={deploy_url ? deploy_url : '/'}
                target="_blank"
                $fontSize={1.6}
                $fontWeight="700"
                $borderRadius={5}
                $border={deploy_url ? '1px solid #428BCA' : '1px solid rgba(66, 139, 202, 0.3)'}
                $width={type === 'xs' ? '100%' : '200px'}
                $marginBottom={type === 'xs' ? '5px' : ''}
                $height="44px"
                $textAlign="center"
                $lineHeight="40px"
                $color={deploy_url ? '#428BCA' : 'rgba(66, 139, 202, 0.3)'}
                $background={'#FFFFFF'}
                $display="flex"
                $justifyContent="center"
                $alignItems="center"
                $pointerEvents={deploy_url ? '' : 'none'}
              >
                <WebSiteIcon
                  type={deploy_url ? 'WebSite' : 'WebSiteDisable'}
                  $margin="0 7px 0 0"
                  $width={20}
                  $height={20}
                />
                Visit the Website
              </LinkToWebSite>
            ) : (
              <DisabledLink
                $fontSize={1.6}
                $fontWeight="700"
                $borderRadius={5}
                $border={deploy_url ? '1px solid #428BCA' : '1px solid rgba(66, 139, 202, 0.3)'}
                $width={type === 'xs' ? '100%' : '200px'}
                $marginBottom={type === 'xs' ? '5px' : ''}
                $height="44px"
                $textAlign="center"
                $lineHeight="40px"
                $color={deploy_url ? '#428BCA' : 'rgba(66, 139, 202, 0.3)'}
                $background={'#FFFFFF'}
                $display="flex"
                $justifyContent="center"
                $alignItems="center"
                $pointerEvents={deploy_url ? '' : 'none'}
              >
                Visit the Website
              </DisabledLink>
            )}
          </LinkToWebSiteWrapper>
        ) : (
          <SkeletonUI width={type === 'xs' ? '100%' : '200px'} height="44px" />
        )}
        {subject ? (
          <LinkToWebSiteWrapper
            $cursor="not-allowed"
            title={github_url ? '깃허브로 이동' : '깃허브 주소가 없습니다.'}
          >
            {github_url ? (
              <LinkToWebSite
                href={github_url ? github_url : '/'}
                target="_blank"
                $fontSize={1.6}
                $fontWeight="700"
                $borderRadius={5}
                $border="1px solid #428BCA"
                $width={type === 'xs' ? '100%' : '145px'}
                $height="44px"
                $textAlign="center"
                $lineHeight="40px"
                $color={github_url ? '#428BCA' : 'rgba(66, 139, 202, 0.3)'}
                $background={'#FFFFFF'}
                $display="flex"
                $justifyContent="center"
                $alignItems="center"
                $pointerEvents={github_url ? '' : 'none'}
              >
                <WebSiteIcon
                  type={github_url ? 'GithubBlue' : 'GithubBlueDisable'}
                  $marginRight="9px"
                  $width={20}
                  $height={20}
                />
                GitHub
              </LinkToWebSite>
            ) : (
              <DisabledLink
                $fontSize={1.6}
                $fontWeight="700"
                $borderRadius={5}
                $border={deploy_url ? '1px solid #428BCA' : '1px solid rgba(66, 139, 202, 0.3)'}
                $width={type === 'xs' ? '100%' : '200px'}
                $marginBottom={type === 'xs' ? '5px' : ''}
                $height="44px"
                $textAlign="center"
                $lineHeight="40px"
                $color={deploy_url ? '#428BCA' : 'rgba(66, 139, 202, 0.3)'}
                $background={'#FFFFFF'}
                $display="flex"
                $justifyContent="center"
                $alignItems="center"
                $pointerEvents={deploy_url ? '' : 'none'}
              >
                Visit the Website
              </DisabledLink>
            )}
          </LinkToWebSiteWrapper>
        ) : (
          <SkeletonUI $width={type === 'xs' ? '100%' : '200px'} $height="44px" />
        )}
      </Container>
      <Container position="relative" padding={isDesktop ? '0 70px' : '0 30px'} minHeight="300px">
        {subject ? (
          <>
            {isIMGLoading ? (
              <Spinner
                $position="absolute"
                $top="50%"
                $left="50%"
                $transform="translate(-50%, -50%)"
              />
            ) : null}
            <Image
              src={thumbnail}
              alt="프로젝트 썸네일"
              onLoad={onIsIMGLoadingHandler}
              width="100%"
              borderRadius="10px"
            />
          </>
        ) : (
          <SkeletonUI width="100%" height="300px" />
        )}
      </Container>
      <DivisionLine $width={isDesktop ? '500px' : '70%'} />
      <Container margin=" 0 0 80px 0" padding={isDesktop ? '0 70px' : '0 30px'}>
        {subject ? (
          <Heading
            as="h3"
            id="기획의도"
            color="#212121"
            display="inline-block"
            fontWeight={700}
            fontSize="3"
            borderBottom="14px solid rgba(66, 139, 202, 0.6)"
            lineHeight="10px"
            margin="0 0 47px 0"
            $padding="100px 0 0 0"
          >
            기획 의도
          </Heading>
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
      <DivisionLine $width={isDesktop ? '500px' : '70%'} />
      <Container width={isDesktop ? '788px' : '100%'} padding={isDesktop ? '0 70px' : '0 30px'}>
        {subject ? (
          <Heading
            as="h3"
            id="사용기술스택"
            display="inline-block"
            color="#212121"
            fontWeight={700}
            fontSize="3"
            borderBottom="14px solid rgba(66, 139, 202, 0.6)"
            lineHeight="10px"
            margin="0 0 47px 0"
            $padding="100px 0 0 0"
          >
            사용 기술 스택
          </Heading>
        ) : (
          <SkeletonUI $width="120px" $height="40px" $margin="100px 0 47px 0" />
        )}
        {subject ? (
          <SkillList
            $margin="0 auto"
            $width="100%"
            $padding={isDesktop ? '0 100px' : '0 30px'}
            $display="flex"
            $flexWrap="wrap"
            $justifyContent="space-between"
          >
            {projectTechStacks &&
              projectTechStacks.map(skill => (
                <SkillIconItem
                  $display="flex"
                  $width={vw > 600 ? '50%' : '100%'}
                  $margin="0 0 20px 0"
                  $justifyContent={vw > 520 ? 'center' : 'left'}
                  $alignItems="center"
                  key={skill.project_tech_stacks_id}
                >
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
      <DivisionLine $width={isDesktop ? '500px' : '70%'} />
      <Container margin="0 0 160px 0" padding={isDesktop ? '0 70px' : '0 30px'}>
        {subject ? (
          <Heading
            as="h3"
            id="프로젝트설명"
            display="inline-block"
            color="#212121"
            fontWeight={700}
            fontSize="3"
            borderBottom="14px solid rgba(66, 139, 202, 0.6)"
            lineHeight="10px"
            margin="0 0 47px 0"
            $padding="100px 0 0 0"
          >
            프로젝트 설명
          </Heading>
        ) : (
          <SkeletonUI $width="120px" $height="40px" $margin="100px 0 47px 0" />
        )}
        <Container margin="0 0 10px">
          {subject ? (
            <>
              <Time fontSize={1.6} dateTime={DateFormMaker(start_date)} color="#70777d">
                {DateFormMaker(start_date)}
              </Time>
              <Span fontSize={1.6} color="#70777d">
                {' '}
                ~{' '}
              </Span>
              <Time fontSize={1.6} dateTime={DateFormMaker(end_date)} color="#70777d">
                {DateFormMaker(end_date)}
              </Time>
            </>
          ) : (
            <SkeletonUI $width="200px" $height="10px" />
          )}
        </Container>
        {subject ? (
          <ProjectExplanation>{main_contents}</ProjectExplanation>
        ) : (
          <SkeletonUI width="100%" height="200px" />
        )}
      </Container>
      {isDeleteModalOpen && (
        <DeleteModalDialog
          setIsDeleteModalOpen={setIsDeleteModalOpen}
          projectId={project && project.projectData.project_id}
        />
      )}
    </StyledProjectPage>
  );
};

ProjectPage.defaultProps = {};

ProjectPage.propTypes = {};

export default ProjectPage;
