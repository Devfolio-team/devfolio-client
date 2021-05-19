import { Button, CommentTextArea } from 'components';
import Container from 'components/Container/Container';
import React from 'react';
import styled from 'styled-components';

const NestedCommentsFormContainer = styled.div`
  margin: 0 auto;
  height: auto;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const NestedCommentsForm = ({ commentId }) => {
  return (
    <form>
      <NestedCommentsFormContainer>
        <CommentTextArea
          id={`nestedCommentForm${commentId}`}
          width="100%"
          label="답글을 작성해주세요."
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
          >
            답글 작성
          </Button>
        </Container>
      </NestedCommentsFormContainer>
    </form>
  );
};

export default NestedCommentsForm;
