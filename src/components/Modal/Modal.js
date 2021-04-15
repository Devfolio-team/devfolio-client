import styled from 'styled-components';

const StyledModal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1;
`;

const Modal = ({ children }) => <StyledModal>{children}</StyledModal>;

export default Modal;
