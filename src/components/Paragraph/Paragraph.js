import styled, { css } from 'styled-components';
import { number, string } from 'prop-types';

const StyledParagraph = styled.p`
  ${({ $fontSize, $fontWeight, $lineHeight, $color }) => css`
    font-size: ${$fontSize}rem;
    font-weight: ${$fontWeight};
    line-height: ${$lineHeight}px;
    color: ${$color};
  `}
`;

const Paragraph = ({ fontSize, fontWeight, lineHeight, color, ...restProps }) => (
  <StyledParagraph
    $fontSize={fontSize}
    $fontWeight={fontWeight}
    $lineHeight={lineHeight}
    $color={color}
    {...restProps}
  />
);

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
