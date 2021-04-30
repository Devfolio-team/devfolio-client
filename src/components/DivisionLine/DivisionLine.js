import styled, { css } from 'styled-components';
import { applyStyle } from 'utils';

const StyledDivisionLine = styled.div`
  ${props => css`
    ${applyStyle(props)}
    border-bottom: ${'1px solid #666666'};
    margin: ${'100px auto 0 auto'};
  `}
`;
const DivisionLine = ({ width, children, ...restProps }) => {
  return (
    <StyledDivisionLine $width={width} $restProps={restProps}>
      {children}
    </StyledDivisionLine>
  );
};

export default DivisionLine;
