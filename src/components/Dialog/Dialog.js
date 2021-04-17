import styled, { css } from 'styled-components';
import { number, string } from 'prop-types';
import { forwardRef } from 'react';

const StyledDialog = styled.div.attrs(({ tabIndex }) => ({
  tabIndex,
}))`
  ${({ $width, $height, $margin, $padding, $borderRadius }) => css`
    width: ${$width};
    height: ${$height};
    background-color: #2c3035;
    z-index: 10;
    margin: ${$margin};
    padding: ${$padding};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: ${$borderRadius}px;
    outline: none;
  `}
`;

const Dialog = forwardRef(
  (
    {
      width,
      height,
      backgroundColor,
      zIndex,
      margin,
      padding,
      position,
      borderRadius,
      children,
      ...restProps
    },
    ref
  ) => (
    <StyledDialog
      id="dialog"
      $width={width}
      $height={height}
      $backgroundColor={backgroundColor}
      $zIndex={zIndex}
      $margin={margin}
      $padding={padding}
      $position={position}
      $borderRadius={borderRadius}
      $children={children}
      ref={ref}
      {...restProps}
    >
      {children}
    </StyledDialog>
  )
);

Dialog.propTypes = {
  /** Dialog에 적용 할 가로 너비를 props.width의 단위로 설정합니다. */
  width: string,
  /** Dialog에 적용 할 세로 높이를 props.height단위로 설정합니다. */
  height: string,
  /** Dialog에 적용 할 바깥 여백을 props.margin단위로 설정합니다. */
  margin: string,
  /** Dialog에 적용 할 바깥 여백을 props.padding단위로 설정합니다. */
  padding: string,
  /** Dialog에 적용 할 모서리를 둥글게 px단위로 설정합니다. */
  borderRadius: number,
};

export default Dialog;
