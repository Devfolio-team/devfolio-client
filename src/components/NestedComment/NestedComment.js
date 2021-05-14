import { CommentAuthor, NestedCommentsForm, Paragraph } from 'components';
import styled from 'styled-components';

const StyledNestedComment = styled.li``;

const NestedComment = () => {
  return (
    <StyledNestedComment>
      <CommentAuthor />
      <Paragraph fontSize={1.6} lineHeight="20px" margin="30px 0 36px">
        좋은 글 감사합니다. 후속편이 기대되네요 :)
      </Paragraph>
      <NestedCommentsForm />
    </StyledNestedComment>
  );
};

export default NestedComment;
