import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { color } from 'utils';
import { SVGIcon } from 'components';
import { string } from 'prop-types';

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

const ChipInputSearch = ({ id }) => {
  const [chipLabels, setChipLabels] = useState([]);

  const chipInputRef = useRef(null);

  const dummyDatas = ['React', 'Javascript', 'HTML5', 'CSS3'];

  const onKeyUpHandler = e => {
    if (e.key !== 'Enter') return;
    if (e.target.value !== '' && dummyDatas.includes(e.target.value)) {
      setChipLabels([...chipLabels, e.target.value]);
      e.target.value = '';
    }
  };

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

ChipInputSearch.propTypes = {
  /** Data list의 고유한 id값을 정해줍니다. */
  id: string.isRequired,
};

export default ChipInputSearch;
