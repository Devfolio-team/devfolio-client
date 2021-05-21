import {
  Button,
  CommentAuthor,
  NestedComment,
  NestedCommentsForm,
  Span,
  SVGIcon,
  UpdateCommentForm,
} from 'components';
import Paragraph from 'components/Paragraph/Paragraph';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { color } from 'utils';
import { func, object, array, number } from 'prop-types';

const StyledComment = styled.li`
  width: 627px;
  padding: 30px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);

  &:last-of-type {
    border-bottom: 0;
    padding-bottom: 0;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const NestedCommentsContainer = styled.div`
  position: relative;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 8px 20px 30px;
  margin: 20px auto 0;

  &::before {
    border: 10px solid;
    border-color: transparent transparent #eaeaea transparent;
    content: '';
    position: absolute;
    top: -20px;
    left: 20px;
    transform: translateX(-50%);
  }

  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    top: -16px;
    left: 20px;
    transform: translateX(-50%);
    border: 8px solid;
    border-color: transparent transparent #fff transparent;
  }
`;

const NestedComments = styled.ul``;

const Comment = ({ dispatch, data, commentsData, projectId }) => {
  const {
    comment_id,
    contents,
    created,
    is_deleted,
    nickname,
    profile_photo,
    user_user_id: userId,
  } = data;

  const [nestedComments, setNestedComments] = useState([]);

  const [isNestedCommentOpen, setIsNestedCommentOpen] = useState(false);

  const [isUpdateMode, setIsUpdateMode] = useState(false);

  const onNestedCommentToggleHandler = () => {
    setIsNestedCommentOpen(!isNestedCommentOpen);
  };

  const onEnableUpdateModeHandler = () => {
    setIsUpdateMode(true);
  };

  const onDisableUpdateModeHandler = () => {
    setIsUpdateMode(false);
  };

  useEffect(() => {
    setNestedComments(commentsData.filter(({ parent }) => comment_id === parent));
  }, [comment_id, commentsData]);

  return (
    <StyledComment>
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
        <Paragraph fontSize={1.6} lineHeight="20px" margin="30px 0 40px">
          {is_deleted ? <Span color="#666666">삭제 된 댓글입니다.</Span> : contents}
        </Paragraph>
      )}
      <Button width="auto" height="auto" padding="0" onClick={onNestedCommentToggleHandler}>
        <SVGIcon type="Plus" width="12" height="12" />
        <Span
          color={color.mainColor}
          fontSize={1.3}
          fontWeight={700}
          marginLeft="5px"
          verticalAlign="top"
        >
          {isNestedCommentOpen
            ? '숨기기'
            : nestedComments.length
            ? `${nestedComments.length}개의 답글`
            : '답글 달기'}
        </Span>
      </Button>
      {isNestedCommentOpen && (
        <NestedCommentsContainer>
          <NestedComments>
            {nestedComments.map(comment => (
              <NestedComment
                key={comment.comment_id}
                data={comment}
                dispatch={dispatch}
                projectId={projectId}
              />
            ))}
          </NestedComments>
          <NestedCommentsForm
            commentId={comment_id}
            dispatch={dispatch}
            seq={nestedComments.length}
            projectId={projectId}
          />
        </NestedCommentsContainer>
      )}
    </StyledComment>
  );
};

Comment.propTypes = {
  /** 해당 프로젝트의 댓글 상태를 변경해주는 useReducer에 dispatch 함수를 전달해줍니다. */
  dispatch: func.isRequired,
  /** 해당 댓글의 정보를 담고 있는 객체를 전달해줍니다. */
  data: object.isRequired,
  /** 대댓글 렌더링을 위해 해당 프로젝트의 댓글 상태를 그대로 전달해줍니다. */
  commentsData: array.isRequired,
  /** 현재 어떤 프로젝트의 댓글인지 판단하기 위한 값입니다. 댓글의 CRUD를 하는데 사용됩니다. */
  projectId: number.isRequired,
};

export default Comment;
