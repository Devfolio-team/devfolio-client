import React from 'react';
import styled from 'styled-components';

const StyledEmptyMessage = styled.span`
  display: block;
  width: 100px;
  font-size: 10rem;
  margin: 50px auto 80px;
  text-shadow: 10px 10px 5px rgba(0, 0, 0, 0.5);
  white-space: nowrap;
`;

const EmptyMessage = ({ children }) => {
  return <StyledEmptyMessage children={children} />;
};

export default EmptyMessage;
