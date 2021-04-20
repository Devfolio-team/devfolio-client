import styled, { css } from 'styled-components';
import { string, number, oneOfType } from 'prop-types';
import { applyStyle } from 'utils';

const StyledImage = styled.img.attrs(({ src, alt }) => ({
  src,
  alt,
}))`
  ${props =>
    css`
      ${applyStyle(props)}
    `}
`;

const Image = ({
  src,
  alt,
  width,
  height,
  objectFit,
  position,
  top,
  left,
  bottom,
  right,
  zIndex,
  borderRadius,
  cursor,
  onLoad,
  ...restProps
}) => (
  <StyledImage
    src={src}
    alt={alt}
    $width={width}
    $height={height}
    $objectFit={objectFit}
    $position={position}
    $top={top}
    $left={left}
    $bottom={bottom}
    $right={right}
    $zIndex={zIndex}
    $borderRadius={borderRadius}
    $cursor={cursor}
    onLoad={onLoad}
    {...restProps}
  />
);

Image.defaultProps = {
  objectFit: 'cover',
};

Image.propTypes = {
  /** 이미지의 source를 설정합니다. */
  src: string.isRequired,
  /** 이미지의 대체텍스트를 설정합니다. */
  alt: string.isRequired,
  /** 이미지의 넓이를 px단위로 설정합니다. */
  width: oneOfType([string, number]),
  /** 이미지의 높이를 px단위로 설정합니다. */
  height: oneOfType([string, number]),
  /** 이미지의 콘텐츠 크기 어떤 방식으로 조절에 요소에 맞출 것인지를 설정합니다. */
  objectFit: string,
  /** 이미지의 position 속성을 설정합니다. */
  position: string,
  /** position 속성이 있을 경우 컴포넌트의 위치를 상단을 기준으로 설정합니다. */
  top: oneOfType([string, number]),
  /** position 속성이 있을 경우 컴포넌트의 위치를 왼쪽을 기준으로 설정합니다. */
  left: oneOfType([string, number]),
  /** position 속성이 있을 경우 컴포넌트의 위치를 오른쪽을 기준으로 설정합니다. */
  right: oneOfType([string, number]),
  /** position 속성이 있을 경우 컴포넌트의 위치를 하단을 기준으로 설정합니다. */
  bottom: oneOfType([string, number]),
  /** 이미지의 z축 순서를 지정합니다. */
  zIndex: number,
  /** 이미지의 테두리의 둥글기를 설정합니다. */
  borderRadius: string,
};

export default Image;
