import {
  A11yHidden,
  Button,
  Container,
  MenuUnderline,
  ProjectItem,
  ProjectItemSkeleton,
} from 'components';
import React, { useEffect, useReducer } from 'react';
import styled, { css } from 'styled-components';
import ajax from 'apis/ajax';
import { ProjectList } from 'containers';
import scrollToTop from 'utils/scrollToTop';

const StyledHomePage = styled.main`
  ${({ $padding }) => css`
    padding: ${$padding};
    background: #f8f9fa;
  `}
`;

const SortButtonContainer = styled.div`
  position: relative;
  margin: 0 16px 16px;

  @media (max-width: 1024px) {
    margin: 0 0 16px;
  }
`;

const HomePageProjecItem = styled(ProjectItem)`
  width: 301px;
  margin: 16px;

  @media (max-width: 1440px) {
    width: 31%;
    margin: 1.1%;
  }
  @media (max-width: 1126px) {
    width: 47.5%;
  }
  @media (max-width: 1024px) {
    width: 100%;
    margin: 25px 0;
  }
`;

HomePageProjecItem.displayName = 'HomepageProjectItem';

const HomePageProjectItemSkeleton = styled(ProjectItemSkeleton)`
  width: 301px;
  margin: 16px;

  @media (max-width: 1440px) {
    width: 31%;
    margin: 1.1%;
  }
  @media (max-width: 1126px) {
    width: 47.5%;
  }
  @media (max-width: 1024px) {
    width: 100%;
    margin: 25px 0;
  }
`;

const HomepageSection = styled.section`
  margin: 0 auto;
  padding: 30px 54px;
  width: 1440px;
  @media (max-width: 1440px) {
    width: 100%;
  }
  @media (max-width: 768px) {
    padding: 30px;
  }
`;

const projectsInitialState = {
  sort: 'popular',
  size: 12,
  latest: { page: 0, data: [] },
  popular: { page: 0, data: [] },
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_LATEST_PROJECTS':
      return { ...state, latest: { ...state.latest, data: action.payload } };
    case 'FETCH_POPULAR_PROJECTS':
      return { ...state, popular: { ...state.latest, data: action.payload } };
    case 'SWITCH_SORT_TO_LATEST':
      return { ...state, sort: 'latest' };
    case 'SWITCH_SORT_TO_POPULAR':
      return { ...state, sort: 'popular' };
    default:
      return state;
  }
};

const HomePage = ({ viewport }) => {
  const { vw } = viewport;

  const [projects, dispatch] = useReducer(reducer, projectsInitialState);

  const { sort, latest, popular } = projects;

  const onPopularSortHandler = () => {
    dispatch({ type: 'SWITCH_SORT_TO_POPULAR' });
  };

  const onLatestSortHandler = () => {
    dispatch({ type: 'SWITCH_SORT_TO_LATEST' });
  };

  useEffect(() => {
    scrollToTop();

    const fetchProejctList = async () => {
      try {
        const popularResponse = await ajax.fetchProjects('popular', 0, 12);

        if (popularResponse.status === 200) {
          const {
            data: { projectsData },
          } = popularResponse;

          dispatch({
            type: 'FETCH_POPULAR_PROJECTS',
            payload: projectsData,
          });
        } else throw new Error('서버의 응답이 올바르지 않습니다.');

        const latestResponse = await ajax.fetchProjects('latest', 0, 12);

        if (latestResponse.status === 200) {
          const {
            data: { projectsData },
          } = latestResponse;

          dispatch({
            type: 'FETCH_LATEST_PROJECTS',
            payload: projectsData,
          });
        } else throw new Error('서버의 응답이 올바르지 않습니다.');
      } catch (error) {
        throw new Error(error);
      }
    };

    fetchProejctList();
  }, []);

  return (
    <StyledHomePage>
      {/* isMobile일때는 프로젝트 아이템의 크기를 키우고 뷰포트에 따라서 작아지게(%) 설정 */}
      <HomepageSection>
        <A11yHidden as="h2">프로젝트 목록</A11yHidden>
        <Container
          // padding={`0 ${isDesktop ? '54px' : '14px'}`}
          display="flex"
          flexFlow="column nowrap"
        >
          <SortButtonContainer>
            <Button
              title="좋아요가 많은 순서로 프로젝트 보기"
              aria-label="좋아요가 많은 순서로 프로젝트 보기"
              width="112px"
              height="48px"
              background="transparent"
              color={sort === 'latest' ? '#868E96' : `#212121`}
              border="0"
              fontSize={1.9}
              fontWeight={sort === 'latest' ? 500 : 700}
              onClick={onPopularSortHandler}
            >
              인기
            </Button>
            <Button
              title="최근에 작성된 순서로 프로젝트 보기"
              aria-label="최근에 작성된 순서로 프로젝트 보기"
              color={sort === 'latest' ? '#212121' : `#868E96`}
              fontWeight={sort === 'latest' ? 700 : 500}
              background="transparent"
              border="0"
              fontSize={1.9}
              width="112px"
              height="48px"
              onClick={onLatestSortHandler}
            >
              최신
            </Button>
            {/* 상태를 보고 transform 조정 */}
            <MenuUnderline
              position="absolute"
              bottom="0"
              left="0"
              transform={`translate3D(${sort === 'latest' ? '112px' : '0'}, 0, 0)`}
            />
          </SortButtonContainer>
          <ProjectList viewport={viewport}>
            {sort === 'popular'
              ? popular.data.map(project => {
                  return (
                    <HomePageProjecItem
                      containerMinHeight={
                        vw >= 1440
                          ? 166
                          : vw >= 1126
                          ? '15.7vw'
                          : vw >= 1024
                          ? '23.8vw'
                          : vw >= 768
                          ? '47.6111vw'
                          : '49.4vw'
                      }
                      imageMaxHeight={
                        vw >= 1440
                          ? 166
                          : vw >= 1126
                          ? '15.7vw'
                          : vw >= 1024
                          ? '23.8vw'
                          : vw >= 768
                          ? '47.6111vw'
                          : '49.4vw'
                      }
                      key={project.project_id}
                      projectId={project.project_id}
                      thumbnail={project.thumbnail}
                      subject={project.subject}
                      planIntention={project.plan_intention}
                      created={project.created}
                      authorId={project.user_user_id}
                      author={project.nickname}
                      authorProfile={project.profile_photo}
                      viewport={viewport}
                      likeCount={project.likeCount}
                      commentCount={project.commentCount}
                    />
                  );
                })
              : latest.data.map(project => {
                  return (
                    <HomePageProjecItem
                      containerMinHeight={
                        vw >= 1440
                          ? 166
                          : vw >= 1126
                          ? '15.7vw'
                          : vw >= 1024
                          ? '23.8vw'
                          : vw >= 768
                          ? '47.6111vw'
                          : '49.4vw'
                      }
                      imageMaxHeight={
                        vw >= 1440
                          ? 166
                          : vw >= 1126
                          ? '15.7vw'
                          : vw >= 1024
                          ? '23.8vw'
                          : vw >= 768
                          ? '47.6111vw'
                          : '49.4vw'
                      }
                      key={project.project_id}
                      projectId={project.project_id}
                      thumbnail={project.thumbnail}
                      subject={project.subject}
                      planIntention={project.plan_intention}
                      created={project.created}
                      authorId={project.user_user_id}
                      author={project.nickname}
                      authorProfile={project.profile_photo}
                      viewport={viewport}
                      likeCount={project.likeCount}
                      commentCount={project.commentCount}
                    />
                  );
                })}
            {Array.from({ length: 12 }, (_, i) => i).map((_, index) => (
              <HomePageProjectItemSkeleton
                containerMinHeight={
                  vw >= 1440
                    ? 166
                    : vw >= 1126
                    ? '15.7vw'
                    : vw >= 1024
                    ? '23.8vw'
                    : vw >= 768
                    ? '47.6111vw'
                    : '49.4vw'
                }
                imageMaxHeight={
                  vw >= 1440
                    ? 166
                    : vw >= 1126
                    ? '15.7vw'
                    : vw >= 1024
                    ? '23.8vw'
                    : vw >= 768
                    ? '47.6111vw'
                    : '49.4vw'
                }
                key={index}
              />
            ))}
          </ProjectList>
        </Container>
      </HomepageSection>
    </StyledHomePage>
  );
};

HomePage.defaultProps = {};

HomePage.propTypes = {};

export default HomePage;
