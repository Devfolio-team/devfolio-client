import React from 'react';
import styled, { css } from 'styled-components';
import { string, number, oneOfType, node } from 'prop-types';
import { applyStyle } from 'utils';

const StyledContainer = styled.div`
  ${props =>
    css`
      ${applyStyle(props)}
    `}
`;

const Container = ({
  display,
  width,
  height,
  padding,
  margin,
  background,
  flexFlow,
  justifyContent,
  alignItems,
  position,
  border,
  top,
  left,
  bottom,
  right,
  textAlign,
  borderRadius,
  borderTop,
  borderRight,
  borderBottom,
  borderLeft,
  ...restProps
}) => {
  return (
    <StyledContainer
      $display={display}
      $width={width}
      $height={height}
      $padding={padding}
      $margin={margin}
      $background={background}
      $flexFlow={flexFlow}
      $justifyContent={justifyContent}
      $alignItems={alignItems}
      $position={position}
      $border={border}
      $top={top}
      $left={left}
      $bottom={bottom}
      $right={right}
      $textAlign={textAlign}
      $borderRadius={borderRadius}
      $borderTop={borderTop}
      $borderRight={borderRight}
      $borderBottom={borderBottom}
      $borderLeft={borderLeft}
      {...restProps}
    />
  );
};

Container.defaultProps = {
  display: 'block',
  // 기본적으로 컨테이너는 가로 중앙 배치로 사용하며 필요에 의해 props로 변경해 사용할 수 있습니다.
  margin: '0 auto',
};

Container.propTypes = {
  /** 컨테이너의 display속성을 설정합니다. */
  display: string,
  /** 컨테이너의 넓이를 설정합니다. number값을 주면 px단위, string값은 css문법으로 전달해줍니다. */
  width: oneOfType([number, string]),
  /** 컨테이너의 높이를 px단위로 설정합니다. */
  height: oneOfType([number, string]),
  /** 컨테이너의 내부 여백을 설정합니다. 단축표현을 사용하기 때문에 문자열을 전달해야 합니다. */
  padding: string,
  /** 컨테이너의 바깥쪽 여백을 설정합니다. 단축표현을 사용하기 때문에 문자열을 전달해야 합니다. */
  margin: string,
  /** 컨테이너의 배경색을 설정합니다. */
  background: string,
  /** display속성이 flex일때 주축과 줄바꿈 여부를 설정합니다. */
  flexFlow: string,
  /** display속성이 flex일때 주축에 대한 정렬방식을 설정합니다. */
  justifyContent: string,
  /** display속성이 flex일때 교차축에 대한 정렬방식을 설정합니다. */
  alignItems: string,
  /** 컨테이너의 position 속성을 설정합니다. */
  position: string,
  /** 컨테이너의 테두리를 설정합니다. */
  border: string,
  /** position 속성이 있을 경우 컴포넌트의 위치를 상단을 기준으로 설정합니다. number값을 주면 기본 단위는 px입니다. */
  top: oneOfType([number, string]),
  /** position 속성이 있을 경우 컴포넌트의 위치를 왼쪽을 기준으로 설정합니다. number값을 주면 기본 단위는 px입니다. */
  left: oneOfType([number, string]),
  /** position 속성이 있을 경우 컴포넌트의 위치를 하단을 기준으로 설정합니다. number값을 주면 기본 단위는 px입니다. */
  bottom: oneOfType([number, string]),
  /** position 속성이 있을 경우 컴포넌트의 위치를 오른쪽을 기준으로 설정합니다. number값을 주면 기본 단위는 px입니다. */
  right: oneOfType([number, string]),
  /** 컨테이너 내부 텍스트들의 정렬 방식을 설정합니다. */
  textAlign: string,
  /** 컨테이너의 자식 요소를 설정합니다. */
  children: node,
  /** 컨테이너의 테두리의 둥글기를 설정합니다. */
  borderRadius: string,
};

export default Container;
