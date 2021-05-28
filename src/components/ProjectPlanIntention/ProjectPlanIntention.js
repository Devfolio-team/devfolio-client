import React from 'react';
import { ProjectSectionSkeleton, SectionHeading } from 'components';
import styled from 'styled-components';
import { string } from 'prop-types';

const StyledProjectPlanIntention = styled.section`
  margin-bottom: 80px;
`;

const PlanIntention = styled.p`
  color: #666666;
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 25px;
  padding: 0 15px;
`;

const ProjectPlanIntention = ({ planIntention }) => {
  return (
    <>
      {planIntention ? (
        <StyledProjectPlanIntention>
          <SectionHeading id="기획의도">기획 의도 및 소개</SectionHeading>
          <PlanIntention>{planIntention}</PlanIntention>
        </StyledProjectPlanIntention>
      ) : (
        <ProjectSectionSkeleton />
      )}
    </>
  );
};

ProjectPlanIntention.propTypes = {
  /** 프로젝트의 기획 의도 및 소개에 대한 내용을 전달해줍니다. 데이터베이스에서는 plan_intention이라는 프로퍼티에 담겨 응답 받습니다. */
  planIntention: string.isRequired,
};

export default ProjectPlanIntention;
