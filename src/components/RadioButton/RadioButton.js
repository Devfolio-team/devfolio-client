import styled, { css } from 'styled-components';
import { string, object, number } from 'prop-types';
import { color, applyStyle } from 'utils';

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
  ${props => css`
    ${applyStyle(props)}
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

const RadioButton = ({ id, label, fontSize, fontWeight, color, margin, field }) => {
  return (
    <>
      <RadioInput type="radio" id={id} {...field} />
      <RadioLabel
        htmlFor={id}
        $fontSize={fontSize}
        $fontWeight={fontWeight}
        $color={color}
        $margin={margin}
      >
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
  /** 라디오버튼의 고유한 id값을 설정합니다. */
  id: string.isRequired,
  /** 라디오버튼의 설명을 설정합니다. */
  label: string,
  /** 라디오버튼의 레이블의 폰트 크기를 설정합니다. */
  fontSize: number,
  /** 라디오버튼의 레이블의 폰트 두께를 설정합니다. */
  fontWeight: string,
  /** 라디오버튼의 레이블의 폰트 색상을 설정합니다. */
  color: string,
  /** 라디오버튼의 바깥쪽 여백을 설정합니다. 단축표현을 사용하기 때문에 문자열을 전달해야 합니다. */
  margin: string,
  /** formik이 제공하는 onBlur, onChange, name, value 값을 갖고 있는 객체입니다. */
  field: object,
};

export default RadioButton;
