import { styled } from '@storybook/theming';
import React from 'react';
import { css } from 'styled-components';
import { applyStyle } from 'utils';
import { node } from 'prop-types';

const StyledProjectList = styled.ul`
  ${props =>
    css`
      ${applyStyle(props)}
    `}
`;

const ProjectList = ({ children }) => {
  return <StyledProjectList>{children}</StyledProjectList>;
};

ProjectList.propTypes = {
  /** 리스트들의 아이템 요소들을 받습니다. 자식 요소로는 무조건 li요소가 위치해야 합니다. */
  children: node,
};

export default ProjectList;
