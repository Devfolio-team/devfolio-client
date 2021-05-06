import React, { forwardRef } from 'react';
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

const DeleteModifyButton = forwardRef(({ children, ...restProps }, ref) => {
  return (
    <StyledDeleteButton ref={ref} {...restProps}>
      {children}
    </StyledDeleteButton>
  );
});

export default DeleteModifyButton;
