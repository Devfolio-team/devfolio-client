import {
  A11yHidden,
  Button,
  Container,
  MenuUnderline,
  ProjectItem,
  ProjectItemSkeleton,
} from 'components';
import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import ajax from 'apis/ajax';
import { HeaderBar, ProjectList } from 'containers';
import scrollToTop from 'utils/scrollToTop';

const StyledHomePage = styled.main`
  ${({ $padding }) => css`
    padding: ${$padding};
    background: #f8f9fa;
  `}
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

const HomePage = ({ viewport, location, match }) => {
  const { vw } = viewport;

  const [projects, setProjects] = useState([]);

  const [sortType, setSortType] = useState('popular');

  const onPopularSortHandler = () => {
    setSortType('popular');
  };
  const onLatestSortHandler = () => {
    setSortType('latest');
  };

  useEffect(() => {
    const fetchProejctList = async () => {
      try {
        const response = await ajax.fetchProjects();
        if (response.status === 200) {
          const {
            data: { projectsData },
          } = response;

          if (sortType === 'popular') {
            projectsData.sort(
              ({ likeCount: nextLikeCount }, { likeCount: preLikeCount }) =>
                preLikeCount - nextLikeCount
            );
          }

          setProjects(projectsData);
        } else throw new Error('서버의 응답이 올바르지 않습니다.');
      } catch (error) {
        throw new Error(error);
      }
    };

    fetchProejctList();
  }, [sortType]);

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <>
      <HeaderBar viewport={viewport} location={location} match={match} />
      <StyledHomePage>
        {/* isMobile일때는 프로젝트 아이템의 크기를 키우고 뷰포트에 따라서 작아지게(%) 설정 */}
        <HomepageSection>
          <A11yHidden as="h2">프로젝트 목록</A11yHidden>
          <Container
            // padding={`0 ${isDesktop ? '54px' : '14px'}`}
            display="flex"
            flexFlow="column nowrap"
          >
            <Container position="relative" margin={vw >= 1024 ? '0 16px 16px' : '0 0 16px'}>
              <Button
                title="좋아요가 많은 순서로 프로젝트 보기"
                aria-label="좋아요가 많은 순서로 프로젝트 보기"
                width="112px"
                height="48px"
                background="transparent"
                color={sortType === 'latest' ? '#868E96' : `#212121`}
                border="0"
                fontSize={1.9}
                fontWeight={sortType === 'latest' ? 500 : 700}
                onClick={onPopularSortHandler}
              >
                인기
              </Button>
              <Button
                title="최근에 작성된 순서로 프로젝트 보기"
                aria-label="최근에 작성된 순서로 프로젝트 보기"
                color={sortType === 'latest' ? '#212121' : `#868E96`}
                fontWeight={sortType === 'latest' ? 700 : 500}
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
                transform={`translate3D(${sortType === 'latest' ? '112px' : '0'}, 0, 0)`}
              />
            </Container>
            <ProjectList viewport={viewport}>
              {!projects[0]
                ? Array.from({ length: 12 }, (_, i) => i).map((_, index) => (
                    <ProjectItemSkeleton
                      width={
                        vw >= 1440 ? '301px' : vw >= 1126 ? '31%' : vw >= 1024 ? '47.5%' : '100%'
                      }
                      margin={vw >= 1440 ? '16px' : vw >= 1024 ? '1.1%' : '25px 0'}
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
                  ))
                : projects.map(project => {
                    return (
                      <ProjectItem
                        width={
                          vw >= 1440 ? '301px' : vw >= 1126 ? '31%' : vw >= 1024 ? '47.5%' : '100%'
                        }
                        margin={vw >= 1440 ? '16px' : vw >= 1024 ? '1.1%' : '25px 0'}
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
                      />
                    );
                  })}
            </ProjectList>
          </Container>
        </HomepageSection>
      </StyledHomePage>
    </>
  );
};

HomePage.defaultProps = {};

HomePage.propTypes = {};

export default HomePage;
