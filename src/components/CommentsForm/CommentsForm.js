import ajax from 'apis/ajax';
import { A11yHidden, Button, CommentTextArea, Span } from 'components';
import Container from 'components/Container/Container';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { number, func, object } from 'prop-types';

const CommentsFormContainer = styled.div`
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const CommentsForm = ({ projectId, commentCount, dispatch, commentListRef }) => {
  const [comment, setComment] = useState('');

  const currentUser = useSelector(({ auth }) => auth.currentUser);

  const onCommentChangeHandler = ({ target: { value } }) => {
    setComment(value);
  };

  const onCreateCommentHandler = async () => {
    try {
      const {
        data: { commentData },
      } = await ajax.postComment({
        contents: comment,
        projectId,
        userId: currentUser.user_id,
      });

      dispatch({ type: 'ADD_COMMENT', payload: commentData });

      commentListRef.current.lastChild.tabIndex = -1;
      commentListRef.current.lastChild.focus();

      setComment('');
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <form>
      <fieldset>
        <CommentsFormContainer>
          <A11yHidden as="legend">댓글 입력 서식</A11yHidden>
          <Span fontSize={1.8} fontWeight={700} marginBottom={20}>
            {commentCount}개의 댓글
          </Span>
          <CommentTextArea
            id="commentForm"
            width="100%"
            field={{ value: comment, onChange: onCommentChangeHandler }}
            label="댓글을 작성해주세요."
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
              댓글 작성
            </Button>
          </Container>
        </CommentsFormContainer>
      </fieldset>
    </form>
  );
};

CommentsForm.propTypes = {
  /** 어떤 프로젝트에서 작성되는 댓글인지 판단하기 위한 값입니다. */
  projectId: number.isRequired,
  /** 해당 프로젝트에서 몇개의 댓글이 달린지 렌더링 해주기 위한 값입니다. */
  commentCount: number.isRequired,
  /** 댓글을 작성하며 상태를 변경 시켜주는 함수입니다. */
  dispatch: func.isRequired,
  /** 댓글을 작성하면 작성한 댓글로 focus 해주기 위해 필요한 list요소의 참조값입니다. */
  commentListRef: object.isRequired,
};

export default CommentsForm;
