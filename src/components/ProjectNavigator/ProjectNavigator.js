import React from 'react';
import styled from 'styled-components';

const StyledProjectNavigator = styled.div`
  position: absolute;
  top: 220px;
  right: -60px;

  @media (max-width: 1440px) {
    display: none;
  }
`;

const NavigatorList = styled.ul`
  position: fixed;
  width: 200px;
  border-left: 1.5px solid rgba(134, 142, 150, 0.5);
  padding: 0 40px 0 10px;
  font-size: 1.5rem;
  & a {
    color: rgb(134, 142, 150);
  }
`;

const NavigatorItem = styled.li`
  margin-bottom: 15px;
`;

const ProjectNavigator = ({ subject, projectLoading }) => {
  return (
    <StyledProjectNavigator>
      {!projectLoading && (
        <NavigatorList>
          <NavigatorItem>
            <a href="#제목">{subject}</a>
          </NavigatorItem>
          <NavigatorItem>
            <a href="#기획의도">기획 의도 및 설명</a>
          </NavigatorItem>
          <NavigatorItem>
            <a href="#팀원목록">팀원 목록</a>
          </NavigatorItem>
          <NavigatorItem>
            <a href="#사용기술스택">사용기술스택</a>
          </NavigatorItem>
          <NavigatorItem>
            <a href="#프로젝트설명">프로젝트설명</a>
          </NavigatorItem>
        </NavigatorList>
      )}
    </StyledProjectNavigator>
  );
};

export default ProjectNavigator;
