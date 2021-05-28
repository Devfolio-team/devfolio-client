import {
  Heading,
  MarkdownStyler,
  ProjectSectionSkeleton,
  SectionHeading,
  Span,
  Time,
} from 'components';
import React from 'react';
import styled from 'styled-components';
import { dateFormMaker } from 'utils';

const StyledProjectPlanIntention = styled.section`
  margin: 0 auto;
`;

const ProjectPeriod = styled.section`
  margin-bottom: 40px;
  color: #70777d;
  font-size: 1.6rem;
`;

const ProjectExplanation = ({ mainContents, startDate, endDate }) => {
  return (
    <>
      {mainContents ? (
        <StyledProjectPlanIntention>
          <SectionHeading id="프로젝트설명">프로젝트 설명</SectionHeading>
          <ProjectPeriod>
            <Heading as="h4" fontSize={1.5} margin="0 0 5px 0">
              프로젝트 기간
            </Heading>
            <Time fontSize={1.6} dateTime={startDate}>
              {dateFormMaker(startDate)}
            </Time>
            <Span margin="0 5px">~</Span>
            <Time fontSize={1.6} dateTime={endDate}>
              {dateFormMaker(endDate)}
            </Time>
          </ProjectPeriod>
          <MarkdownStyler>{mainContents}</MarkdownStyler>
        </StyledProjectPlanIntention>
      ) : (
        <ProjectSectionSkeleton />
      )}
    </>
  );
};

export default ProjectExplanation;
