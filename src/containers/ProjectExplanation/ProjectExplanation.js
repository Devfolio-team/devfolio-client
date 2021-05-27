import { Heading, MarkdownStyler, SectionHeading, SkeletonUI, Span, Time } from 'components';
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
    <StyledProjectPlanIntention>
      {mainContents ? (
        <>
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
        </>
      ) : (
        <>
          <SkeletonUI $width="120px" $height="40px" $margin="100px 0 47px 0" />
          <SkeletonUI $width="200px" $height="10px" />
          <SkeletonUI width="100%" height="200px" />
        </>
      )}
    </StyledProjectPlanIntention>
  );
};

export default ProjectExplanation;
