import React, { useRef } from 'react';
import styled from 'styled-components';
import { color } from 'utils';
import { SVGIcon } from 'components';
import { string, func, array } from 'prop-types';

const ChipContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  width: 600px;
  border: 1px solid #eaeaea;
  min-height: 40px;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
`;

const ChipItems = styled.div`
  display: inline-flex;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-right: 6px;
  padding-left: 6px;
  margin: 8px;
  border-radius: 5px;
  align-items: center;
  background: ${color.mainColor};
`;

const ChipLabel = styled.span`
  margin-right: 5px;
  font-size: 1.2rem;
  font-weight: 700;
  color: ${color.white};
`;

const ChipDataList = styled.datalist``;

const ChipDataListOption = styled.option``;

const XIcon = styled(SVGIcon)`
  cursor: pointer;
  &:hover {
    path {
      fill: #bae6ff;
    }
  }
`;

const ChipInput = styled.input`
  width: 150px;
  background: transparent;
  color: currentColor;
  padding-top: 7px;
  padding-bottom: 7px;
  padding-right: 8px;
  padding-left: 12px;
  border: none;
  outline: none;
  max-width: 100%;
  vertical-align: bottom;
  text-align: inherit;
  &::-webkit-calendar-picker-indicator {
    display: none;
  }
`;

const ChipInputSearch = ({ id, chipLabels, onKeyUpHandler, value, onChange }) => {
  // 후에 container에서 받아올 배열
  // const [chipLabels, setChipLabels] = useState([]);

  const chipInputRef = useRef(null);

  // 후에 데이터베이스에서 받아올 데이터들
  const dummyDatas = ['React', 'Javascript', 'HTML5', 'CSS3'];

  // 후에 container에서 받아올 핸들러
  // const onKeyUpHandler = e => {
  //   if (e.key !== 'Enter') return;
  //   if (e.target.value !== '' && dummyDatas.includes(e.target.value)) {
  //     setChipLabels([...chipLabels, e.target.value]);
  //     e.target.value = '';
  //   }
  // };

  const onClikcFocusHandler = e => {
    chipInputRef.current.focus();
  };

  const onClickRemoveHandler = e => {
    e.target.parentNode.remove();
  };

  return (
    <ChipContainer onClick={onClikcFocusHandler}>
      {chipLabels.map(chipLabel => (
        <ChipItems>
          <ChipLabel>{chipLabel}</ChipLabel>
          <XIcon type="X" onClick={onClickRemoveHandler} />
        </ChipItems>
      ))}
      <ChipInput
        value={value}
        onChange={onChange}
        ref={chipInputRef}
        placeholder="검색..."
        list={id}
        type="text"
        onKeyUp={onKeyUpHandler}
      />
      <ChipDataList id={id}>
        {dummyDatas.map(dummyData => (
          <ChipDataListOption value={dummyData}></ChipDataListOption>
        ))}
      </ChipDataList>
    </ChipContainer>
  );
};

ChipInputSearch.defaultProps = {
  id: 'exId1',
  chipLabels: [],
  value: '',
};

ChipInputSearch.propTypes = {
  /** Data list의 고유한 id값을 정해줍니다. */
  id: string.isRequired,
  /** Chip Item(말풍선 태그)안에 들어갈 text를 가지고있는 배열입니다. */
  chipLabels: array,
  /** 키보드로 입력된 키를 핸들링 하는 이벤트 핸들러 입니다. */
  onKeyUpHandler: func,
  /** 인풋 박스에 입력되는 값을 설정합니다. */
  value: string,
  /** 인풋의 변경되는 값을 감지하는 이벤트를 설정합니다. */
  onChange: func,
};

export default ChipInputSearch;
