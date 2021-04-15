import React, { useState } from 'react';
import styled from 'styled-components';

const ChipContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  width: 400px;
  border: 1px solid red;
`;

const ChipItems = styled.div`
  display: inline-flex;
  padding-top: 7px;
  padding-bottom: 7px;
  padding-right: 8px;
  padding-left: 12px;
  border: solid 1px #ccc;
  margin-right: 5px;
  border-radius: 10px;
`;

const ChipLabel = styled.span`
  margin-right: 5px;
`;

const ChipDropdown = styled.div``;

const ChipDropdownMenu = styled.div``;

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
`;

const ChipInputSearch = () => {
  const [chipLabels, setChipLabels] = useState([]);

  const dummyDatas = ['React', 'Javascript', 'HTML5', 'CSS3'];

  const onKeyUpHandler = e => {
    if (e.key !== 'Enter') return;
    if (e.target.value !== '') setChipLabels([...chipLabels, e.target.value]);
    e.target.value = '';
  };

  const onClickHandler = e => {
    console.log(e.target.parentNode);
    e.target.parentNode.remove();
  };

  return (
    <ChipContainer>
      {chipLabels.map(chipLabel => (
        <ChipItems>
          <ChipLabel onClick={onClickHandler}>{chipLabel}</ChipLabel>
          {'x'}
        </ChipItems>
      ))}
      <ChipDropdown>
        <ChipInput type="text" onKeyUp={onKeyUpHandler} />
        {dummyDatas.map(dummyData => (
          <ChipDropdownMenu>{dummyData}</ChipDropdownMenu>
        ))}
      </ChipDropdown>
    </ChipContainer>
  );
};

export default ChipInputSearch;
