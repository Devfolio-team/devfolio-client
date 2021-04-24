import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { color } from 'utils';
import { SVGIcon, Input } from 'components';
import { string, func } from 'prop-types';
import { Field } from 'formik';
import ajax from 'apis/ajax';

const ChipContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  border: 1px solid #eaeaea;
  min-height: 40px;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  background: ${color.white};
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

const ChipInput = styled(Input)`
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
  &:focus {
    outline: none;
    box-shadow: 0 0 0 4px rgb(66, 139, 202);
  }
  &:focus:not(:focus-visible) {
    box-shadow: none;
  }
`;

const ChipInputSearch = ({ id, setFieldValue }) => {
  const [chipLabels, setChipLabels] = useState([]);
  const [techStacks, setTechStacks] = useState([]);
  const inputRef = useRef();

  useEffect(() => {
    setFieldValue('techStacks', chipLabels);
  }, [setFieldValue, chipLabels]);

  useEffect(() => {
    const fetchTechStacks = async () => {
      try {
        const res = await ajax.fetchTechStacks();
        setTechStacks(res.data.techStacks);
      } catch (error) {
        throw new Error(error);
      }
    };

    fetchTechStacks();
  }, []);

  const onKeyUpHandler = e => {
    if (e.key !== 'Enter') return;

    const techStack = techStacks.filter(({ stack_name }) => {
      return stack_name === e.target.value;
    });

    if (e.target.value !== '' && techStack.length && !chipLabels.includes(e.target.value)) {
      setChipLabels([...chipLabels, e.target.value]);
      e.target.value = '';
    }
  };

  const onClickRemoveHandler = e => {
    const chipLabelText = e.target.parentNode.firstChild.innerHTML;
    setChipLabels(chipLabels.filter(chipLabel => chipLabel !== chipLabelText));
  };

  const onClickFocusHandler = e => {
    inputRef.current.focus();
  };

  return (
    <ChipContainer onClick={onClickFocusHandler}>
      {chipLabels.map((chipLabel, index) => (
        <ChipItems key={index}>
          <ChipLabel>{chipLabel}</ChipLabel>
          <XIcon type="X" onClick={onClickRemoveHandler} width="10" height="10" />
        </ChipItems>
      ))}
      <Field
        type="text"
        name="techStacks"
        id="techStacks"
        label="기술 스택 작성칸"
        innerRef={inputRef}
        autoComplete="off"
        onKeyUp={onKeyUpHandler}
        component={ChipInput}
        placeholder="검색..."
        list={id}
        mode="hidden"
        // onChange={e => {
        //   console.log('heeloo');
        //   handleChange(e.target.value);
        // e.target.value = '';
        //   setFieldValue('techStacks', chipLabels);
        // }}
      />
      <ChipDataList id={id}>
        {techStacks.map(({ stack_name, tech_stacks_id }) => (
          <ChipDataListOption key={tech_stacks_id} value={stack_name}></ChipDataListOption>
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
