import styled, { css } from 'styled-components';
const { applyStyle } = require('utils');

const StyledProjectNav = styled.nav`
  ${props => css`
    ${applyStyle(props)}
  `}

  li {
    list-style: none;
    word-break: break-all;
  }
`;

const StyledProjectNavList = styled.ol`
  ${props => css`
    ${applyStyle(props)}
  `}
`;

const ProjectNav = ({
  borderLeft,
  padding,
  position,
  left,
  width,
  fontSize,
  children,
  ...restProps
}) => {
  return (
    <StyledProjectNav
      $borderLeft={borderLeft}
      $padding={padding}
      $position={position}
      $left={left}
      $width={width}
      $fontSize={fontSize}
      {...restProps}
    >
      <StyledProjectNavList>{children}</StyledProjectNavList>
    </StyledProjectNav>
  );
};

export default ProjectNav;
