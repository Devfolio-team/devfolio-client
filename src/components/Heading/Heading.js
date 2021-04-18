import styled, { css } from 'styled-components';
import { string, number, oneOf } from 'prop-types';
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
    {...restProps}
  ></StyledHeading>
);

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
  /** Heading에 적용 할 margin을 설정합니다. */
  margin: string,
};

export default Heading;
