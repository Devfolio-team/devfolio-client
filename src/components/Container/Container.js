import React from 'react';
import styled from 'styled-components';
import { string, number } from 'prop-types';

const StyledContainer = styled.div`
  display: ${({ display }) => display};
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
  background: ${({ background }) => background};
  flex-flow: ${({ flexFlow }) => flexFlow};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  position: ${({ position }) => position};
  border: ${({ border }) => border};
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  bottom: ${({ bottom }) => bottom};
  right: ${({ right }) => right};
`;

function Container(props) {
  return <StyledContainer {...props}></StyledContainer>;
}

Container.defaultProps = {
  display: 'block',
  // 기본적으로 컨테이너는 가로 중앙 배치로 사용하며 필요에 의해 props로 변경해 사용할 수 있습니다.
  margin: '0 auto',
};

Container.propTypes = {
  /** 컨테이너의 display속성을 설정합니다. */
  display: string,
  /** 컨테이너의 넓이를 px단위로 설정합니다. */
  width: number,
  /** 컨테이너의 높이를 px단위로 설정합니다. */
  height: number,
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
  /** position 속성이 있을 경우 컴포넌트의 위치를 상단을 기준으로 설정합니다. */
  top: number,
  /** position 속성이 있을 경우 컴포넌트의 위치를 왼쪽을 기준으로 설정합니다. */
  left: number,
  /** position 속성이 있을 경우 컴포넌트의 위치를 하단을 기준으로 설정합니다. */
  bottom: number,
  /** position 속성이 있을 경우 컴포넌트의 위치를 오른쪽을 기준으로 설정합니다. */
  right: number,
};

export default Container;
