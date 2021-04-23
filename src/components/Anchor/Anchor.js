import React from 'react';
import styled, { css } from 'styled-components';
import { string, node, number } from 'prop-types';
import { applyStyle } from 'utils';

const StyledAnchor = styled.a`
  ${props => css`
    ${applyStyle(props)}
  `}
`;

const Anchor = ({
  href,
  target,
  children,
  display,
  color,
  fontSize,
  margin,
  padding,
  width,
  height,
  cursor,
  ...restProps
}) => {
  return (
    <StyledAnchor
      href={href}
      target={target}
      rel={target === '_blank' ? 'noopener' : null}
      $display={display}
      $color={color}
      $fontSize={fontSize}
      $margin={margin}
      $padding={padding}
      $width={width}
      $height={height}
      $cursor={cursor}
      {...restProps}
    >
      {children}
    </StyledAnchor>
  );
};

Anchor.defaultProps = {
  target: '_self',
};

Anchor.propTypes = {
  /** Anchor 요소의 css display속성을 설정합니다. */
  display: string,
  /** Anchor 요소를 클릭했을때 이동할 페이지의 url을 설정합니다. */
  href: string,
  /** Anchor요소가 이동하는 url을 기존 페이지에서 이동할것인지, 새로운 페이지를 띄워 이동할것인지 설정합니다. */
  target: string,
  /** Anchor요소의 자식 요소를 넣어줍니다. */
  children: node,
  /** Anchor요소의 글씨 색상을 설정합니다. */
  color: string,
  /** Anchor요소의 글씨 크기를 설정합니다. */
  fontSize: number,
  /** Anchor요소의 바깥여백을 설정합니다. */
  margin: string,
  /** Anchor요소의 안쪽여백을 설정합니다. */
  padding: string,
  /** Anchor요소의 넓이를 설정합니다. */
  width: number,
  /** Anchor요소의 높이를 설정합니다. */
  height: number,
};

export default Anchor;
