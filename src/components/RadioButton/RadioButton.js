import styled, { css } from 'styled-components';
import { string, bool, number, func } from 'prop-types';
import { color } from 'utils';

const RadioInput = styled.input`
  display: none;
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

const RadioLabel = styled.label`
  ${({ $fontSize, $fontWeight, $color }) => css`
    font-size: ${$fontSize}rem;
    font-weight: ${$fontWeight};
    color: ${$color};
  `}
  display: inline-block;
  position: relative;
  line-height: 16px;
  padding-left: 30px;
  cursor: pointer;
  &:before {
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
`;

const RadioButton = ({
  name,
  id,
  value,
  label,
  checked,
  onChange,
  fontSize,
  fontWeight,
  color,
}) => {
  return (
    <>
      <RadioInput
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <RadioLabel htmlFor={id} $fontSize={fontSize} $fontWeight={fontWeight} $color={color}>
        {label}
      </RadioLabel>
    </>
  );
};

RadioButton.defaultProps = {
  checked: false,
  fontSize: 1.2,
  fontWeight: '700',
  color: '#666',
};

RadioButton.propTypes = {
  /** 라디오버튼의 이름을 설정합니다. */
  name: string.isRequired,
  /** 라디오버튼의 고유한 id값을 설정합니다. */
  id: string.isRequired,
  /** 라디오버튼의 값을 설정합니다. */
  value: string.isRequired,
  /** 라디오버튼의 체크여부를 설정합니다. */
  checked: bool.isRequired,
  /** 라디오버튼의 설명을 설정합니다. */
  label: string,
  /** 라디오버튼의 레이블의 폰트 크기를 설정합니다. */
  fontSize: number,
  /** 라디오버튼의 레이블의 폰트 두께를 설정합니다. */
  fontWeight: string,
  /** 라디오버튼의 레이블의 폰트 색상을 설정합니다. */
  color: string,
  /** 라디오버튼의 체크버튼이 변경되는 이벤트를 설정합니다. */
  onChange: func,
};

export default RadioButton;
