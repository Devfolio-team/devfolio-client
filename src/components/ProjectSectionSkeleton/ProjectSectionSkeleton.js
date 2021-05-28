import { SkeletonUI } from 'components';
import React from 'react';
import styled from 'styled-components';

const StyledProjectSectionSkeleton = styled.div`
  margin-bottom: 80px;
`;

const ProjectSectionSkeleton = () => {
  return (
    <StyledProjectSectionSkeleton>
      <SkeletonUI $width="120px" $height="40px" $margin="100px 0 47px 0" />
      <SkeletonUI width="100%" height="200px" />
    </StyledProjectSectionSkeleton>
  );
};

export default ProjectSectionSkeleton;
