import styled, { css } from 'styled-components';
import { string } from 'prop-types';
import { applyStyle } from 'utils';

const StyledFormErrorMessage = styled.div`
  color: red;
  font-size: 1.2rem;
  font-weight: 700;
  ${props =>
    css`
      ${applyStyle(props)}
    `}
`;

const FormErrorMessage = ({ margin, children }) => {
  return <StyledFormErrorMessage $margin={margin}>{children}</StyledFormErrorMessage>;
};

FormErrorMessage.defaultProps = {};

FormErrorMessage.propTypes = {
  children: string,
};

export default FormErrorMessage;
