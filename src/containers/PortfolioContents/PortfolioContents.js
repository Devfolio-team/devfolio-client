import { Container, MarkdownStyler, ProjectItem, SkillIconItem, Span } from 'components';
import useDetectViewport from 'hooks/useDetectViewport';
import React from 'react';
import styled, { css } from 'styled-components';
import { applyStyle } from 'utils';

const StyledPortfolioContents = styled.div`
  ${props => css`
    ${applyStyle(props)}
    position: relative;
    z-index: 1;
    margin: 100vh 0 0 0;
    width: 100%;
    padding: 80px 0 25px;
    background: #f8f9fa;
    @media (max-height: 740px) {
      margin: 0;
    }
  `}
`;

const SectionHeader = styled.h3`
  font-size: 4rem;
  font-weight: 700;
  display: inline-block;
  line-height: 20px;
  border-bottom: 14px solid rgba(66, 139, 202, 0.6);

  @media (max-width: 768px) {
    font-size: 4rem;
    line-height: 12px;
    border-bottom: 12px solid rgba(66, 139, 202, 0.6);
  }
`;

const Introduce = styled.div`
  ${props => css`
    ${applyStyle(props)}

    margin: 30px 0 0 100px;
    @media (max-width: 768px) {
      margin-left: 0;
    }
  `}
`;

const SkillIconList = styled.ul`
  ${props => css`
    ${applyStyle(props)}
    display: flex;
    flex-flow: row wrap;
    margin: 30px 0 0 100px;
    @media (max-width: 768px) {
      margin-left: 0;
    }
  `}
`;

const ProjectList = styled.ul`
  ${props => css`
    ${applyStyle(props)}
    display: flex;
    flex-flow: row wrap;
  `}
`;

const PortfolioProjectItem = styled(ProjectItem)`
  width: 70%;
  margin: 25px auto;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const ContenetsContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 70px;

  @media (max-width: 768px) {
    padding: 0 30px;
  }
`;

const EmptyMessage = styled.span`
  display: block;
  width: 100px;
  font-size: 10rem;
  margin: 50px auto 80px;
  text-shadow: 10px 10px 5px rgba(0, 0, 0, 0.5);
`;

const PortfolioContents = ({ portfolio }) => {
  const { user, skills, projects } = portfolio;

  const viewport = useDetectViewport();
  const { vw } = viewport;

  return (
    <StyledPortfolioContents>
      <ContenetsContainer>
        <Container>
          <SectionHeader>Introduce</SectionHeader>

          {user &&
            (user.introduce ? (
              <Introduce>
                <MarkdownStyler>{user.introduce}</MarkdownStyler>
              </Introduce>
            ) : (
              <Container textAlign="center" margin="0 0 80px">
                <EmptyMessage>텅-</EmptyMessage>
                <Span fontSize={2} fontWeight={700}>
                  등록된 자기소개가 없습니다<span aria-hidden> :(</span>
                </Span>
              </Container>
            ))}
        </Container>
        <Container margin="80px 0 0">
          <SectionHeader>SKILLS</SectionHeader>
          {skills &&
            (skills.length ? (
              <SkillIconList>
                {skills.map((skill, index) => (
                  <SkillIconItem key={index} type={skill.skill_name} />
                ))}
              </SkillIconList>
            ) : (
              <Container textAlign="center" margin="0 0 80px">
                <EmptyMessage>텅-</EmptyMessage>
                <Span fontSize={2} fontWeight={700}>
                  등록된 기술스택이 없습니다<span aria-hidden> :(</span>
                </Span>
              </Container>
            ))}
        </Container>
        <Container margin="50px 0 0">
          <SectionHeader>Projects</SectionHeader>
          {projects &&
            (projects.length ? (
              <ProjectList>
                {projects.map(project => (
                  <PortfolioProjectItem
                    key={project.project_id}
                    containerMinHeight={'28.15vw'}
                    imageMaxHeight={vw >= 768 ? '28.15vw' : '49.4vw'}
                    viewport={viewport}
                    projectId={project.project_id}
                    thumbnail={project.thumbnail}
                    subject={project.subject}
                    planIntention={project.project_intention}
                    created={project.created}
                    authorId={project.user_user_id}
                    author={project.nickname}
                    authorProfile={project.profile_photo}
                    likeCount={project.likeCount}
                    commentCount={project.commentCount}
                  />
                ))}
              </ProjectList>
            ) : (
              <Container textAlign="center" margin="0 0 80px">
                <EmptyMessage>텅-</EmptyMessage>
                <Span fontSize={2} fontWeight={700}>
                  등록된 프로젝트가 없습니다<span aria-hidden> :(</span>
                </Span>
              </Container>
            ))}
        </Container>
      </ContenetsContainer>
    </StyledPortfolioContents>
  );
};

export default PortfolioContents;
