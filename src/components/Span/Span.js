import React from 'react';
import styled, { css } from 'styled-components';
import { applyStyle } from 'utils';

const StyledSpan = styled.span`
  ${props =>
    css`
      ${applyStyle(props)}
    `}
`;

const Span = ({
  display,
  width,
  height,
  padding,
  margin,
  background,
  flexFlow,
  flexDirection,
  flexWrap,
  justifyContent,
  alignItems,
  position,
  border,
  top,
  left,
  bottom,
  right,
  textAlign,
  borderRadius,
  borderTop,
  borderRight,
  borderBottom,
  borderLeft,
  color,
  fontSize,
  fontWeight,
  minWidth,
  maxWidth,
  minHeight,
  maxHeight,
  boxShadow,
  zIndex,
  transform,
  backgroundColor,
  opacity,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  lineHeight,
  objectFit,
  overflow,
  cursor,
  pointerEvents,
  fill,
  transition,
  verticalAlign,
  ...restProps
}) => {
  return (
    <StyledSpan
      $display={display}
      $width={width}
      $height={height}
      $padding={padding}
      $margin={margin}
      $background={background}
      $flexFlow={flexFlow}
      $flexDirection={flexDirection}
      $flexWrap={flexWrap}
      $justifyContent={justifyContent}
      $alignItems={alignItems}
      $position={position}
      $border={border}
      $top={top}
      $left={left}
      $bottom={bottom}
      $right={right}
      $textAlign={textAlign}
      $borderRadius={borderRadius}
      $borderTop={borderTop}
      $borderRight={borderRight}
      $borderBottom={borderBottom}
      $borderLeft={borderLeft}
      $color={color}
      $fontSize={fontSize}
      $fontWeight={fontWeight}
      $minWidth={minWidth}
      $maxWidth={maxWidth}
      $minHeight={minHeight}
      $maxHeight={maxHeight}
      $boxShadow={boxShadow}
      $zIndex={zIndex}
      $transform={transform}
      $backgroundColor={background}
      $opacity={opacity}
      $marginTop={marginTop}
      $marginRight={marginRight}
      $marginBottom={marginBottom}
      $marginLeft={marginLeft}
      $paddingTop={paddingTop}
      $paddingRight={paddingRight}
      $paddingBottom={paddingBottom}
      $paddingLeft={paddingLeft}
      $lineHeight={lineHeight}
      $overflow={overflow}
      $cursor={cursor}
      $pointerEvents={pointerEvents}
      $fill={fill}
      $transition={transition}
      $verticalAlign={verticalAlign}
      {...restProps}
    />
  );
};

export default Span;
