import { SkillIcon, Span } from 'components';
import React from 'react';
import styled, { css } from 'styled-components';

const StyledSkillIconItem = styled.li`
  ${props => css`
    display: flex;
    align-items: center;
    width: 33.3333%;
    margin-bottom: 30px;
  `}
`;

const SkillIconItem = ({ type }) => {
  return (
    <StyledSkillIconItem>
      <SkillIcon type={type} width="60" height="60" />
      <Span fontSize={2.5} margin="0 0 0 30px">
        {type}
      </Span>
    </StyledSkillIconItem>
  );
};

export default SkillIconItem;
