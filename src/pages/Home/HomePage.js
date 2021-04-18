import { A11yHidden, Button, Container, MenuUnderline, ProjectItem } from 'components';
import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import ajax from 'apis/ajax';
import { ProjectList } from 'containers';

const StyledHomePage = styled.main`
  ${({ $padding, $background }) => css`
    padding: ${$padding};
    background: #f8f9fa;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
  `}
`;

const HomePage = ({ viewport }) => {
  const { type, isDesktop } = viewport;

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProejctList = async () => {
      try {
        const response = await ajax.fetchProjects();
        if (response.status === 200) {
          const {
            data: { projectsData },
          } = response;
          setProjects(projectsData);
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
      <Container
        as="section"
        padding={isDesktop ? '30px 54px' : '30px 14px'}
        width={type === 'xl' ? 1440 : '100%'}
      >
        <A11yHidden as="h2">프로젝트 목록</A11yHidden>
        <Container
          // padding={`0 ${isDesktop ? '54px' : '14px'}`}
          display="flex"
          flexFlow="column nowrap"
        >
          <Container position="relative" margin={'0 16px 16px'}>
            <Button
              title="좋아요가 많은 순서로 프로젝트 보기"
              aria-label="좋아요가 많은 순서로 프로젝트 보기"
              width="112px"
              height="48px"
              background="transparent"
              border="0"
              fontSize={1.9}
              fontWeight={700}
              // outline="none"
            >
              인기
            </Button>
            <Button
              title="최근에 작성된 순서로 프로젝트 보기"
              aria-label="최근에 작성된 순서로 프로젝트 보기"
              color="#868E96"
              background="transparent"
              border="0"
              fontSize={1.9}
              width="112px"
              height="48px"
            >
              최신
            </Button>
            {/* 상태를 보고 transform 조정 */}
            <MenuUnderline
              position="absolute"
              bottom="0"
              left="0"
              transform="translate3D(0px, 0, 0)"
            />
          </Container>
          <ProjectList>
            {projects.map(project => {
              return (
                <ProjectItem
                  key={project.project_id}
                  thumbnail={project.thumbnail}
                  subject={project.subject}
                  planIntention={project.plan_intention}
                  created={project.created}
                  author={project.nickname}
                  authorProfile={project.profile_photo}
                  viewport={viewport}
                  likeCount={project.likeCount}
                ></ProjectItem>
              );
            })}
          </ProjectList>
        </Container>
      </Container>
    </StyledHomePage>
  );
};

HomePage.defaultProps = {};

HomePage.propTypes = {};

export default HomePage;
