import { CommentAuthor, Paragraph } from 'components';
import styled from 'styled-components';

const StyledNestedComment = styled.li`
  :first-of-type {
    margin-top: 10px;
  }

  margin-bottom: 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);

  &:last-of-type {
    border-bottom: 0;
    padding-bottom: 0;
  }
`;

const NestedComment = ({ data }) => {
  const { contents, created, is_deleted, nickname, profile_photo, user_user_id: userId } = data;
  return (
    <StyledNestedComment>
      <CommentAuthor
        nickname={nickname}
        profilePhoto={profile_photo}
        created={created}
        authorId={userId}
      />
      <Paragraph fontSize={1.6} lineHeight="20px" margin="30px 0 36px">
        {contents}
      </Paragraph>
    </StyledNestedComment>
  );
};

export default NestedComment;
