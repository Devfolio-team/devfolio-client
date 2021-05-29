import { SkillIcon } from 'components';
import React from 'react';
import styled, { css } from 'styled-components';
import { string } from 'prop-types';

const StyledSkillIconItem = styled.li`
  ${props => css`
    display: flex;
    align-items: center;
    min-width: 150px;
    width: 33.3333%;
    margin-bottom: 30px;
    @media (max-width: 768px) {
      width: 50%;
    }
    @media (max-width: 480px) {
      width: 100%;
    }
  `}
`;

const SkillText = styled.span`
  font-size: 2.3rem;
  font-weight: 700;
  margin-left: 30px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SkillIconItem = ({ type, title }) => {
  return (
    <StyledSkillIconItem>
      <SkillIcon type={type} title={title} width="60" height="60" />
      <SkillText>{type}</SkillText>
    </StyledSkillIconItem>
  );
};

SkillIconItem.propTyped = {
  type: string.isRequired,
};

export default SkillIconItem;
