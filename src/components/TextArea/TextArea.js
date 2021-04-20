import styled from 'styled-components';
import { number, string, func } from 'prop-types';
import { useState } from 'react';
import { color } from 'utils';
import { A11yHidden } from 'components';

const StyledLabel = styled.label.attrs(({ htmlFor }) => ({
  htmlFor,
}))`
  display: block;
  transition: 0.4s;
  transform: translateY(
    ${({ focus, areaValue, beforeTranslate, afterTranslate }) =>
      focus || areaValue ? afterTranslate : beforeTranslate}rem
  );
  font-size: 2rem;
  margin-top: 15px;
  margin-left: ${({ focus, areaValue, beforeMargin, afterMargin }) =>
    focus || areaValue ? afterMargin : beforeMargin}px;
  color: ${color.placeholder};
`;

const StyledTextArea = styled.textarea`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  font-size: 2rem;
  padding: 10px 0 0 8px;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  border: 0;
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
        >
          {label}
        </StyledLabel>
      )}
      <StyledTextArea
        id={id}
        $width={width}
        $height={height}
        onFocus={onFocusHandler}
        {...field}
        onBlur={onBlurHandler}
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
  width: number.isRequired,
  /** TextArea 적용 할 height 크기를 설정합니다. */
  height: number.isRequired,
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
