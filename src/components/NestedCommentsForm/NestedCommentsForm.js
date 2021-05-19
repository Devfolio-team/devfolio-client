import ajax from 'apis/ajax';
import { Button, CommentTextArea } from 'components';
import Container from 'components/Container/Container';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { number, func } from 'prop-types';

const NestedCommentsFormContainer = styled.div`
  margin: 0 auto;
  height: auto;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const NestedCommentsForm = ({ projectId, commentId, dispatch, seq }) => {
  const [nestedComment, setNestedComment] = useState('');

  const currentUser = useSelector(({ auth }) => auth.currentUser);

  const onCommentChangeHandler = ({ target: { value } }) => {
    setNestedComment(value);
  };

  const onCreateCommentHandler = async () => {
    try {
      const {
        data: { commentData },
      } = await ajax.postComment({
        contents: nestedComment,
        projectId,
        parent: commentId,
        seq: seq + 2,
        userId: currentUser.user_id,
      });

      dispatch({ type: 'ADD_COMMENT', payload: commentData });
      setNestedComment('');
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <form>
      <NestedCommentsFormContainer>
        <CommentTextArea
          id={`nestedCommentForm${commentId}`}
          width="100%"
          label="답글을 작성해주세요."
          field={{ value: nestedComment, onChange: onCommentChangeHandler }}
        />
        <Container textAlign="right" margin="16px 0 0">
          <Button
            width={99}
            height={32}
            background="#428BCA"
            color="#FFFFFF"
            fontSize={1.4}
            fontWeight={700}
            borderRadius={5}
            onClick={onCreateCommentHandler}
          >
            답글 작성
          </Button>
        </Container>
      </NestedCommentsFormContainer>
    </form>
  );
};

NestedCommentsForm.propTypes = {
  /** 어떤 프로젝트에 작성되는 답글인지 판단하기 위한 값을 전달해줍니다. */
  projectId: number.isRequired,
  /** 어떤 댓글에 대한 답글인지 판단하기 위한 값을 전달해줍니다. (데이터베이스에 parent컬럼으로 들어갈 값) */
  commentId: number.isRequired,
  /** 해당 프로젝트의 댓글 상태를 변경해주기 위한 함수입니다. */
  dispatch: func.isRequired,
  /** 현재 댓글의 하위에 있는 답글들의 갯수(length)를 전달해줍니다. (데이터베이스에 답글의 순서를 결정하는 seq컬럼으로 들어갈 값 */
  seq: number.isRequired,
};

export default NestedCommentsForm;
