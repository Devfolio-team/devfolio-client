import styled, { css } from 'styled-components';
import { string, number, oneOfType } from 'prop-types';
import { applyStyle } from 'utils';

const StyledParagraph = styled.p`
  ${props => css`
    ${applyStyle(props)}
    word-break: break-all;
  `}
`;

const Paragraph = ({
  display,
  fontSize,
  fontWeight,
  lineHeight,
  color,
  height,
  padding,
  margin,
  cursor,
  overflow,
  textOverflow,
  width,
  ...restProps
}) => (
  <StyledParagraph
    $display={display}
    $fontSize={fontSize}
    $fontWeight={fontWeight}
    $lineHeight={lineHeight}
    $color={color}
    $width={width}
    $height={height}
    $padding={padding}
    $margin={margin}
    $cursor={cursor}
    $overflow={overflow}
    $textOverflow={textOverflow}
    {...restProps}
  />
);

Paragraph.propTypes = {
  /** Paragraph에 적용 할 글자 크기를 설정합니다. */
  fontSize: number,
  /** Paragraph에 적용 할 글자 굵기를 설정합니다. */
  fontWeight: string,
  /** Paragraph에 적용 할 줄 높이를 설정합니다. */
  lineHeight: oneOfType([string, number]),
  /** Paragraph에 적용 할 글자색을 설정합니다. */
  color: string,
  /** Paragraph에 적용 할 p태그의 높이를 설정합니다. */
  height: oneOfType([string, number]),
  /** Paragraph에 적용 할 내부 여백을 설정합니다. */
  padding: string,
  /** Paragraph에 적용 할 외부 여백을 설정합니다. */
  margin: string,
};

export default Paragraph;
