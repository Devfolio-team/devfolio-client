import styled, { css } from 'styled-components';

const StyledModal = styled.div.attrs(() => ({
  tabindex: -1,
}))`
  ${({ $height }) => css`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 1;
    height: ${$height}px;
  `}
`;

const Modal = ({ onClick, children, height }) => (
  <StyledModal $height={height} onClick={onClick}>
    {children}
  </StyledModal>
);

export default Modal;
