import styled from 'styled-components';
import { string, number, oneOf } from 'prop-types';

// as 사용해서 heading level을 유동적으로 사용
const StyledHeading = styled.h1`
  color: ${props => props.color};
  font-size: ${props => props.fontSize}rem;
  font-weight: ${props => props.fontWeight};
  line-height: ${props => props.lineHeight}px;
  background: ${props => props.background};
`;

const Heading = ({ ...restProps }) => <StyledHeading {...restProps}></StyledHeading>;

Heading.defaultProps = {
  color: '#ddd',
};

Heading.propTypes = {
  /** Heading에 적용 할 color를 설정합니다. */
  color: string,
  /** Heading에 적용 할 fontSize 설정합니다. */
  fontSize: number,
  /** Heading에 적용 할 fontWeight를 설정합니다. */
  fontWeight: number,
  /** Heading에 적용 할 lineHeight를 설정합니다. */
  lineHeight: number,
  /** Heading에 적용 할 backgroundColor를 설정합니다. */
  backgroundColor: string,
  /** Heading에 적용 할 Heading-level을 설정합니다. */
  as: oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']).isRequired,
};

export default Heading;
