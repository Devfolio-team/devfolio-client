import styled, { css } from 'styled-components';
import { string, number, oneOf, oneOfType } from 'prop-types';
import { applyStyle } from 'utils';

// as 사용해서 heading level을 유동적으로 사용
const StyledHeading = styled.h1`
  ${props => css`
    ${applyStyle(props)}
  `}
`;

const Heading = ({
  color,
  fontSize,
  fontWeight,
  lineHeight,
  background,
  margin,
  textAlign,
  border,
  borderBottom,
  width,
  ...restProps
}) => (
  <StyledHeading
    $color={color}
    $fontSize={fontSize}
    $fontWeight={fontWeight}
    $lineHeight={lineHeight}
    $background={background}
    $margin={margin}
    $textAlign={textAlign}
    $border={border}
    $borderBottom={borderBottom}
    $width={width}
    {...restProps}
  ></StyledHeading>
);

Heading.defaultProps = {
  color: '#ddd',
};

Heading.propTypes = {
  /** Heading에 적용 할 글자색을 설정합니다. */
  color: string,
  /** Heading에 적용 할 글자 크기 설정합니다. */
  fontSize: oneOfType([string, number]),
  /** Heading에 적용 할 글자 굵기를 설정합니다. */
  fontWeight: number,
  /** Heading에 적용 할 줄 높이를 설정합니다. */
  lineHeight: oneOfType([string, number]),
  /** Heading에 적용 할 배경색을 설정합니다. */
  backgroundColor: string,
  /** Heading에 적용 할 Heading-level을 설정합니다. */
  as: oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']).isRequired,
  /** Heading에 적용 할 바깥족 여백을 설정합니다. */
  margin: string,
  /** Heading에 적용 할 테두리 선을 설정합니다. */
  border: string,
  /** Heading에 적용 할 테두리 선을 설정합니다. */
  borderBottom: string,
  /** Heading에 적용 할 가로크기를 설정합니다. */
  width: string,
};

export default Heading;
