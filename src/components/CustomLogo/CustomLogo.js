import { Link } from 'react-router-dom';
import { string, number, oneOfType } from 'prop-types';
import styled, { css } from 'styled-components';
import { applyStyle } from 'utils';

const StyledLink = styled(Link)`
  ${props => css`
    ${applyStyle(props)}
  `}
`;

const CustomLogo = ({ children, ...restProps }) => (
  <StyledLink {...restProps}>{children}</StyledLink>
);

CustomLogo.defaultProps = {};

CustomLogo.propTypes = {
  /** CustomLogo 적용 할 글자색을 설정합니다. */
  color: string,
  /** CustomLogo 적용 할 글자 크기 설정합니다. */
  fontSize: oneOfType([string, number]),
  /** CustomLogo 적용 할 글자 굵기를 설정합니다. */
  fontWeight: number,
};

export default CustomLogo;
