import styled, { css } from 'styled-components';
import { applyStyle } from 'utils';
import { number, string, func, oneOfType } from 'prop-types';
import { useState } from 'react';
import { color } from 'utils';
import { A11yHidden } from 'components';
import { getIn } from 'formik';

const StyledLabel = styled.label.attrs(({ htmlFor }) => ({
  htmlFor,
}))`
  ${props => css`
    ${applyStyle(props)}
    display: block;
    transition: 0.4s;
    font-size: 1.2rem;
    margin-top: 15px;
    color: #7e7272;
    transform: translateY(
      ${({ focus, areaValue, beforeTranslate, afterTranslate }) =>
        focus || areaValue ? afterTranslate : beforeTranslate}rem
    );
    margin-left: ${({ focus, areaValue, beforeMargin, afterMargin }) =>
      focus || areaValue ? afterMargin : beforeMargin}px;
    color: ${color.placeholder};
    cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'initial')};
    user-select: none;
  `}
`;

const StyledTextArea = styled.textarea`
  ${props =>
    css`
      ${applyStyle(props)}
      font-size: 1.2rem;
      padding: 12px;
      box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.3);
      border-radius: 5px;
      border: 0;
      resize: none;
      &:focus {
        outline: none;
        box-shadow: ${getIn(props.errors, props.name)
          ? '0 0 0 4px rgb(255, 0, 0)'
          : '0 0 0 4px rgb(66, 139, 202)'};
      }
      &:focus:not(:focus-visible) {
        box-shadow: none;
      }
    `}
`;

const TextArea = ({
  id,
  width,
  height,
  color,
  value,
  label,
  mode,
  onChange,
  beforeTranslate,
  afterTranslate,
  beforeMargin,
  afterMargin,
  field,
  errors,
  margin,
  disabled,
  ...restProps
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const onFocusHandler = () => {
    setIsFocused(true);
  };

  const onBlurHandler = e => {
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
          areaValue={field.value}
          beforeTranslate={beforeTranslate}
          afterTranslate={afterTranslate}
          beforeMargin={beforeMargin}
          afterMargin={afterMargin}
          $disabled={disabled}
        >
          {label}
        </StyledLabel>
      )}
      <StyledTextArea
        id={id}
        $width={width}
        $height={height}
        $margin={margin}
        onFocus={onFocusHandler}
        {...field}
        onBlur={onBlurHandler}
        errors={errors}
        disabled={disabled}
        {...restProps}
      />
    </>
  );
};

TextArea.defaultProps = {
  field: {},
};

TextArea.propTypes = {
  /** TextArea와 label에 적용 할 공통의 ID를 설정합니다. */
  id: string.isRequired,
  /** TextArea 적용 할 width 크기를 설정합니다. */
  width: oneOfType([string, number]),
  /** TextArea 적용 할 가로너비를 설정합니다. */
  height: oneOfType([string, number]),
  /** TextArea 폰트색을 설정합니다. */
  color: string,
  /** TextArea 박스 입력되는 값을 설정합니다. */
  value: string,
  /** TextArea의 label값을 설정합니다. */
  label: string,
  /** TextArea의 레이블의 숨김처리를 설정합니다. */
  mode: string,
  /** TextArea의 변경되는 값을 감지하는 이벤트를 설정합니다. */
  onChange: func,
  /** TextArea의 placeholder의 기본 위치(위 아래로 이동)를 설정합니다. */
  beforeTranslate: number,
  /** TextArea의 placeholder의 움직일 위치(위 아래로 이동)를 설정합니다. */
  afterTranslate: number,
  /** TextArea의 placeholder 기본 위치(좌우로 이동) 설정 합니다. */
  beforeMargin: number,
  /** TextArea의 placeholder 움직일 위치(좌우로 이동) 설정합니다. */
  afterMargin: number,
};

export default TextArea;
