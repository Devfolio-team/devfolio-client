import {
  Container,
  Heading,
  ProjectExplanation,
  ProjectItem,
  SkillIconItem,
  Span,
} from 'components';
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
      <Container maxWidth={1440} margin="0 auto" padding={vw >= 768 ? '0 70px' : '0 30px'}>
        <Container>
          <Heading
            as="h3"
            fontSize={vw >= 768 ? 4 : 3}
            fontWeight={700}
            display="inline-block"
            lineHeight={vw >= 768 ? '20px' : '12px'}
            borderBottom={`${vw >= 768 ? '14px' : '12px'} solid rgba(66,139,202,0.6)`}
          >
            Introduce
          </Heading>

          {user &&
            (user.introduce ? (
              <Introduce>
                <ProjectExplanation>{user.introduce}</ProjectExplanation>
              </Introduce>
            ) : (
              <Container textAlign="center">
                <EmptyMessage>텅-</EmptyMessage>
                <Span fontSize={2} fontWeight={700}>
                  등록된 자기소개가 없습니다<span aria-hidden> :(</span>
                </Span>
              </Container>
            ))}
        </Container>
        <Container margin="80px 0 0">
          <Heading
            as="h3"
            fontSize={vw >= 768 ? 4 : 3}
            fontWeight={700}
            display="inline-block"
            lineHeight={vw >= 768 ? '20px' : '12px'}
            borderBottom={`${vw >= 768 ? '14px' : '12px'} solid rgba(66,139,202,0.6)`}
          >
            SKILLS
          </Heading>
          {skills &&
            (skills.lenght ? (
              <SkillIconList>
                {skills.map((skill, index) => (
                  <SkillIconItem key={index} type={skill.skill_name} />
                ))}
              </SkillIconList>
            ) : (
              <Container textAlign="center">
                <EmptyMessage>텅-</EmptyMessage>
                <Span fontSize={2} fontWeight={700}>
                  등록된 기술스택이 없습니다<span aria-hidden> :(</span>
                </Span>
              </Container>
            ))}
        </Container>
        <Container margin="50px 0 0">
          <Heading
            as="h3"
            fontSize={vw >= 768 ? 4 : 3}
            fontWeight={700}
            display="inline-block"
            lineHeight={vw >= 768 ? '20px' : '12px'}
            borderBottom={`${vw >= 768 ? '14px' : '12px'} solid rgba(66,139,202,0.6)`}
          >
            Projects
          </Heading>
          {projects &&
            (projects.length ? (
              <ProjectList>
                {projects.map(project => (
                  <ProjectItem
                    key={project.project_id}
                    containerMinHeight={'28.15vw'}
                    imageMaxHeight={vw >= 768 ? '28.15vw' : '49.4vw'}
                    width={vw >= 768 ? '70%' : '100%'}
                    margin="25px auto"
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
                  />
                ))}
              </ProjectList>
            ) : (
              <Container textAlign="center">
                <EmptyMessage>텅-</EmptyMessage>
                <Span fontSize={2} fontWeight={700}>
                  등록된 프로젝트가 없습니다<span aria-hidden> :(</span>
                </Span>
              </Container>
            ))}
        </Container>
      </Container>
    </StyledPortfolioContents>
  );
};

export default PortfolioContents;
