// 함수의 파라미터로 들어온 값의 타입을 보고 반환 할 단위를 결정한다. 그 함수의 이름은?
const getUnitByType = styleUnit => {
  if (typeof styleUnit === 'string') return styleUnit;
  else if (typeof styleUnit === 'number') return `${styleUnit}px`;
  else if (!styleUnit) return '';
  throw new TypeError(
    '적용 할 스타일의 단위는 number나 string 타입으로만 입력해주세요. number값을 입력하면 기본적으로 px단위가 적용됩니다.'
  );
};

const applyStyle = ({
  $display,
  $width,
  $height,
  $padding,
  $margin,
  $background,
  $flexFlow,
  $flexDirection,
  $flexWrap,
  $justifyContent,
  $alignItems,
  $position,
  $border,
  $top,
  $left,
  $bottom,
  $right,
  $textAlign,
  $borderRadius,
  $borderTop,
  $borderRight,
  $borderBottom,
  $borderLeft,
  $color,
  $fontSize,
  $fontWeight,
  $minWidth,
  $maxWidth,
  $minHeight,
  $maxHeight,
  $boxShadow,
  $zIndex,
  $transform,
  $backgroundColor,
  $opacity,
  $marginTop,
  $marginRight,
  $marginBottom,
  $marginLeft,
  $paddingTop,
  $paddingRight,
  $paddingBottom,
  $paddingLeft,
  $lineHeight,
  $objectFit,
  $overflow,
  $cursor,
  $pointerEvents,
  $fill,
  $transition,
}) => `
display: ${$display || ''};
width: ${getUnitByType($width)};
height: ${getUnitByType($height)};
padding: ${$padding || ''};
margin: ${$margin || ''};
background: ${$background || ''};
flex-flow: ${$flexFlow || ''};
flex-direction: ${$flexDirection || ''};
flex-wrap: ${$flexWrap || ''};
justify-content: ${$justifyContent || ''};
align-items: ${$alignItems || ''};
position: ${$position || ''};
border: ${$border || ''};
top: ${getUnitByType($top)};
left: ${getUnitByType($left)};
bottom: ${getUnitByType($bottom)};
right: ${getUnitByType($right)};
text-align: ${$textAlign || ''};
border-radius: ${getUnitByType($borderRadius)};
border-top: ${$borderTop || ''};
border-right: ${$borderRight || ''};
border-bottom: ${$borderBottom || ''};
border-left: ${$borderLeft || ''};
color: ${$color || ''};
font-size: ${`${$fontSize}rem` || ''};
font-weight: ${getUnitByType($fontWeight)};
min-width: ${getUnitByType($minWidth)};
max-width: ${getUnitByType($maxWidth)};
min-height: ${getUnitByType($minHeight)};
max-height: ${getUnitByType($maxHeight)};
box-shadow: ${getUnitByType($boxShadow)};
z-index: ${$zIndex || ''};
transform: ${$transform || ''};
background-color: ${$backgroundColor || ''};
opacity: ${$opacity || ''};
margin-top: ${getUnitByType($marginTop)};
margin-right: ${getUnitByType($marginRight)};
margin-bottom: ${getUnitByType($marginBottom)};
margin-left: ${getUnitByType($marginLeft)};
padding-top: ${getUnitByType($paddingTop)};
padding-right: ${getUnitByType($paddingRight)};
padding-nottom: ${getUnitByType($paddingBottom)};
padding-left: ${getUnitByType($paddingLeft)};
line-height: ${getUnitByType($lineHeight)};
object-fit: ${$objectFit || ''};
overflow: ${$overflow || ''};
cursor: ${$cursor || ''};
pointer-events: ${$pointerEvents || ''};
transition: ${$transition || ''};
path {
  fill: ${$fill || ''};
}
`;

export default applyStyle;
