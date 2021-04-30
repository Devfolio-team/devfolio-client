import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledToEditPageLink = styled(Link)`
  color: #868e96;
  font-size: 1.6rem;
  background: transparent;

  &:hover {
    color: #212121;
    font-weight: 700;
  }
`;

StyledToEditPageLink.displayName = 'StyledToEditPageLink';

export default StyledToEditPageLink;
