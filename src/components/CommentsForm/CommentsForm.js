import { A11yHidden, Button, CommentTextArea, Span } from 'components';
import Container from 'components/Container/Container';
import React from 'react';
import styled from 'styled-components';

const CommentsFormContainer = styled.div`
  width: 672px;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const CommentsForm = () => {
  return (
    <form>
      <fieldset>
        <CommentsFormContainer>
          <A11yHidden as="legend">댓글 입력 서식</A11yHidden>
          <Span fontSize={1.8} fontWeight={700}>
            0개의 댓글
          </Span>
          <CommentTextArea id="commentForm" width={672} label="댓글을 작성해주세요." />
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
              댓글 작성
            </Button>
          </Container>
        </CommentsFormContainer>
      </fieldset>
    </form>
  );
};

export default CommentsForm;
