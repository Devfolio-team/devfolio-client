import React from 'react';
import styled from 'styled-components';
import { ProjectEditForm } from 'containers';
import { Heading } from 'components';

const StyledProjectEditPage = styled.main``;

const ProjectEditPage = () => {
  return (
    <StyledProjectEditPage>
      <Heading as="h2" color="#212121" fontSize={3} textAlign="center" lineHeight="46px">
        안녕하세요!
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
