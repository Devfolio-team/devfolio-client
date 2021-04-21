import styled from 'styled-components';
import { string } from 'prop-types';

const StyledA11yHidden = styled.span`
  overflow: hidden;
  position: absolute;
  clip: rect(0, 0, 0, 0);
  clip-path: circle(0);
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
`;

const A11yHidden = ({ as, ...restProps }) => <StyledA11yHidden as={as} {...restProps} />;

A11yHidden.defaultProps = {
  as: 'label',
};

A11yHidden.propTypes = {
  /** styled component의 요소를 정해줍니다 */
  as: string.isRequired,
};

export default A11yHidden;
