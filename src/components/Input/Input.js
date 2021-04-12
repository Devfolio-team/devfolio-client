import styled from 'styled-components';
import { string, number } from 'prop-types';

const StyledInput = styled.input.attrs(({ type, id }) => ({
  type,
  id,
}))`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  border-radius: ${props => props.borderRadius}px;
  font-size: ${props => props.fontSize}rem;
  font-weight: ${props => props.fontWeight};
  color: ${props => props.fontColor};
  border: ${props => props.border};
  outline: none;
`;

const Input = ({ type, id, label, ...restProps }) => {
  return (
    <>
      <StyledInput type={type} id={id} {...restProps} />
      <label htmlFor={id}>{label}</label>
    </>
  );
};

Input.defaultProps = {
  type: 'text',
  fontSize: 1.2,
};

Input.propTypes = {
  /** 인풋의 종류를 설정합니다. */
  type: string,
  /** 인풋의 고유한 id값을 설정합니다. */
  id: string.isRequired,
  /** 인풋의 label값을 설정합니다. */
  label: string.isRequired,
  /** 인풋 넓이를 설정합니다. */
  width: number,
  /** 인풋 높이를 설정합니다. */
  height: number,
  /** 인풋 폰트 사이즈를 설정합니다. */
  fontSize: number,
  /** 인풋 폰트 굵기를 설정합니다. */
  fontWeight: number,
  /** 인풋 폰트색을 설정합니다. */
  fontColor: string,
  /** 인풋 테두리를 설정합니다. */
  border: string,
  /** 인풋 테두리의 둥글기를 설정합니다. */
  borderRadius: number,
};

export default Input;
