import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { applyStyle } from 'utils';
import { A11yHidden, Logo } from 'components';

const StyledLink = styled(Link)`
  ${props => css`
    ${applyStyle(props)}
  `}
`;

const DevfolioLink = ({ ...restProps }) => (
  <StyledLink {...restProps}>
    <Link to="/">
      <A11yHidden as="span">Devfolio</A11yHidden>
      <Logo width={130} height={30} type="white" />
    </Link>
  </StyledLink>
);

export default DevfolioLink;
