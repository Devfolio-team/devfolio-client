import React, { useState, useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import { color } from 'utils';
import { SVGIcon, Button, Paragraph, Portal } from 'components';
import { string, func } from 'prop-types';
import { Field } from 'formik';
import ajax from 'apis/ajax';
import { useSelector } from 'react-redux';
import { NewTechStackModalDialog } from 'containers';

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
  float: left;
  max-height: 150px;
  border: 1px solid #eaeaea;
  border-radius: 5px;
  background: ${color.white};
  overflow: scroll;
  margin-top: 5px;
  font-size: 1.3rem;
  font-weight: 600;
  ${({ display }) => css`
    display: ${display};
  `}
`;

const ChipDataListItem = styled.li`
  padding: 7px 8px 7px 12px;
  border-bottom: 1px solid #eaeaea;
  &:last-child {
    border: none;
  }
  &:hover {
    background: ${color.mainColor};
    color: ${color.white};
  }
  ${({ isSelected }) =>
    isSelected &&
    css`
      background: ${color.mainColor};
      color: ${color.white};
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
  const [isIncluded, setIsIncluded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const ref = useRef(null);
  const beforeRef = useRef(null);
  const chipRef = useRef();
  const liRef = useRef();
  const ulRef = useRef();
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

  const onKeyDownHandler = e => {
    const liHeight = 28;
    const { scrollTop } = ulRef.current;
    const viewport = scrollTop + ulRef.current.offsetHeight;
    const liOffset = liHeight * (activeTechStack + 1);
    if (liOffset + liHeight > viewport) ulRef.current.scrollTop = liOffset;
    else if (liOffset - liHeight < scrollTop) ulRef.current.scrollTop = liOffset - liHeight * 2;

    if (e.key === 'Enter') {
      if (!chipLabels.includes(techStacks[activeTechStack].stack_name)) {
        setChipLabels([...chipLabels, techStacks[activeTechStack].stack_name]);
        e.target.value = '';
        setDisplayList('none');
        setActiveTechStack(0);
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

  const onBlurHandler = e => {
    chipRef.current.style.boxShadow = 'none';
    e.target.value = '';
  };

  const onClickAddHandler = e => {
    const { innerText } = e.target;
    if (!chipLabels.includes(innerText)) {
      setChipLabels([...chipLabels, innerText]);
      e.target.parentNode.previousElementSibling.lastElementChild.value = '';
      setDisplayList('none');
    }
  };

  const onModalOpenHandler = () => {
    setIsModalOpen(true);
  };

  return (
    <>
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
          onKeyDown={onKeyDownHandler}
          component={ChipInput}
          placeholder="검색..."
          list={id}
          mode="hidden"
          onChange={e => {
            setIsIncluded(false);
            const filteredTechStacks = originalTechStacks;
            if (e.target.value) {
              setDisplayList('block');
            } else {
              setDisplayList('none');
            }

            if (
              !filteredTechStacks.find(
                ({ stack_name }) =>
                  stack_name.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1
              )
            )
              setIsIncluded(true);

            setTechStacks(
              filteredTechStacks.filter(
                ({ stack_name }) =>
                  stack_name.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1
              )
            );

            setFieldValue('techStacks', chipLabels);
            setActiveTechStack(0);
          }}
          onFocus={onFocusHandler}
          onBlur={onBlurHandler}
        />
      </ChipContainer>
      <ChipDataList display={displayList} ref={ulRef}>
        {isIncluded ? (
          <>
            <Paragraph padding="12px 12px" lineHeight={20} color={color.lightGray}>
              해당하는 스택이 없습니다. 기술은 영어로만 검색해 주세요.
            </Paragraph>
            <Button
              margin="0 0 12px 12px"
              color={color.white}
              background={color.mainColor}
              border={`1px solid ${color.mainColor}`}
              fontWeight={700}
              hoverColor={color.mainColor}
              hoverBackground={color.white}
              width="180px"
              onClick={onModalOpenHandler}
              ref={beforeRef}
            >
              새로운 스택 등록 요청
            </Button>
          </>
        ) : (
          techStacks.map(({ stack_name, tech_stacks_id }, index) => (
            <ChipDataListItem
              key={tech_stacks_id}
              onClick={onClickAddHandler}
              isSelected={activeTechStack === index}
              ref={liRef}
            >
              {stack_name}
            </ChipDataListItem>
          ))
        )}
      </ChipDataList>
      {isModalOpen && (
        <Portal id="modal-root">
          <NewTechStackModalDialog
            ref={ref}
            beforeRef={beforeRef}
            setIsModalOpen={setIsModalOpen}
            isModalOpen={isModalOpen}
          />
        </Portal>
      )}
    </>
  );
};

ChipInputSearch.propTypes = {
  /** Data list의 고유한 id값을 정해줍니다. */
  id: string.isRequired,
  /** ChipInputSearch의 인풋의 값을 formik의 values로 설정해주는 함수입니다. */
  setFieldValue: func,
};

export default ChipInputSearch;
