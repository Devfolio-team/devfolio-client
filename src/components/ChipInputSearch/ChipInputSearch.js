import React, { useState, useEffect, useRef, useReducer, useCallback } from 'react';
import styled, { css } from 'styled-components';
import { color } from 'utils';
import { SVGIcon, Button, Paragraph, Portal, Container } from 'components';
import { string, func } from 'prop-types';
import { Field } from 'formik';
import ajax from 'apis/ajax';
import { useSelector } from 'react-redux';
import { NewTechStackModalDialog, ConfirmModalDialog } from 'containers';

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
  width: 100%;
  max-height: 150px;
  border: 1px solid #eaeaea;
  border-radius: 5px;
  background: ${color.white};
  overflow: scroll;
  margin-top: 5px;
  font-size: 1.3rem;
  font-weight: 600;
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

const NewStackContainer = styled.div`
  max-height: 150px;
  border: 1px solid #eaeaea;
  border-radius: 5px;
  background: ${color.white};
  margin-top: 5px;
  font-size: 1.3rem;
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

const initialState = {
  chipLabels: [],
  originalTechStacks: [],
  techStacks: [],
  activeTechStack: 0,
  hasInputValue: false,
  isIncluded: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOAD_PORTFOLIO_CHIPLABELS':
      return {
        ...state,
        chipLabels: action.payload.map(skill => skill.skill_name),
      };
    case 'LOAD_PROJECT_CHIPLABELS':
      return {
        ...state,
        chipLabels: action.payload.map(stack => stack.tech_name),
      };
    case 'ADD_CHIPLABELS':
      return {
        ...state,
        chipLabels: [...state.chipLabels, action.payload],
      };
    case 'REMOVE_CHIPLABELS':
      return {
        ...state,
        chipLabels: state.chipLabels.filter(chipLabel => chipLabel !== action.payload),
      };
    case 'TOGGLE_SEARCH_BAR_BOX':
      return {
        ...state,
        hasInputValue: action.payload,
      };
    case 'SHOW_TECHLIST_OR_NEWTECH':
      return {
        ...state,
        isIncluded: action.payload,
      };
    case 'SET_DEFAULT_TECH_STACKS':
      return {
        ...state,
        originalTechStacks: action.payload,
      };
    case 'SET_FILTERED_TECH_STACKS':
      return {
        ...state,
        techStacks: action.payload,
      };
    case 'SET_ACTIVE_TECH_STACK_INDEX':
      return {
        ...state,
        activeTechStack: action.payload,
      };
    default:
      return state;
  }
};

const ChipInputSearch = ({ id, setFieldValue, profile, editTechStacks }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    chipLabels,
    hasInputValue,
    isIncluded,
    originalTechStacks,
    techStacks,
    activeTechStack,
  } = state;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

  const chipRef = useRef();
  const beforeRef = useRef(null);
  const ulRef = useRef();
  const authState = useSelector(state => state.auth);

  useEffect(() => {
    setFieldValue('techStacks', chipLabels);
  }, [setFieldValue, chipLabels]);

  useEffect(() => {
    const fetchTechStacks = async () => {
      try {
        const res = await ajax.fetchTechStacks();

        dispatch({ type: 'SET_DEFAULT_TECH_STACKS', payload: res.data.techStacks });
      } catch (error) {
        throw new Error(error);
      }
    };

    fetchTechStacks();
  }, []);

  useEffect(() => {
    if (profile) {
      dispatch({
        type: 'LOAD_PORTFOLIO_CHIPLABELS',
        payload: authState.currentUser?.currentUsersSkills,
      });
    }
    if (editTechStacks) dispatch({ type: 'LOAD_PROJECT_CHIPLABELS', payload: editTechStacks });
  }, [authState.currentUser?.currentUsersSkills, dispatch, editTechStacks, profile]);

  const onEnterInputHandler = useCallback(
    e => {
      if (e.key === 'Enter') {
        if (!chipLabels.includes(techStacks[activeTechStack].stack_name)) {
          dispatch({
            type: 'ADD_CHIPLABELS',
            payload: techStacks[activeTechStack].stack_name,
          });
          e.target.value = '';
          dispatch({ type: 'TOGGLE_SEARCH_BAR_BOX', payload: false });
          dispatch({ type: 'SET_ACTIVE_TECH_STACK_INDEX', payload: 0 });
        }
      }
    },
    [activeTechStack, chipLabels, techStacks]
  );

  const onChipDataListMoveHandler = useCallback(
    e => {
      if (!hasInputValue || !isIncluded) return;

      const liHeight = 28;
      const { scrollTop } = ulRef.current;
      const viewport = scrollTop + ulRef.current.offsetHeight;
      const liOffset = liHeight * (activeTechStack + 1);

      if (liOffset + liHeight > viewport) ulRef.current.scrollTop = liOffset;
      else if (liOffset - liHeight < scrollTop) ulRef.current.scrollTop = liOffset - liHeight * 2;

      if (e.key === 'ArrowUp') {
        if (activeTechStack === 0) return;
        dispatch({ type: 'SET_ACTIVE_TECH_STACK_INDEX', payload: activeTechStack - 1 });
      } else if (e.key === 'ArrowDown') {
        if (activeTechStack + 1 === techStacks.length) return;
        dispatch({ type: 'SET_ACTIVE_TECH_STACK_INDEX', payload: activeTechStack + 1 });
      }
    },
    [activeTechStack, hasInputValue, isIncluded, techStacks.length]
  );

  const onClickRemoveHandler = useCallback(e => {
    const chipLabelText = e.target.parentNode.firstChild.innerHTML;
    dispatch({ type: 'REMOVE_CHIPLABELS', payload: chipLabelText });
    dispatch({ type: 'TOGGLE_SEARCH_BAR_BOX', payload: false });
  }, []);

  const onFocusHandler = useCallback(() => {
    chipRef.current.style.boxShadow = '0 0 0 4px rgb(66, 139, 202)';
  }, []);

  const onBlurHandler = useCallback(e => {
    chipRef.current.style.boxShadow = 'none';
    e.target.value = '';
  }, []);

  const onClickAddHandler = useCallback(
    e => {
      const { innerText } = e.target;
      if (!chipLabels.includes(innerText)) {
        dispatch({ type: 'ADD_CHIPLABELS', payload: innerText });
        e.target.parentNode.previousElementSibling.lastElementChild.value = '';
        dispatch({ type: 'TOGGLE_SEARCH_BAR_BOX', payload: false });
      }
    },
    [chipLabels]
  );

  const onModalOpenHandler = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  return (
    <Container onKeyDown={onChipDataListMoveHandler}>
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
          onKeyDown={onEnterInputHandler}
          component={ChipInput}
          placeholder="검색..."
          list={id}
          mode="hidden"
          onChange={e => {
            const filteredTechStack = originalTechStacks.find(
              ({ stack_name }) =>
                stack_name.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1
            );

            dispatch({ type: 'TOGGLE_SEARCH_BAR_BOX', payload: e.target.value ? true : false });
            dispatch({
              type: 'SHOW_TECHLIST_OR_NEWTECH',
              payload: filteredTechStack ? true : false,
            });
            dispatch({
              type: 'SET_FILTERED_TECH_STACKS',
              payload: originalTechStacks.filter(
                ({ stack_name }) =>
                  stack_name.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1
              ),
            });

            setFieldValue('techStacks', chipLabels);
            dispatch({ type: 'SET_ACTIVE_TECH_STACK_INDEX', payload: 0 });
          }}
          onFocus={onFocusHandler}
          onBlur={onBlurHandler}
        />
      </ChipContainer>
      {hasInputValue &&
        (isIncluded ? (
          <ChipDataList ref={ulRef}>
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
        ) : (
          <NewStackContainer>
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
          </NewStackContainer>
        ))}
      {isModalOpen && (
        <Portal id="modal-root">
          <NewTechStackModalDialog
            beforeRef={beforeRef}
            setIsModalOpen={setIsModalOpen}
            setIsConfirmModalOpen={setIsConfirmModalOpen}
            isModalOpen={isModalOpen}
          />
        </Portal>
      )}
      {isConfirmModalOpen && (
        <Portal id="modal-root">
          <ConfirmModalDialog
            beforeRef={beforeRef}
            setIsModalOpen={setIsConfirmModalOpen}
            isModalOpen={isConfirmModalOpen}
          />
        </Portal>
      )}
    </Container>
  );
};

ChipInputSearch.propTypes = {
  /** Data list의 고유한 id값을 정해줍니다. */
  id: string.isRequired,
  /** ChipInputSearch의 인풋의 값을 formik의 values로 설정해주는 함수입니다. */
  setFieldValue: func,
};

export default ChipInputSearch;
