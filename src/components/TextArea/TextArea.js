import styled, { css } from 'styled-components';
import { number, string } from 'prop-types';
import { useState } from 'react';
import { applyStyle } from 'utils';

const Styledlabel = styled.label.attrs(({ htmlFor }) => ({
  htmlFor,
}))`
  ${props => css`
    ${applyStyle(props)}
    display: block;
    transition: 0.4s;
    font-size: 2rem;
    margin-top: 15px;
    color: #7e7272;
  `}
`;

const StyledTextArea = styled.textarea`
  ${props =>
    css`
      ${applyStyle(props)}
      font-size: 2rem;
      padding: 10px 0 0 8px;
      box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      border: 0;
    `}
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
      <Styledlabel
        for={id}
        focus={focus}
        areaValue={areaValue}
        $transform={`translate3d(0, ${focus || areaValue ? -0.5 : 3.5}rem, 0)`}
        $marginLeft={`${focus || areaValue ? 0 : 15}px`}
      >
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
  /** TextArea 적용 할 세로높이를 설정합니다. */
  width: number.isRequired,
  /** TextArea 적용 할 가로너비를 설정합니다. */
  height: number.isRequired,
  /** TextArea와 label에 적용 할 공통의 ID를 설정합니다. */
  id: string.isRequired,
  /** label이 focus를 받았을 때 이동 할 위치를 설정합니다. */
  transform: number,
  /** label이 focus를 받았을 때 왼쪽여백의 크기를 설정합니다. */
  marginLeft: number,
};

export default TextArea;
