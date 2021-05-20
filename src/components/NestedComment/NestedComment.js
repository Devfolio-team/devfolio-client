import { CommentAuthor, Paragraph, Span, UpdateCommentForm } from 'components';
import styled from 'styled-components';
import { object, number } from 'prop-types';
import { useState } from 'react';

const StyledNestedComment = styled.li`
  :first-of-type {
    margin-top: 20px;
  }

  margin-bottom: 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);

  &:last-of-type {
    border-bottom: 0;
    padding-bottom: 0;
  }
`;

const NestedComment = ({ data, dispatch, projectId }) => {
  const {
    comment_id,
    contents,
    created,
    is_deleted,
    nickname,
    profile_photo,
    user_user_id: userId,
  } = data;

  const [isUpdateMode, setIsUpdateMode] = useState(false);

  const onEnableUpdateModeHandler = () => {
    setIsUpdateMode(true);
  };

  const onDisableUpdateModeHandler = () => {
    setIsUpdateMode(false);
  };

  return (
    <StyledNestedComment>
      <CommentAuthor
        nickname={nickname}
        profilePhoto={profile_photo}
        created={created}
        authorId={userId}
        commentId={comment_id}
        isDeleted={is_deleted}
        dispatch={dispatch}
        onEnableUpdateModeHandler={onEnableUpdateModeHandler}
      />
      {isUpdateMode ? (
        <UpdateCommentForm
          commentId={comment_id}
          contents={contents}
          projectId={projectId}
          dispatch={dispatch}
          onDisableUpdateModeHandler={onDisableUpdateModeHandler}
        />
      ) : (
        <Paragraph fontSize={1.6} lineHeight="20px" margin="30px 0 36px">
          {is_deleted ? <Span color="#666666">삭제 된 답글입니다.</Span> : contents}
        </Paragraph>
      )}
    </StyledNestedComment>
  );
};

NestedComment.propTypes = {
  /** 해당 답글의 렌더링에 필요한 요소들이 담긴 객체를 전달 받습니다. */
  data: object.isRequired,
  /** 댓글을 수정할때 필요한 현재 프로젝트의 고유한 id를 전달 받습니다. */
  projectId: number.isRequired,
};

export default NestedComment;
