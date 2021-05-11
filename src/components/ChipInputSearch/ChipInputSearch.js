import React, { useState, useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import { color } from 'utils';
import { SVGIcon } from 'components';
import { string, func } from 'prop-types';
import { Field } from 'formik';
import ajax from 'apis/ajax';
import { useSelector } from 'react-redux';

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
  text-align: left;
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

const ChipDataList = styled.ul`
  display: none;
  width: 100%;
  ${({ display }) => css`
    display: ${display};
  `}
`;

const ChipDataListItem = styled.li`
  &:hover {
    background: blue;
  }
  ${({ isSelected }) =>
    isSelected &&
    css`
      background: blue;
    `}
`;

const XIcon = styled(SVGIcon)`
  cursor: pointer;
  &:hover {
    path {
      fill: #bae6ff;
    }
  }
`;

const ChipInput = styled.input`
  width: 100%;
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

const ChipInputSearch = ({ id, setFieldValue, profile, editTechStacks }) => {
  const [chipLabels, setChipLabels] = useState([]);
  const [techStacks, setTechStacks] = useState([]);
  const [displayList, setDisplayList] = useState([]);
  const [originalTechStacks, setOriginalTechStacks] = useState([]);
  const [activeTechStack, setActiveTechStack] = useState(0);
  const chipRef = useRef();
  const authState = useSelector(state => state.auth);

  useEffect(() => {
    setFieldValue('techStacks', chipLabels);
  }, [setFieldValue, chipLabels]);

  useEffect(() => {
    const fetchTechStacks = async () => {
      try {
        const res = await ajax.fetchTechStacks();
        setTechStacks(res.data.techStacks);
        setOriginalTechStacks(res.data.techStacks);
      } catch (error) {
        throw new Error(error);
      }
    };

    fetchTechStacks();
  }, []);

  useEffect(() => {
    if (profile)
      setChipLabels(authState.currentUser?.currentUsersSkills.map(skill => skill.skill_name));
    if (editTechStacks) setChipLabels(editTechStacks.map(stack => stack.tech_name));
  }, [authState.currentUser?.currentUsersSkills, editTechStacks, profile]);

  const onKeyUpHandler = e => {
    if (e.key === 'Enter') {
      if (!chipLabels.includes(techStacks[activeTechStack].stack_name)) {
        setChipLabels([...chipLabels, techStacks[activeTechStack].stack_name]);
        e.target.value = '';
        setDisplayList('none');
      }
    } else if (e.key === 'ArrowUp') {
      if (activeTechStack === 0) return;
      setActiveTechStack(activeTechStack - 1);
    } else if (e.key === 'ArrowDown') {
      if (activeTechStack + 1 === techStacks.length) return;
      setActiveTechStack(activeTechStack + 1);
    }
  };

  const onClickRemoveHandler = e => {
    const chipLabelText = e.target.parentNode.firstChild.innerHTML;
    setChipLabels(chipLabels.filter(chipLabel => chipLabel !== chipLabelText));
    setDisplayList('none');
  };

  const onFocusHandler = () => {
    chipRef.current.style.boxShadow = '0 0 0 4px rgb(66, 139, 202)';
  };

  const onBlurHandler = () => {
    chipRef.current.style.boxShadow = 'none';
  };

  const onClickAddHandler = e => {
    const { innerText } = e.target;
    if (!chipLabels.includes(innerText)) {
      setChipLabels([...chipLabels, innerText]);
      e.target.parentNode.previousElementSibling.value = '';
      setDisplayList('none');
    }
  };

  return (
    <ChipContainer ref={chipRef}>
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
        autoComplete="off"
        onKeyUp={onKeyUpHandler}
        component={ChipInput}
        placeholder="검색..."
        list={id}
        mode="hidden"
        onChange={e => {
          const filteredTechStacks = originalTechStacks;
          if (e.target.value) {
            setDisplayList('block');
          } else {
            setDisplayList('none');
          }

          setTechStacks(
            filteredTechStacks.filter(
              ({ stack_name }) =>
                stack_name.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1
            )
          );

          setFieldValue('techStacks', chipLabels);
        }}
        onFocus={onFocusHandler}
        onBlur={onBlurHandler}
      />
      <ChipDataList display={displayList}>
        {techStacks.map(({ stack_name, tech_stacks_id }, index) => (
          <ChipDataListItem
            key={tech_stacks_id}
            onClick={onClickAddHandler}
            isSelected={activeTechStack === index}
          >
            {stack_name}
          </ChipDataListItem>
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
