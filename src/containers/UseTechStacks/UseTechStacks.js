import { SectionHeading, SkeletonUI, SkillIcon } from 'components';
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

const UseTechStacks = ({ techStacks }) => {
  return (
    <StyledUseTechStacks>
      {techStacks.length ? (
        <>
          <SectionHeading id="사용기술스택">사용 기술 스택</SectionHeading>
          <SkillList
            $margin="0 auto"
            $width="100%"
            $display="flex"
            $flexWrap="wrap"
            $justifyContent="space-between"
          >
            {techStacks &&
              techStacks.map(skill => (
                <SkillIconItem key={skill.project_tech_stacks_id}>
                  <SkillIcon type={skill.tech_name} width={60} height={60}></SkillIcon>
                  <TechName>{skill.tech_name}</TechName>
                </SkillIconItem>
              ))}
          </SkillList>
        </>
      ) : (
        <>
          <SkeletonUI $width="120px" $height="40px" $margin="100px 0 47px 0" />
          <SkeletonUI width="100%" height="200px" />
        </>
      )}
    </StyledUseTechStacks>
  );
};

export default UseTechStacks;
