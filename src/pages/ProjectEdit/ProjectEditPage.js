import React from 'react';
import styled from 'styled-components';
import { ProjectEditForm } from 'containers';
import { Heading } from 'components';
import { useSelector } from 'react-redux';

const StyledProjectEditPage = styled.main``;

const ProjectEditPage = () => {
  const userName = useSelector(state => state.auth.currentUser.name);
  return (
    <StyledProjectEditPage>
      <Heading as="h2" color="#212121" fontSize={3} textAlign="center" lineHeight="46px">
        {userName}님 안녕하세요!
        <br />
        프로젝트 등록을 시작해 볼까요?
      </Heading>
      <ProjectEditForm />
    </StyledProjectEditPage>
  );
};

ProjectEditPage.defaultProps = {};

ProjectEditPage.propTypes = {};

export default ProjectEditPage;
