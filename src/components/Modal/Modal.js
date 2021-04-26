import styled, { css } from 'styled-components';
import { applyStyle } from 'utils';

const StyledModal = styled.div.attrs(() => ({
  tabindex: -1,
}))`
  ${props => css`
    ${applyStyle(props)}
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 1;
  `}
`;

const Modal = ({ onClick, children }) => <StyledModal onClick={onClick}>{children}</StyledModal>;

export default Modal;
