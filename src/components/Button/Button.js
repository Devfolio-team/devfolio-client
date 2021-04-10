import styled from 'styled-components';

const Button = styled.button.attrs(({ ...restProps }) => ({
  ...restProps
}))`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  background: ${props => props.background};
`;

export default Button;
