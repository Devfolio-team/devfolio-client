import styled from 'styled-components';
import { string, func, number } from 'prop-types';
import { color } from 'utils';
import { forwardRef } from 'react';

const StyledButton = styled.button.attrs(({ type, onClick }) => ({
  type,
  onClick,
}))`
  width: ${({ width }) => width}px;
  height: ${props => props.height}px;
  background: ${props => props.background};
  color: ${props => props.color};
  font-size: ${props => props.fontSize}rem;
  font-weight: ${props => props.fontWeight};
  border: ${props => props.border};
  border-radius: ${props => props.borderRadius}px;
  padding: ${props => props.padding}px;
  position: ${props => props.position};
  top: ${props => props.top}px;
  right: ${props => props.right}px;
  left: ${props => props.left}px;
  bottom: ${props => props.bottom}px;
  margin: ${props => props.margin};
  display: ${props => props.display};
  &:focus {
    outline: none;
    box-shadow: 0 0 0 4px rgba(147, 153, 210, 0.56);
  }
  &:focus:not(:focus-visible) {
    box-shadow: none;
  }
`;

const Button = forwardRef(({ type, onClick, ...restProps }, ref) => (
  <StyledButton type={type} onClick={onClick} ref={ref} {...restProps} />
));

Button.defaultProps = {
  type: 'button',
  width: 110,
  height: 45,
  bgColor: 'transparent',
  fontColor: color.mainColor,
  fontSize: 1.4,
  fontWeight: 500,
  border: `1px solid ${color.mainColor}`,
  borderRadius: 5,
  padding: '5 20',
};

Button.propTypes = {
  /** 버튼의 종류를 설정합니다. */
  type: string,
  /** 버튼 이벤트 리스너는 함수만 설정 가능합니다. */
  onClick: func,
  /** 버튼 넓이를 설정합니다. */
  width: number,
  /** 버튼 높이를 설정합니다. */
  height: number,
  /** 버튼 배경색을 설정합니다. */
  bgColor: string,
  /** 버튼 폰트색을 설정합니다. */
  fontColor: string,
  /** 버튼 폰트 사이즈를 설정합니다. */
  fontSize: number,
  /** 버튼 폰트 굵기를 설정합니다. */
  fontWeight: number,
  /** 버튼 테두리를 설정합니다. */
  border: string,
  /** 버튼 테두리의 둥글기를 설정합니다. */
  borderRadius: number,
  /** 버튼 테두리의 패딩을 설정합니다. */
  padding: string,
};

export default Button;
