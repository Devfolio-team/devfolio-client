import styled, { css } from 'styled-components';
import { string, func, number, oneOfType } from 'prop-types';
import { applyStyle, color } from 'utils';
import { forwardRef } from 'react';

const StyledButton = styled.button.attrs(({ type, onClick }) => ({
  type,
  onClick,
}))`
  ${props =>
    css`
      ${applyStyle(props)}

      &:focus {
        outline: 3px solid #aaa;
      }
      &:focus:not(:focus-visible) {
        outline: none;
      }
      &[disabled] {
        opacity: 0.4;
        cursor: not-allowed;
      }
      &[disabled]:hover {
        background: ${color.white};
        color: ${props.$background === '#fafbfc' ? '#d73a49' : color.mainColor};
      }
    `}
`;

const Button = forwardRef(
  (
    {
      type,
      onClick,
      width,
      height,
      background,
      color,
      fontSize,
      fontWeight,
      border,
      borderRadius,
      padding,
      position,
      top,
      right,
      left,
      bottom,
      margin,
      display,
      borderTop,
      borderRight,
      borderLeft,
      borderBottom,
      hoverBackground,
      hoverColor,
      cursor,
      ...restProps
    },
    ref
  ) => (
    <StyledButton
      type={type}
      onClick={onClick}
      ref={ref}
      $width={width}
      $height={height}
      $background={background}
      $color={color}
      $fontSize={fontSize}
      $fontWeight={fontWeight}
      $border={border}
      $borderRadius={borderRadius}
      $padding={padding}
      $position={position}
      $top={top}
      $right={right}
      $left={left}
      $bottom={bottom}
      $margin={margin}
      $display={display}
      $borderTop={borderTop}
      $borderRight={borderRight}
      $borderLeft={borderLeft}
      $borderBottom={borderBottom}
      $hoverBackground={hoverBackground}
      $hoverColor={hoverColor}
      $cursor={cursor}
      {...restProps}
    />
  )
);

Button.defaultProps = {
  type: 'button',
  width: 110,
  height: 45,
  background: 'transparent',
  fontSize: 1.4,
  fontWeight: 500,
  borderRadius: 5,
};

Button.propTypes = {
  /** 버튼의 종류를 설정합니다. */
  type: string,
  /** 버튼 이벤트 리스너는 함수만 설정 가능합니다. */
  onClick: func,
  /** 버튼 넓이를 설정합니다. */
  width: oneOfType([string, number]),
  /** 버튼 높이를 설정합니다. */
  height: oneOfType([string, number]),
  /** 버튼 배경색을 설정합니다. */
  background: string,
  /** 버튼 폰트색을 설정합니다. */
  color: string,
  /** 버튼 폰트 사이즈를 설정합니다. */
  fontSize: number,
  /** 버튼 폰트 굵기를 설정합니다. */
  fontWeight: oneOfType([string, number]),
  /** 버튼 테두리를 설정합니다. */
  border: string,
  /** 버튼의 위쪽 테두리를 설정합니다. */
  borderTop: string,
  /** 버튼의 오른쪽 테두리를 설정합니다. */
  borderRight: string,
  /** 버튼의 아래쪽 테두리를 설정합니다. */
  borderBottom: string,
  /** 버튼의 왼쪽 테두리를 설정합니다. */
  borderLeft: string,
  /** 버튼 테두리의 둥글기를 설정합니다. */
  borderRadius: oneOfType([string, number]),
  /** 버튼 테두리의 패딩을 설정합니다. */
  padding: string,
  /** 버튼요소를 배치하는 방법을 지정합니다. */
  position: string,
  /** position 속성이 있을 경우 컴포넌트의 위치를 상단을 기준으로 설정합니다. */
  top: oneOfType([string, number]),
  /** position 속성이 있을 경우 컴포넌트의 위치를 오른쪽을 기준으로 설정합니다. */
  right: oneOfType([string, number]),
  /** position 속성이 있을 경우 컴포넌트의 위치를 왼쪽을 기준으로 설정합니다. */
  left: oneOfType([string, number]),
  /** position 속성이 있을 경우 컴포넌트의 위치를 하단을 기준으로 설정합니다. */
  bottom: oneOfType([string, number]),
  /** 버튼의 바깥쪽 여백을 설정합니다. 단축표현을 사용하기 때문에 문자열을 전달해야 합니다. */
  margin: string,
  /** 버튼의 display속성을 설정합니다. */
  display: string,
};

export default Button;
