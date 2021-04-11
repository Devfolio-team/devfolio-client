import styled from 'styled-components';
import { number, string } from 'prop-types';

const StyledParagraph = styled.p`
  font-size: ${props => props.fontSize}rem;
  font-weight: ${props => props.fontWeight};
  line-height: ${props => props.lineHeight}px;
  color: ${props => props.color};
`;

const Paragraph = ({ ...restProps }) => <StyledParagraph {...restProps} />;

Paragraph.propTypes = {
  /** Paragraph에 적용 할 fontSize 설정합니다. */
  fontSize: number,
  /** Paragraph에 적용 할 fontWeight를 설정합니다. */
  fontWeight: number,
  /** Paragraph에 적용 할 lineHeight를 설정합니다. */
  lineHeight: number,
  /** Paragraph에 적용 할 fontColor를 설정합니다. */
  color: string,
};

export default Paragraph;
