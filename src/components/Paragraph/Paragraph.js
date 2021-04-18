import styled, { css } from 'styled-components';
import { number, string } from 'prop-types';
import { applyStyle } from 'utils';

const StyledParagraph = styled.p`
  ${props => css`
    ${applyStyle(props)}
  `}
`;

const Paragraph = ({
  fontSize,
  fontWeight,
  lineHeight,
  color,
  height,
  padding,
  margin,
  ...restProps
}) => (
  <StyledParagraph
    $fontSize={fontSize}
    $fontWeight={fontWeight}
    $lineHeight={lineHeight}
    $color={color}
    $height={height}
    $padding={padding}
    $margin={margin}
    {...restProps}
  />
);

Paragraph.propTypes = {
  /** Paragraph에 적용 할 글자 크기를 설정합니다. */
  fontSize: number,
  /** Paragraph에 적용 할 글자 굵기를 설정합니다. */
  fontWeight: number,
  /** Paragraph에 적용 할 줄 높이를 설정합니다. */
  lineHeight: number,
  /** Paragraph에 적용 할 글자색을 설정합니다. */
  color: string,
  /** Paragraph에 적용 할 p태그의 높이를 설정합니다. */
  height: string,
  /** Paragraph에 적용 할 내부 여백을 설정합니다. */
  padding: string,
  /** Paragraph에 적용 할 외부 여백을 설정합니다. */
  margin: string,
};

export default Paragraph;
