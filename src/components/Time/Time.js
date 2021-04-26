import React from 'react';
import styled, { css } from 'styled-components';
import { string, number, node } from 'prop-types';

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

Time.propTypes = {
  /** 시간 데이터를 ISO String형식으로 입력합니다. */
  dateTime: string.isRequired,
  /** 컴포넌트의 글씨 크기를 숫자 단위로 입력합니다. rem단위로 적용됩니다. */
  fontSize: number,
  /** 컴포넌트의 글씨 색상을 설정합니다. */
  color: string,
  /** 컴포넌트의 안쪽 여백을 단축 표현으로 설정합니다. */
  padding: string,
  /** 컴포넌트의 바깥쪽 여백을 단축 표현으로 설정합니다. */
  margin: string,
  /** 컴포넌트의 자식요소로 들어 올 요소들을 정의합니다. */
  children: node,
};

export default Time;
