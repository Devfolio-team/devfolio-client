import styled from 'styled-components';
import { string, bool, element } from 'prop-types';
import { color } from 'utils';

const RadioInput = styled.input.attrs(({ name, id, value, checked }) => ({
  type: 'radio',
  name,
  id,
  value,
  checked,
}))`
  display: none;
  & + label {
    display: inline-block;
    position: relative;
    line-height: 16px;
    padding-left: 30px;
    font-size: 1.2rem;
    color: #666;
    font-weight: 700;
    cursor: pointer;
  }
  & + label:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 18px;
    height: 18px;
    border: 1px solid ${color.lightGray};
    background: #fff;
    border-radius: 50%;
  }
  &:checked + label:after {
    content: '';
    position: absolute;
    top: 3px;
    left: 3px;
    width: 12px;
    height: 12px;
    background: ${color.mainColor};
    border-radius: 50%;
  }
`;

const RadioButton = ({ name, id, value, children, checked }) => {
  return (
    <div>
      <RadioInput name={name} id={id} value={value} checked={checked} />
      <label htmlFor={id}>{children}</label>
    </div>
  );
};

RadioButton.propTypes = {
  /** 라디오버튼의 이름을 설정합니다. */
  name: string.isRequired,
  /** 라디오버튼의 고유한 id값을 설정합니다. */
  id: string.isRequired,
  /** 라디오버튼의 값을 설정합니다. */
  value: string.isRequired,
  /** 라디오버튼의 체크여부를 설정합니다. */
  checked: bool,
  /** 라디오버튼의 설명을 설정합니다. */
  children: element,
};

export default RadioButton;
