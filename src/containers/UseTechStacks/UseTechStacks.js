import { Container, ProjectSectionSkeleton, SectionHeading, SkillIcon, Span } from 'components';
import React from 'react';
import styled from 'styled-components';

const StyledUseTechStacks = styled.section`
  width: 788px;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const SkillList = styled.ul`
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const SkillIconItem = styled.li`
  display: flex;
  justify-content: center;
  width: 50%;
  margin: 0 0 20px 0;
  align-items: center;

  @media (max-width: 600px) {
    justify-content: left;
    width: 100%;
  }
`;

const TechName = styled.span`
  color: #666666;
  font-size: 2.3rem;
  font-weight: 700;
  width: 200px;
  text-align: left;
  margin-left: 30px;

  @media (max-width: 768px) {
    font-size: 2rem;
    width: 100px;
    margin-left: 10px;
  }
`;

const EmptyMessage = styled.span`
  display: block;
  width: 100px;
  font-size: 10rem;
  margin: 50px auto 80px;
  text-shadow: 10px 10px 5px rgba(0, 0, 0, 0.5);
`;

const UseTechStacks = ({ techStacks, projectLoading }) => {
  return (
    <>
      {!projectLoading ? (
        <StyledUseTechStacks>
          <SectionHeading id="사용기술스택">사용 기술 스택</SectionHeading>
          <SkillList
            $margin="0 auto"
            $width="100%"
            $display="flex"
            $flexWrap="wrap"
            $justifyContent="space-between"
          >
            {techStacks.length ? (
              techStacks.map(skill => (
                <SkillIconItem key={skill.project_tech_stacks_id}>
                  <SkillIcon type={skill.tech_name} width={60} height={60}></SkillIcon>
                  <TechName>{skill.tech_name}</TechName>
                </SkillIconItem>
              ))
            ) : (
              <Container textAlign="center">
                <EmptyMessage>텅-</EmptyMessage>
                <Span fontSize={2} fontWeight={700}>
                  등록된 기술 스택이 없습니다<span aria-hidden> :(</span>
                </Span>
              </Container>
            )}
          </SkillList>
        </StyledUseTechStacks>
      ) : (
        <ProjectSectionSkeleton />
      )}
    </>
  );
};

export default UseTechStacks;
