import ajax from 'apis/ajax';
import { A11yHidden, Button, CommentTextArea } from 'components';
import Container from 'components/Container/Container';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { number, func, string } from 'prop-types';

const UpdateCommentFormContainer = styled.div`
  width: 100%;
  margin: 30px auto;
`;

const UpdateCommentForm = ({
  contents,
  commentId,
  projectId,
  dispatch,
  onDisableUpdateModeHandler,
}) => {
  const [updateComment, setUpdateComment] = useState(contents);

  const currentUser = useSelector(({ auth }) => auth.currentUser);

  const onUpdateCommentChangeHandler = ({ target: { value } }) => {
    setUpdateComment(value);
  };

  const onUpdateCommentHandler = async () => {
    try {
      await ajax.editComment({
        contents: updateComment,
        commentId,
        projectId,
        userId: currentUser.user_id,
      });

      dispatch({ type: 'UPDATE_COMMENT', payload: { updateComment, commentId } });

      onDisableUpdateModeHandler();
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <form>
      <fieldset>
        <UpdateCommentFormContainer>
          <A11yHidden as="legend">댓글 입력 서식</A11yHidden>
          <CommentTextArea
            id={`updateCommentForm${commentId}`}
            width="100%"
            field={{ value: updateComment, onChange: onUpdateCommentChangeHandler }}
            label="수정 할 댓글의 내용을 작성해주세요."
          />
          <Container textAlign="right" margin="16px 0 0">
            <Button
              width={77}
              height={32}
              background="#868E96"
              color="#FFFFFF"
              fontSize={1.4}
              fontWeight={700}
              borderRadius={5}
              onClick={onDisableUpdateModeHandler}
              margin="0 10px 0"
            >
              취소
            </Button>
            <Button
              width={99}
              height={32}
              background="#428BCA"
              color="#FFFFFF"
              fontSize={1.4}
              fontWeight={700}
              borderRadius={5}
              onClick={onUpdateCommentHandler}
            >
              댓글 수정
            </Button>
          </Container>
        </UpdateCommentFormContainer>
      </fieldset>
    </form>
  );
};

UpdateCommentForm.propTypes = {
  /** 댓글이 수정됐을때 상태를 변경 시켜주기 위한 함수입니다. */
  contents: string.isRequired,
  /** 댓글이 수정됐을때 상태를 변경 시켜주기 위한 함수입니다. */
  dispatch: func.isRequired,
  /** 어떤 프로젝트에서 수정되는 댓글인지 판단하기 위한 값을 전달해줍니다. */
  projectId: number.isRequired,
  /** 어떤 댓글을 수정해야하는지 판단하기 위한 값을 전달해줍니다. */
  commentId: number.isRequired,
  /** 수정모드의 상태를 false로 바꿔주기 위한 함수를 전달해줍니다. */
  onDisableUpdateModeHandler: func.isRequired,
};

export default UpdateCommentForm;
