import {
  Button,
  CommentAuthor,
  NestedComment,
  NestedCommentsForm,
  Span,
  SVGIcon,
} from 'components';
import Paragraph from 'components/Paragraph/Paragraph';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { color } from 'utils';

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

const Comment = ({ data, commentsData }) => {
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

  const onNestedCommentToggleHandler = () => {
    setIsNestedCommentOpen(!isNestedCommentOpen);
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
      />
      <Paragraph fontSize={1.6} lineHeight="20px" margin="30px 0 40px">
        {contents}
      </Paragraph>
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
              <NestedComment key={comment.comment_id} data={comment} />
            ))}
          </NestedComments>
          <NestedCommentsForm commentId={comment_id} />
        </NestedCommentsContainer>
      )}
    </StyledComment>
  );
};
export default Comment;
