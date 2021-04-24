import { SkillIcon, Span } from 'components';
import useDetectViewport from 'hooks/useDetectViewport';
import React from 'react';
import styled, { css } from 'styled-components';

const StyledSkillIconItem = styled.li`
  ${props => css`
    display: flex;
    align-items: center;
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

const SkillIconItem = ({ type }) => {
  const { vw } = useDetectViewport();
  return (
    <StyledSkillIconItem>
      <SkillIcon type={type} width="60" height="60" />
      <Span fontSize={vw >= 768 ? 2.3 : 2} fontWeight={700} margin="0 0 0 30px">
        {type}
      </Span>
    </StyledSkillIconItem>
  );
};

export default SkillIconItem;
