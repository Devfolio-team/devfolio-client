import React from 'react';
import styled from 'styled-components';

const StyledDeleteButton = styled.button`
  color: #868e96;
  font-size: 1.6rem;
  background: transparent;

  &:hover {
    color: #212121;
    font-weight: 700;
  }
`;

const DeleteModifyButton = ({ children, ...restProps }) => {
  return <StyledDeleteButton {...restProps}>{children}</StyledDeleteButton>;
};

export default DeleteModifyButton;
