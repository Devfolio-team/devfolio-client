import axios from 'axios';
import {
  Button,
  Container,
  Heading,
  Image,
  Paragraph,
  ProjectExplanation,
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

const StyledNinkName = styled.span`
  ${props => css`
    ${applyStyle(props)}
  `}
`;

const StyledLink = styled.a`
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

const StyledIcon = styled(SVGIcon)`
  ${props => css`
    ${applyStyle(props)}
  `}
`;

const StyledDivisionLine = styled.div`
  ${props => css`
    ${applyStyle(props)}
  `}
`;

const StyledUl = styled.ul`
  ${props => css`
    ${applyStyle(props)}
  `}
`;

const SkillIconItem = styled.li`
  ${props => css`
    ${applyStyle(props)}
  `}
`;

const StyledButton = styled(Button)`
  ${props => css`
    ${applyStyle(props)}
  `}
  &:hover {
    background: #e0e0e0;
    stroke: none;
    /* path {
      fill: #e74c3c;
    } */
    /* svg {
      stroke: none;
    } */
  }
`;

const StyledHeartIcon = styled(SVGIcon)`
  & {
    stroke: black;
  }
  path {
    fill: white;
  }
`;

const StyledLinkWrapper = styled.div`
  ${props => css`
    ${applyStyle(props)}
  `}
`;

const ProjectPage = ({ match }) => {
  const { isDesktop, vw, type } = useDetectViewport();
  const [scrollY, setScrollY] = useState(0);
  const initalProject = {
    projectData: {
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
  const [project, setProject] = useState(initalProject);
  const [isLike, setIsLike] = useState(false);
  const {
    created,
    deploy_url,
    end_date,
    github_url,
    // is_private,
    main_contents,
    plan_itention,
    project_id,
    start_date,
    subject,
    team_name,
    thumbnail,
    likeCount,
    // user_id,
  } = project.projectData;

  const { projectTechStacks } = project;
  const loginUserId = useSelector(state => state.auth.currentUser.user_id);

  const onScrollHandler = () => {
    setScrollY(window.pageYOffset);
  };

  const onLikeCountPlusHandler = async () => {
    const getLikeCount = await axios(
      `http://devfolio.world:3020/api/project_like?project_id=${project_id}&user_id=${loginUserId}`
    );

    //좋아요 버튼을 안누르면 isLike는 false
    const isLike = getLikeCount.data.existeLike;
    try {
      if (!isLike) {
        // LikeCount++
        const postLikeCountPlus = await axios({
          method: 'post',
          url: `http://devfolio.world:3020/api/project_like?project_id=${project_id}&user_id=${loginUserId}`,
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
          url: `http://devfolio.world:3020/api/project_like?project_id=${project_id}&user_id=${loginUserId}`,
        });

        setProject({ ...project }, (project.projectData.likeCount = DelLikeCount.data.likeCount));
        setIsLike(false);
      }
    } catch (e) {
      throw new Error(e);
    }
  };

  useEffect(() => {
    scrollToTop();

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
      try {
        const Project = await axios(
          `http://devfolio.world:3020/api/project_like?project_id=${project_id}&user_id=${loginUserId}`
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
  }, [loginUserId, match.params.project_id, project_id, isLike]);

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
              <StyledButton
                borderRadius="50%"
                background="inherit"
                border="1px solid #A3ABB3"
                width="44px"
                height="44px"
                padding="0"
                onClick={onLikeCountPlusHandler}
              >
                {isLike === false ? (
                  <StyledHeartIcon type="HeartRed" width={20} height={20}></StyledHeartIcon>
                ) : (
                  <SVGIcon type="HeartRed" width={20} height={20}></SVGIcon>
                )}
              </StyledButton>
              <Span fontSize="16px" lineHeight="16px" margin="0px 0 0 0">
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
            dateTime={created}
          >
            {created}
          </Time>
          <Container margin="0">
            <Image
              src={deploy_url}
              alt="닉네임프로필사진"
              width="24px"
              height="24px"
              borderRadius="50%"
            />
            <StyledNinkName $width="35px" $lineHeight="16px" $fontSize="16px" $marginLeft="10px">
              닉네임
            </StyledNinkName>
          </Container>
        </Container>
        {/* 뷰포트크기가 840px이 이하일 떄 네모난 좋아요버튼 생성 */}
        {vw > 840 ? (
          ''
        ) : (
          <StyledButton
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
            onClick={onLikeCountPlusHandler}
          >
            {isLike === false ? (
              <StyledHeartIcon type="HeartRed" width={20} height={20}></StyledHeartIcon>
            ) : (
              <SVGIcon type="HeartRed" width={20} height={20}></SVGIcon>
            )}
            <Span fontSize="16px" lineHeight="16px" margin="0 0 0 10px">
              {likeCount}
            </Span>
          </StyledButton>
        )}
      </Container>
      <Container margin="0 0 32px 0" padding={isDesktop ? '0 70px' : '0 30px'}>
        <Heading
          as="h3"
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
        <StyledLinkWrapper $cursor="not-allowed">
          <StyledLink
            href={deploy_url}
            target="_blank"
            $fontSize={1.6}
            $fontWeight="700"
            $borderRadius={5}
            $border="1px solid #428BCA"
            $width={type === 'xs' ? '100%' : '200px'}
            $marginBottom={type === 'xs' ? '5px' : ''}
            $height="44px"
            $textAlign="center"
            $lineHeight="40px"
            $color="#428BCA"
            $background={deploy_url ? '#FFFFFF' : '#eeeeee'}
            $display="flex"
            $justifyContent="center"
            $alignItems="center"
            $pointerEvents={deploy_url ? '' : 'none'}
          >
            <StyledIcon type="WebSite" $margin="0 7px 0 0" $width={20} $height={20} />
            Visit the Website
          </StyledLink>
        </StyledLinkWrapper>
        <StyledLinkWrapper $cursor="not-allowed">
          <StyledLink
            href={github_url}
            target="_blank"
            $fontSize={1.6}
            $fontWeight="700"
            $borderRadius={5}
            $border="1px solid #428BCA"
            $width={type === 'xs' ? '100%' : '145px'}
            $height="44px"
            $textAlign="center"
            $lineHeight="40px"
            $color="#428BCA"
            $background={github_url ? '#FFFFFF' : '#eeeeee'}
            $display="flex"
            $justifyContent="center"
            $alignItems="center"
            $pointerEvents={github_url ? '' : 'none'}
          >
            <StyledIcon type="GithubBlue" $marginRight="9px" $width={20} $height={20} />
            GitHub
          </StyledLink>
        </StyledLinkWrapper>
      </Container>
      <Container padding={isDesktop ? '0 70px' : '0 30px'}>
        <Image src={thumbnail} alt="프로젝트 썸네일" width="100%" borderRadius="10px" />
      </Container>
      <StyledDivisionLine
        $width={isDesktop ? '500px' : '70%'}
        $borderBottom="1px solid #666666"
        $margin="80px auto"
      />
      <Container margin=" 0 0 80px 0" padding={isDesktop ? '70px' : '30px'}>
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
          기획 의도
        </Heading>
        <Paragraph
          color="#666666"
          fontSize={1.6}
          fontWeight="700"
          lineHeight="25px"
          padding="0 15px"
        >
          {plan_itention}
        </Paragraph>
      </Container>
      <StyledDivisionLine
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
          <StyledUl $display="flex" $flexDirection="row" $flexWrap="wrap">
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
                      <StyledDivisionLine
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
          </StyledUl>
        </Container>
        <StyledDivisionLine
          $width={isDesktop ? '500px' : '70%'}
          $borderBottom="1px solid #666666"
          $margin="80px auto"
        />*/}
      <Container width={isDesktop ? '788px' : '100%'} padding={isDesktop ? '0 70px' : '0 30px'}>
        <Heading
          as="h3"
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
        <StyledUl
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
        </StyledUl>
      </Container>
      <StyledDivisionLine
        $width={isDesktop ? '500px' : '70%'}
        $borderBottom="1px solid #666666"
        $margin="80px auto"
      />
      <Container margin="0 0 160px 0" padding={isDesktop ? '0 70px' : '0 30px'}>
        <Heading
          as="h3"
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
        <Time dateTime="2021-03-30T06:00:56.555Z">{start_date}</Time>
        <Span> ~ </Span>
        <Time dateTime="2021-03-30T06:00:56.555Z">{end_date}</Time>
        <ProjectExplanation>{parseHtmlAndHighlighter(main_contents)}</ProjectExplanation>
      </Container>
    </StyledProjectPage>
  );
};

ProjectPage.defaultProps = {};

ProjectPage.propTypes = {};

export default ProjectPage;
