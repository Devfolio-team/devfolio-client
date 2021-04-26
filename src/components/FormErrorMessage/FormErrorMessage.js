import styled from 'styled-components';
import { string } from 'prop-types';

const StyledFormErrorMessage = styled.div`
  color: red;
  font-size: 1.2rem;
  font-weight: 700;
  margin-top: 10px;
`;

const FormErrorMessage = ({ children }) => {
  return <StyledFormErrorMessage>{children}</StyledFormErrorMessage>;
};

FormErrorMessage.defaultProps = {};

FormErrorMessage.propTypes = {
  children: string,
};

export default FormErrorMessage;
