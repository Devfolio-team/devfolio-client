import { styled } from '@storybook/theming';
import React from 'react';
import { css } from 'styled-components';
import { applyStyle } from 'utils';

const StyledProjectList = styled.ul`
  ${props =>
    css`
      ${applyStyle(props)}
    `}
`;

const ProjectList = ({ children }) => {
  return <StyledProjectList>{children}</StyledProjectList>;
};

export default ProjectList;
