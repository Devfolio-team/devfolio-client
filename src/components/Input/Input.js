import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { string, number, func } from 'prop-types';
import { color } from 'utils';
import A11yHidden from 'components/A11yHidden/A11yHidden';

const StyledLabel = styled.label`
  display: block;
  transition: 0.4s;
  transform: translateY(
    ${({ focus, inputValue, beforeTranslate, afterTranslate }) =>
      focus || inputValue ? afterTranslate : beforeTranslate}rem
  );
  font-size: 2rem;
  margin-left: ${({ focus, inputValue, beforeMargin, afterMargin }) =>
    focus || inputValue ? afterMargin : beforeMargin}px;
  color: ${color.placeholder};
`;

const StyledInput = styled.input`
  ${({
    $width,
    $height,
    $borderRadius,
    $fontSize,
    $fontWeight,
    $color,
    $border,
    $margin,
    $display,
    $padding,
    $boxShadow,
  }) => css`
    width: ${$width}px;
    height: ${$height}px;
    border-radius: ${$borderRadius}px;
    font-size: ${$fontSize}rem;
    font-weight: ${$fontWeight};
    color: ${$color};
    border: ${$border};
    outline: none;
    margin: ${$margin};
    display: ${$display};
    padding: ${$padding};
    box-shadow: ${$boxShadow};
  `}
`;

const Input = ({
  type,
  id,
  label,
  value,
  onChange,
  mode,
  width,
  height,
  borderRadius,
  fontSize,
  fontWeight,
  color,
  border,
  margin,
  display,
  padding,
  boxShadow,
  beforeTranslate,
  afterTranslate,
  beforeMargin,
  afterMargin,
  ...restProps
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const onFocusHandler = () => {
    setIsFocused(true);
  };

  const onBlurHandler = () => {
    setIsFocused(false);
  };

  return (
    <>
      {mode === 'hidden' ? (
        <A11yHidden as="label" htmlFor={id} children={label} />
      ) : (
        <StyledLabel
          htmlFor={id}
          focus={isFocused}
          inputValue={value}
          beforeTranslate={beforeTranslate}
          afterTranslate={afterTranslate}
          beforeMargin={beforeMargin}
          afterMargin={afterMargin}
        >
          {label}
        </StyledLabel>
      )}
      <StyledInput
        type={type}
        id={id}
        value={value}
        autocomplete="off"
        onFocus={onFocusHandler}
        onBlur={onBlurHandler}
        onChange={onChange}
        $width={width}
        $height={height}
        $borderRadius={borderRadius}
        $fontSize={fontSize}
        $fontWeight={fontWeight}
        $color={color}
        $border={border}
        $margin={margin}
        $display={display}
        $padding={padding}
        $boxShadow={boxShadow}
        {...restProps}
      />
    </>
  );
};

Input.defaultProps = {
  id: 'exInput1',
  type: 'text',
  label: 'Example',
  fontSize: 1.2,
  width: 170,
  height: 40,
  value: '',
};

Input.propTypes = {
  /** 인풋의 종류를 설정합니다. */
  type: string,
  /** 인풋의 고유한 id값을 설정합니다. */
  id: string.isRequired,
  /** 인풋의 label값을 설정합니다. */
  label: string.isRequired,
  /** 인풋의 placeholder의 기본 위치(위 아래로 이동)를 설정합니다. */
  beforeTranslate: number,
  /** 인풋의 placeholder의 움직일 위치(위 아래로 이동)를 설정합니다. */
  afterTranslate: number,
  /** 인풋의 placeholder 기본 위치(좌우로 이동) 설정 합니다. */
  beforeMargin: number,
  /** 인풋의 placeholder 움직일 위치(좌우로 이동) 설정합니다. */
  afterMargin: number,
  /** 인풋 넓이를 설정합니다. */
  width: number,
  /** 인풋 높이를 설정합니다. */
  height: number,
  /** 인풋 폰트 사이즈를 설정합니다. */
  fontSize: number,
  /** 인풋 폰트 굵기를 설정합니다. */
  fontWeight: number,
  /** 인풋 폰트색을 설정합니다. */
  color: string,
  /** 인풋 테두리를 설정합니다. */
  border: string,
  /** 인풋 테두리의 둥글기를 설정합니다. */
  borderRadius: number,
  /** 인풋의 레이블의 숨김처리를 설정합니다. */
  mode: string,
  /** 인풋의 바깥쪽 여백을 설정합니다. 단축표현을 사용하기 때문에 문자열을 전달해야 합니다. */
  margin: string,
  /** 인풋의 display속성을 설정합니다. */
  display: string,
  /** 인풋 테두리의 패딩을 설정합니다. */
  padding: string,
  /** 인풋 박스 테두리의 그림자를 설정합니다. */
  boxShadow: string,
  /** 인풋 박스 입력되는 값을 설정합니다. */
  value: string,
  /** 인풋의 변경되는 값을 감지하는 이벤트를 설정합니다. */
  onChange: func,
};

export default Input;
