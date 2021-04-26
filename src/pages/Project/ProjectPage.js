import axios from 'axios';
import {
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
import { parseHtmlAndHighlighter } from 'utils/parseHtmlAndHighlighter';
import scrollToTop from 'utils/scrollToTop';

const StyledProjectPage = styled.main`
  ${props => css`
    ${applyStyle(props)}
  `}
`;

const ProjectWriter = styled.a`
  ${props => css`
    ${applyStyle(props)}
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

const NavList = styled.li`
  ${props => css`
    ${applyStyle(props)}
    margin-bottom: 10px;
  `}
`;

const NavLink = styled.a`
  ${props => css`
    ${applyStyle(props)}
    color : rgb(134, 142, 150);
  `}
`;

const ProjectPage = ({ match }) => {
  const { isDesktop, vw, type } = useDetectViewport();
  const [scrollY, setScrollY] = useState(0);
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
    const getLikeCount = await axios(
      `http://devfolio.world:3020/api/project_like?project_id=${project_id}&user_id=${loginUser.user_id}`
    );

    //좋아요 버튼을 안누르면 isLike는 false
    const isLike = getLikeCount.data.existeLike;
    try {
      if (!isLike) {
        // LikeCount++
        const postLikeCountPlus = await axios({
          method: 'post',
          url: `http://devfolio.world:3020/api/project_like?project_id=${project_id}&user_id=${loginUser.user_id}`,
        });

        setProject(
          { ...project },
          (project.projectData.likeCount = postLikeCountPlus.data.likeCount)
        );
        setIsLike(true);
      } else {
        // likeCount--
        const DelLikeCount = await axios({
          method: 'delete',
          url: `http://devfolio.world:3020/api/project_like?project_id=${project_id}&user_id=${loginUser.user_id}`,
        });

        setProject({ ...project }, (project.projectData.likeCount = DelLikeCount.data.likeCount));
        setIsLike(false);
      }
    } catch (e) {
      throw new Error(e);
    }
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
    const getProject = async () => {
      try {
        const getProject = await axios(
          `http://devfolio.world:3020/api/project/${match.params.project_id}`
        );
        setProject(getProject.data.responseData);
      } catch (e) {
        throw new Error(e);
      }
    };
    getProject();

    //처음에 페이지 접속 했을 때 프로젝트에 좋아요를 눌렀는가?
    const getIsLike = async () => {
      if (!loginUser.user_id) return;
      try {
        const Project = await axios(
          `http://devfolio.world:3020/api/project_like?project_id=${project_id}&user_id=${loginUser.user_id}`
        );
        const IsLikeProject = await Project.data.existeLike;

        if (IsLikeProject) {
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

  return project === null ? (
    ''
  ) : (
    <StyledProjectPage
      $width={isDesktop ? '768px' : '100%'}
      $margin="96px auto 0 auto"
      $background="#F8F9FA"
    >
      <Container
        width="100%"
        margin={isDesktop ? '0 30px 89px 0' : '0'}
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
              <LikeButton
                borderRadius="50%"
                background="inherit"
                border="1px solid #A3ABB3"
                width="44px"
                height="44px"
                padding="0"
                onClick={onLikeCountPlusHandler}
                title={loginUser.user_id === null ? '로그인이 필요합니다.' : ''}
              >
                {isLike === false ? (
                  <HeartIcon type="HeartRed" width={20} height={20}></HeartIcon>
                ) : (
                  <SVGIcon type="HeartRed" width={20} height={20}></SVGIcon>
                )}
              </LikeButton>
              <Span fontSize={1.4} lineHeight="16px" margin="5px 0 0 0">
                {likeCount}
              </Span>
            </Container>
          </Container>
        ) : (
          ''
        )}
        <Container display="flex" alignItems="center" width="215px" margin="0">
          <Time
            margin={type === 'xs' ? '0 10px 0 0' : '0 43px 0 0'}
            fontSize={1.6}
            dateTime={DateFormMaker(created)}
          >
            {DateFormMaker(created)}
          </Time>
          <Container margin="0" display="flex" textAlign="left" alignItems="center">
            <Image
              src={project_profile_photo}
              alt="닉네임프로필사진"
              width="24px"
              height="24px"
              borderRadius="50%"
            />
            <ProjectWriter
              href={`/portfolio/${user_user_id}`}
              $width="200px"
              $fontSize={1.6}
              $marginLeft="10px"
            >
              {project_nickname}
            </ProjectWriter>
          </Container>
        </Container>
        <Container position="relative" display={vw > 1050 ? '' : 'none'}>
          <Container position="absolute" left="250px" width="200px">
            <Container
              position={scrollY > 0 ? 'fixed' : ''}
              transform={scrollY > 130 ? 'translate3D(0, 130px, 0)' : ''}
              transition="0.5s"
            >
              <ProjectNav
                borderLeft="1.5px solid rgba(134, 142, 150, .5)"
                padding="0 0 0 10px"
                fontSize={1.5}
              >
                <NavList>
                  <NavLink href="#제목">제목</NavLink>
                </NavList>
                <NavList>
                  <NavLink href="#기획의도">기획의도</NavLink>
                </NavList>
                <NavList>
                  <NavLink href="#사용기술스택">사용기술스택</NavLink>
                </NavList>
                <NavList>
                  <NavLink href="#프로젝트설명">프로젝트설명</NavLink>
                </NavList>
              </ProjectNav>
            </Container>
          </Container>
        </Container>
        {/* 뷰포트크기가 840px이 이하일 떄 네모난 좋아요버튼 생성 */}
        {vw > 840 ? (
          ''
        ) : (
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
            $position={vw < 450 ? 'absolute' : ''}
            $top="120px"
            $right="30px"
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
      </Container>
      <Container margin="0 0 32px 0" padding={isDesktop ? '0 70px' : '0 30px'}>
        <Heading
          as="h2"
          id="제목"
          fontSize={type === 'xs' ? 2.7 : 4}
          color="#212121"
          lineHeight="40px"
          margin={type === 'xs' ? '' : '20px 0'}
        >
          {subject}
        </Heading>
        <Span
          fontSize={type === 'xs' ? 1.8 : 2}
          lineHeight={type === 'xs' ? '' : '10px'}
          color="#212121"
        >
          {team_name}
        </Span>
      </Container>
      <Container
        display={type === 'xs' ? '' : 'flex'}
        justifyContent={type === 'xs' ? '' : 'space-between'}
        margin="0 0 22px 0"
        padding={isDesktop ? '0 70px' : '0 30px'}
      >
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
      </Container>
      <Container padding={isDesktop ? '0 70px' : '0 30px'}>
        <Image src={thumbnail} alt="프로젝트 썸네일" width="100%" borderRadius="10px" />
      </Container>
      <DivisionLine
        $width={isDesktop ? '500px' : '70%'}
        $borderBottom="1px solid #666666"
        $margin="80px auto"
      />
      <Container margin=" 0 0 80px 0" padding={isDesktop ? '70px' : '30px'}>
        <Heading
          as="h3"
          id="기획의도"
          color="#212121"
          fontWeight={700}
          fontSize="3"
          borderBottom="14px solid rgba(66, 139, 202, 0.6)"
          width="142px"
          textAlign="center"
          lineHeight="10px"
          margin="0 0 47px 0"
        >
          기획 의도
        </Heading>
        <Paragraph
          color="#666666"
          fontSize={1.6}
          fontWeight="700"
          lineHeight="25px"
          padding="0 15px"
        >
          {plan_intention}
        </Paragraph>
      </Container>
      <DivisionLine
        $width={isDesktop ? '500px' : '70%'}
        $borderBottom="1px solid #666666"
        $margin="80px auto"
      />

      {/* <Container padding={isDesktop ? '0 70px' : '0 30px'}>
          <Heading
            as="h3"
            color="#212121"
            fontWeight={700}
            fontSize="3"
            borderBottom="14px solid rgba(66, 139, 202, 0.6)"
            width="142px"
            textAlign="center"
            lineHeight="10px"
            margin="0 0 47px 0"
          >
            팀원 목록
          </Heading>
          <SkillList $display="flex" $flexDirection="row" $flexWrap="wrap">
            {names.map((name, index) => (
              <StyledLi
                $width={isDesktop ? '50%' : type === 'sm' ? '100%' : '100%'}
                $margin={isDesktop ? '0 0 50px 0' : '0 0 20px 0'}
                key={index}
              >
                <Container textAlign="center">
                  <Span
                    display="inline-block"
                    color="#666666"
                    fontSize={1.6}
                    width="74px"
                    textAlign="center"
                    borderRight={type === 'xs' ? ' ' : '2px solid #A9C1FF'}
                    marginRight={type === 'xs' ? ' ' : '30px'}
                    marginBottom={type === 'xs' ? '10px' : ''}
                  >
                    {name.name}
                  </Span>
                  <StyledLink
                    href="https://github.com/bcround"
                    target="_blank"
                    $color="#666666"
                    $fontSize={1.3}
                  >
                    {name.github}
                  </StyledLink>
                  {/* 타입이 xs일때만 팀원 목록 밑으로 구분선 생성 */}
      {/* {type === 'xs' ? (
                    index < names.length - 1 ? (
                      <DivisionLine
                        $margin="0 auto"
                        $width="10%"
                        $borderBottom="1px solid #A9C1FF"
                        $padding="10px 0"
                      />
                    ) : (
                      ''
                    )
                  ) : (
                    ''
                  )}
                </Container>
              </StyledLi>
            ))}
          </SkillList>
        </Container>
        <DivisionLine
          $width={isDesktop ? '500px' : '70%'}
          $borderBottom="1px solid #666666"
          $margin="80px auto"
        />*/}
      <Container width={isDesktop ? '788px' : '100%'} padding={isDesktop ? '0 70px' : '0 30px'}>
        <Heading
          as="h3"
          id="사용기술스택"
          color="#212121"
          fontWeight={700}
          fontSize="3"
          borderBottom="14px solid rgba(66, 139, 202, 0.6)"
          width="217px"
          textAlign="center"
          lineHeight="10px"
          margin="0 0 47px 0"
        >
          사용 기술 스택
        </Heading>
        <SkillList
          $margin="0 auto"
          $width="100%"
          $padding={isDesktop ? '0 100px' : '0 30px'}
          $display="flex"
          $flexWrap="wrap"
          $justifyContent="space-between"
        >
          {projectTechStacks &&
            projectTechStacks.map((skill, index) => (
              <SkillIconItem
                $display="flex"
                $width={vw > 600 ? '50%' : '100%'}
                $margin="0 0 20px 0"
                $justifyContent="center"
                $alignItems="center"
                key={index}
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
      </Container>
      <DivisionLine
        $width={isDesktop ? '500px' : '70%'}
        $borderBottom="1px solid #666666"
        $margin="80px auto"
      />
      <Container margin="0 0 160px 0" padding={isDesktop ? '0 70px' : '0 30px'}>
        <Heading
          as="h3"
          id="프로젝트설명"
          color="#212121"
          fontWeight={700}
          fontSize="3"
          borderBottom="14px solid rgba(66, 139, 202, 0.6)"
          width="217px"
          textAlign="center"
          lineHeight="10px"
          margin="0 0 47px 0"
        >
          프로젝트 설명
        </Heading>
        <Container margin="0 0 10px">
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
        </Container>
        <ProjectExplanation>{parseHtmlAndHighlighter(main_contents)}</ProjectExplanation>
      </Container>
    </StyledProjectPage>
  );
};

ProjectPage.defaultProps = {};

ProjectPage.propTypes = {};

export default ProjectPage;
