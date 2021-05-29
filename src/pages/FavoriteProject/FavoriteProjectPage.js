import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
  ProjectItem,
  ProjectItemSkeleton,
  Container,
  Heading,
  FetchMore,
  Span,
  EmptyMessage,
} from 'components';
import ajax from 'apis/ajax';
import scrollToTop from 'utils/scrollToTop';
import { ProjectList } from 'containers';
import useDetectViewport from 'hooks/useDetectViewport';

const StyledFavoriteProjectPage = styled.main``;

const FavoriteProjectPageProjectItem = styled(ProjectItem)`
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

const FavoriteProjectPageProjectItemSkeleton = styled(ProjectItemSkeleton)`
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

const FavoriteProjectPageSection = styled.section`
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

const FavoritePageHeading = styled.h2`
  font-size: 1.9rem;
  margin: 16px;
  @media (max-width: 1024px) {
    margin: 16px 0;
  }
`;

const FavoriteProjectPage = ({ match }) => {
  const { vw, type } = useDetectViewport();
  const [page, setPage] = useState(0);
  const [favoriteProjects, setFavoriteProjects] = useState();
  const { current_user_id } = match.params;

  useEffect(() => {
    const fetchFavoriteProejctList = async () => {
      try {
        const response = await ajax.fetchFavoriteProjects(current_user_id, page, 12);
        if (response.status === 200) {
          const {
            data: { projectsData },
          } = response;
          setFavoriteProjects(prev => (prev ? [...prev, ...projectsData] : projectsData));
        } else throw new Error('서버의 응답이 올바르지 않습니다.');
      } catch (error) {
        throw new Error(error);
      }
    };

    fetchFavoriteProejctList();
  }, [current_user_id, page]);

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <StyledFavoriteProjectPage>
      <FavoriteProjectPageSection>
        <Container display="flex" flexFlow="column nowrap">
          <FavoritePageHeading>좋아한 프로젝트</FavoritePageHeading>
          <ProjectList>
            {!favoriteProjects ? (
              Array.from({ length: 12 }, (_, i) => i).map((_, index) => (
                <FavoriteProjectPageProjectItemSkeleton
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
            ) : !favoriteProjects.length ? (
              <Container textAlign="center" margin="0 0 80px">
                <EmptyMessage>텅-</EmptyMessage>
                <Span fontSize={2} fontWeight={700}>
                  좋아요를 누른 프로젝트가 없습니다 <span aria-hidden> :(</span>
                </Span>
              </Container>
            ) : (
              favoriteProjects.map(project => {
                return (
                  <FavoriteProjectPageProjectItem
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
                    likeCount={project.likeCount}
                    commentCount={project.commentCount}
                  />
                );
              })
            )}
          </ProjectList>
          <FetchMore setPage={setPage} />
        </Container>
      </FavoriteProjectPageSection>
    </StyledFavoriteProjectPage>
  );
};

FavoriteProjectPage.defaultProps = {};

FavoriteProjectPage.propTypes = {};

export default FavoriteProjectPage;
