import styled, { css } from 'styled-components';
import { number, string } from 'prop-types';
import { forwardRef } from 'react';

const StyledDialog = styled.div`
  ${({ $width, $height, $margin, $borderRadius }) => css`
    width: ${$width}px;
    height: ${$height}px;
    background-color: #2c3035;
    z-index: 10;
    margin: ${$margin};
    padding: 30px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: ${$borderRadius}px;
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
  /** Dialog에 적용 할 가로 너비를 px단위로 설정합니다. */
  width: number,
  /** Dialog에 적용 할 세로 높이를 px단위로 설정합니다. */
  height: number,
  /** Dialog에 적용 할 세로 높이를 px단위로 설정합니다. */
  margin: string,
  /** Dialog에 적용 할 모서리를 둥글게 px단위로 설정합니다. */
  borderRadius: number,
};

export default Dialog;
