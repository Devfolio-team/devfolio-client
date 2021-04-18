import styled, { css } from 'styled-components';
import { string } from 'prop-types';
import { forwardRef } from 'react';
import { applyStyle } from 'utils';

const StyledDialog = styled.div.attrs(({ tabIndex }) => ({
  tabIndex,
}))`
  ${props => css`
    ${applyStyle(props)}
    background-color: #2c3035;
    border-radius: 8;
    z-index: 10;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    outline: none;
  `}
`;

const Dialog = forwardRef(({ width, height, padding, children, ...restProps }, ref) => (
  <StyledDialog
    id="dialog"
    $width={width}
    $height={height}
    $padding="20px"
    ref={ref}
    {...restProps}
  >
    {children}
  </StyledDialog>
));

Dialog.propTypes = {
  /** Dialog에 적용 할 가로 너비를 설정합니다. */
  width: string,
  /** Dialog에 적용 할 세로 높이를 설정합니다. */
  height: string,
};

export default Dialog;
