import React, { useState } from 'react';
import styled from 'styled-components';
import { string, number } from 'prop-types';
import { color } from 'utils';
import A11yHidden from 'components/A11yHidden/A11yHidden';

const StyledLabel = styled.label`
  display: block;
  transition: 0.4s;
  transform: translateY(${({ focus, inputValue }) => (focus || inputValue ? -0.5 : 2.5)}rem);
  font-size: 1.2rem;
  margin-left: ${({ focus, inputValue }) => (focus || inputValue ? 0 : 15)}px;
  color: ${color.lightGray};
`;

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

const Input = ({ type, id, label, mode, ...restProps }) => {
  const [focus, setFocus] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const onFocusHandler = () => {
    setFocus(true);
  };

  const onBlurHandler = () => {
    setFocus(false);
    if (inputValue !== '') setInputValue(true);
  };

  const onChangeHandler = e => {
    setInputValue(e.target.value);
  };

  return (
    <>
      {mode === 'hidden' ? (
        <A11yHidden as="label" htmlFor={id} />
      ) : (
        <StyledLabel htmlFor={id} focus={focus} inputValue={inputValue}>
          {label}
        </StyledLabel>
      )}
      <StyledInput
        type={type}
        id={id}
        onFocus={onFocusHandler}
        onBlur={onBlurHandler}
        onChange={onChangeHandler}
        {...restProps}
      />
    </>
  );
};

Input.defaultProps = {
  type: 'text',
  fontSize: 1.2,
  width: 170,
  height: 40,
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
  /** 인풋의 레이블의 숨김처리를 설정합니다. */
  mode: string,
};

export default Input;
