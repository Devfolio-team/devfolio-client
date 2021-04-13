import styled from 'styled-components';
import { string, func, number } from 'prop-types';
import { color } from 'utils';

const StyledButton = styled.button.attrs(({ type, onClick }) => ({
  type,
  onClick,
}))`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  background: ${props => props.background};
  color: ${props => props.color};
  font-size: ${props => props.fontSize}rem;
  font-weight: ${props => props.fontWeight};
  border: ${props => props.border};
  border-radius: ${props => props.borderRadius}px;
  padding: 5px 20px;
`;

const Button = ({ type, onClick, ...restProps }) => (
  <StyledButton type={type} onClick={onClick} {...restProps} />
);

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
};

export default Button;
