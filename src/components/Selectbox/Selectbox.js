import styled from 'styled-components';
import { string } from 'prop-types';
import { color } from 'utils';

const StyledSelectbox = styled.select.attrs(({ id, name }) => ({
  id,
  name,
}))`
  width: 65px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid ${color.lightGray};
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.1);
  background: ${color.white};
  margin-left: 15px;
`;

const Selectbox = ({ id, name, label, ...restProps }) => {
  const optArray = Array.from({ length: 10 }, (_, i) => i + 1);
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <StyledSelectbox name={name} id={id} {...restProps}>
        <option value="">인원 수</option>
        {optArray.map(optNum => (
          <option value={optNum}>{optNum + '명'}</option>
        ))}
      </StyledSelectbox>
    </>
  );
};

Selectbox.propTypes = {
  /** 셀렉트 박스의 고유한 id값을 설정합니다. */
  id: string.isRequired,
  /** 셀렉트 박스의 이름을 설정합니다. */
  name: string.isRequired,
  /** 셀렉트 박스의 레이블을 설정합니다. */
  label: string,
};

export default Selectbox;
