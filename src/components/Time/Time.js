import React from 'react';
import styled, { css } from 'styled-components';

const StyledTime = styled.time`
  ${({ $fontSize, $color, $padding, $margin }) => css`
    font-size: ${$fontSize}rem;
    color: ${$color};
    padding: ${$padding};
    margin: ${$margin};
  `}
`;

const Time = ({ dateTime, fontSize, color, padding, margin, children, ...restProps }) => {
  return (
    <StyledTime
      dateTime={dateTime}
      $fontSize={fontSize}
      $color={color}
      $padding={padding}
      $margin={margin}
      {...restProps}
    >
      {children}
    </StyledTime>
  );
};

export default Time;
