import styled from 'styled-components';
import { string, number } from 'prop-types';

const StyledImage = styled.img.attrs(({ src, alt }) => ({
  src,
  alt,
}))`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  object-fit: ${({ objectFit }) => objectFit};
  position: ${({ position }) => position};
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  bottom: ${({ bottom }) => bottom};
  right: ${({ right }) => right};
  z-index: ${({ zIndex }) => zIndex};
`;

const Image = ({ src, alt, ...restProps }) => <StyledImage src={src} alt={alt} {...restProps} />;

Image.defaultProps = {
  objectFit: 'cover',
};

Image.propTypes = {
  /** 이미지의 source를 설정합니다. */
  src: string.isRequired,
  /** 이미지의 대체텍스트를 설정합니다. */
  alt: string.isRequired,
  /** 이미지의 넓이를 px단위로 설정합니다. */
  width: number,
  /** 이미지의 높이를 px단위로 설정합니다. */
  height: number,
  /** 이미지의 콘텐츠 크기 어떤 방식으로 조절에 요소에 맞출 것인지를 설정합니다. */
  objectFit: string,
  /** 이미지의 position 속성을 설정합니다. */
  position: string,
  /** position 속성이 있을 경우 컴포넌트의 위치를 상단을 기준으로 설정합니다. */
  top: number,
  /** position 속성이 있을 경우 컴포넌트의 위치를 왼쪽을 기준으로 설정합니다. */
  left: number,
  /** position 속성이 있을 경우 컴포넌트의 위치를 오른쪽을 기준으로 설정합니다. */
  right: number,
  /** position 속성이 있을 경우 컴포넌트의 위치를 하단을 기준으로 설정합니다. */
  bottom: number,
  /** 이미지의 z축 순서를 지정합니다. */
  zIndex: number,
};

export default Image;
