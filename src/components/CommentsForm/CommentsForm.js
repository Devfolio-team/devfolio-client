import ajax from 'apis/ajax';
import { A11yHidden, Button, CommentTextArea, Span } from 'components';
import Container from 'components/Container/Container';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const CommentsFormContainer = styled.div`
  width: 672px;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const CommentsForm = ({ projectId, commentCount }) => {
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
            width={672}
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

export default CommentsForm;
