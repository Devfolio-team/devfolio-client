import { Container, Heading, ProjectExplanation, ProjectItem, SkillIconItem } from 'components';
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

          <Introduce>{user && <ProjectExplanation>{user.introduce}</ProjectExplanation>}</Introduce>
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
          <SkillIconList>
            {skills
              ? skills.map((skill, index) => <SkillIconItem key={index} type={skill.skill_name} />)
              : null}
          </SkillIconList>
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
          <ProjectList>
            {projects
              ? projects.map(project => (
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
                ))
              : null}
          </ProjectList>
        </Container>
      </Container>
    </StyledPortfolioContents>
  );
};

export default PortfolioContents;
