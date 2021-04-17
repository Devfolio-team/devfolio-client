import styled, { css } from 'styled-components';
import { string, number, func } from 'prop-types';
import { color, applyStyle } from 'utils';

const StyledSelectbox = styled.select`
  width: 65px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid ${color.lightGray};
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.1);
  background: ${color.white};
  margin-right: 15px;
`;

const StyledLabel = styled.label`
  ${props => css`
    ${applyStyle(props)}
  `}
`;

const Selectbox = ({
  id,
  name,
  label,
  value,
  onChange,
  fontSize,
  fontWeight,
  color,
  ...restProps
}) => {
  const optArray = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <>
      <StyledSelectbox name={name} id={id} value={value} onChange={onChange} {...restProps}>
        <option value="">인원 수</option>
        {optArray.map((optNum, index) => (
          <option value={optNum} key={index}>
            {optNum + '명'}
          </option>
        ))}
      </StyledSelectbox>
      <StyledLabel htmlFor={id} $fontSize={fontSize} $fontWeight={fontWeight} $color={color}>
        {label}
      </StyledLabel>
    </>
  );
};

Selectbox.defaultProps = {
  label: 'Example',
  id: 'exSelectbox1',
  name: 'exSelectbox',
};

Selectbox.propTypes = {
  /** 셀렉트 박스의 고유한 id값을 설정합니다. */
  id: string.isRequired,
  /** 셀렉트 박스의 이름을 설정합니다. */
  name: string.isRequired,
  /** 셀렉트 박스의 레이블을 설정합니다. */
  label: string,
  /** 셀렉트 박스의 선택된 값을 설정합니다. */
  value: number,
  /** 셀렉트 박스의 변경되는 값을 감지하는 이벤트를 설정합니다. */
  onChange: func,
  /** 셀렉트 박스의 레이블의 폰트 크기를 설정합니다. */
  fontSize: number,
  /** 셀렉트 박스의 레이블의 폰트 두께를 설정합니다. */
  fontWeight: string,
  /** 셀렉트 박스의 레이블의 폰트 색상을 설정합니다. */
  color: string,
};

export default Selectbox;
