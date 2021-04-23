import { Container, Heading, ProjectItem, SkillIconItem } from 'components';
import useDetectViewport from 'hooks/useDetectViewport';
import React, { useEffect, useState } from 'react';
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
    @media (max-height: 780px) {
      margin: 0;
    }
  `}
`;

const Introduce = styled.pre`
  ${props => css`
    ${applyStyle(props)}
    overflow: auto;
    white-space: pre-wrap; /* pre tag내에 word wrap */
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
    /* margin: 30px 0 0 100px; */
  `}
`;

const PortfolioContents = ({ skills, projects }) => {
  const viewport = useDetectViewport();
  const { vw } = viewport;

  return (
    <StyledPortfolioContents>
      <Container maxWidth={1440} margin="0 auto" padding={vw >= 768 ? '0 70px' : '0 30px'}>
        <Container>
          <Heading
            as="h3"
            fontSize={4}
            fontWeight={700}
            display="inline-block"
            lineHeight="20px"
            borderBottom="14px solid rgba(66,139,202,0.6)"
          >
            Introduce
          </Heading>
          <Introduce
            $margin={vw >= 768 ? '30px 0 0 100px' : '30px 0 0'}
            $lineHeight="3rem"
            $fontSize={2}
          >
            {`웹 프론트엔드 엔지니어 김지원 입니다. 여러 프로젝트를 수행하면서 개발 역량을 쌓아왔고, 현재는 React와 Redux를 사용하여 프로젝트를 진행 하고 있습니다. 리액트 프레임워크를 사용한 웹 프론트엔드 개발에 가장 익숙합니다.

자기개발에 손을 놓지 않습니다. 퇴근 후는 사이드프로젝트를 하며 공부합니다. 개인적으로 진행하는 프로젝트와 팀원 들과 협업하는
프로젝트를 병행하고 있습니다.

1인 개발 프로젝트를 개발 시작부터 배포까지 혼자 진행해보며, 프론트엔드 말고도 백엔드와 디자인 직군의 역할의 이 해도를 키웠습니다. 

여러 프로젝트에서 디자인부분까지 맡으면서 디자인 역량도 조금이나마 쌓게 되었고, 현재는 어느정도의 디자인 감각이 있는 프론트엔드 개발자를 지향하고 있습니다.

또한, 여러 협업 프로젝트를 진행하면서 다른 직군과 소통하는 것의 중요성을 알게 되었고, 프로젝트 시 주기적으로 회의하고 수시로 소통합니다. 슬랙, 노션, 제플린 등의 협업 툴 활용능력도 쌓으며 다양한 프로젝트에 적용하고 있습니다.

거의 모든 프로젝트를 깃허브를 활용해 관리하며 진행하고 있습니다.`}
          </Introduce>
        </Container>
        <Container margin="80px 0 0">
          <Heading
            as="h3"
            fontSize={4}
            fontWeight={700}
            display="inline-block"
            lineHeight="20px"
            borderBottom="14px solid rgba(66,139,202,0.6)"
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
            fontSize={4}
            fontWeight={700}
            margin="0 0 25px"
            display="inline-block"
            lineHeight="20px"
            borderBottom="14px solid rgba(66,139,202,0.6)"
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
