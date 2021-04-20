import React from 'react';
import styled from 'styled-components';
import { ProjectEditForm } from 'containers';

const StyledProjectEditPage = styled.main``;

const ProjectEditPage = () => {
  return (
    <StyledProjectEditPage>
      <ProjectEditForm />
    </StyledProjectEditPage>
  );
};

ProjectEditPage.defaultProps = {};

ProjectEditPage.propTypes = {};

export default ProjectEditPage;
