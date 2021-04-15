import styled from 'styled-components';
import { number, string } from 'prop-types';
import { useState } from 'react';

const Styledlabel = styled.label.attrs(({ htmlFor }) => ({
  htmlFor,
}))`
  display: block;
  transition: 0.4s;
  transform: translateY(${({ focus, areaValue }) => (focus || areaValue ? -0.5 : 3.5)}rem);
  font-size: 2rem;
  margin-top: 15px;
  margin-left: ${({ focus, areaValue }) => (focus || areaValue ? 0 : 15)}px;
  color: #7e7272;
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

const TextArea = ({ id, width, height, color, ...restProps }) => {
  const [focus, setFocus] = useState(false);
  const [areaValue, setAreaValue] = useState('');

  const onFocusHandler = () => {
    setFocus(true);
  };

  const onBlurHandler = e => {
    setFocus(false);
    if (areaValue !== '' && focus === false) setAreaValue(true);
  };

  const onChangeHandler = e => {
    setAreaValue(e.target.value);
  };
  return (
    <>
      <Styledlabel for={id} focus={focus} areaValue={areaValue}>
        간단한 자기소개
      </Styledlabel>
      <StyledTextArea
        id={id}
        $width={width}
        $height={height}
        {...restProps}
        onFocus={onFocusHandler}
        onBlur={onBlurHandler}
        onChange={onChangeHandler}
        value={areaValue}
      />
    </>
  );
};

TextArea.propTypes = {
  /** TextArea 적용 할 width 크기를 설정합니다. */
  width: number.isRequired,
  /** TextArea 적용 할 height 크기를 설정합니다. */
  height: number.isRequired,
  /** TextArea와 label에 적용 할 공통의 ID를 설정합니다. */
  id: string.isRequired,
};

export default TextArea;
