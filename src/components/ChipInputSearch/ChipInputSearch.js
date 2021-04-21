import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { color } from 'utils';
import { SVGIcon } from 'components';
import { string, func } from 'prop-types';
import { Field } from 'formik';

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

const ChipInputSearch = ({ id, setFieldValue }) => {
  const [chipLabels, setChipLabels] = useState([]);
  const dummyDatas = ['React', 'Javascript', 'HTML5', 'CSS3'];

  useEffect(() => {
    setFieldValue('techStacks', chipLabels);
  }, [setFieldValue, chipLabels]);

  const onKeyUpHandler = e => {
    if (e.key !== 'Enter') return;
    if (
      e.target.value !== '' &&
      dummyDatas.includes(e.target.value) &&
      !chipLabels.includes(e.target.value)
    ) {
      setChipLabels([...chipLabels, e.target.value]);
      e.target.value = '';
    }
  };

  const onClickRemoveHandler = e => {
    const chipLabelText = e.target.parentNode.firstChild.innerHTML;
    setChipLabels(chipLabels.filter(chipLabel => chipLabel !== chipLabelText));
  };

  return (
    <ChipContainer>
      {chipLabels.map((chipLabel, index) => (
        <ChipItems key={index}>
          <ChipLabel>{chipLabel}</ChipLabel>
          <XIcon type="X" onClick={onClickRemoveHandler} />
        </ChipItems>
      ))}
      <Field
        type="text"
        name="techStacks"
        id="techStacks"
        onKeyUp={onKeyUpHandler}
        component={ChipInput}
        placeholder="검색..."
        list={id}
        mode="hidden"
        onChange={() => {
          setFieldValue('techStacks', chipLabels);
        }}
      />
      <ChipDataList id={id}>
        {/* index대신에 데이터베이스에서 데이터 가지고 오면 id값으로 key값 세팅해주기 */}
        {dummyDatas.map((dummyData, index) => (
          <ChipDataListOption key={index} value={dummyData}></ChipDataListOption>
        ))}
      </ChipDataList>
    </ChipContainer>
  );
};

ChipInputSearch.defaultProps = {
  id: 'exId1',
};

ChipInputSearch.propTypes = {
  /** Data list의 고유한 id값을 정해줍니다. */
  id: string.isRequired,
  /** ChipInputSearch의 인풋의 값을 formik의 values로 설정해주는 함수입니다. */
  setFieldValue: func,
};

export default ChipInputSearch;
