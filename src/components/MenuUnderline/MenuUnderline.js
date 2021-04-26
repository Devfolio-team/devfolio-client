import { styled } from '@storybook/theming';
import React from 'react';
import { css } from 'styled-components';
import { string } from 'prop-types';

const StyledMenuUnderline = styled.span`
  ${({ $position, $transform, $top, $right, $bottom, $left }) => css`
    position: ${$position};
    transform: ${$transform};
    transition: 0.3s;
    top: ${$top};
    right: ${$right};
    bottom: ${$bottom};
    left: ${$left};
    display: inline-block;
    width: 112px;
    height: 2px;
    background: #212121;
  `}
`;

const MenuUnderline = ({ position, transform, top, right, bottom, left }) => {
  return (
    <StyledMenuUnderline
      $position={position}
      $transform={transform}
      $top={top}
      $right={right}
      $bottom={bottom}
      $left={left}
    />
  );
};

MenuUnderline.propTypes = {
  /** MenuUnderline 컴포넌트의 위치 속성을 결정하는 position 값을 설정합니다. */
  position: string,
  /** 의존하고 있는 position요소를 기준으로 상단에서의 위치를 설정합니다. */
  top: string,
  /** 의존하고 있는 position요소를 기준으로 우측에서의 위치를 설정합니다. */
  right: string,
  /** 의존하고 있는 position요소를 기준으로 하단에서의 위치를 설정합니다. */
  bottom: string,
  /** 의존하고 있는 position요소를 기준으로 좌측에서의 위치를 설정합니다. */
  left: string,
  /** 유동적으로 위치를 결정할 수 있는 transform속성값을 설정합니다. */
  transform: string,
};

export default MenuUnderline;
