import { A11yHidden, Button, Span } from 'components';
import Container from 'components/Container/Container';
import TextArea from 'components/TextArea/TextArea';
import React from 'react';
import styled from 'styled-components';

const CommentsForContainer = styled.div`
  width: 672px;
`;

const CommentsForm = () => {
  return (
    <form>
      <fieldset>
        <CommentsForContainer>
          <A11yHidden as="legend">댓글 입력 서식</A11yHidden>
          <Span fontSize={1.8} fontWeight={700}>
            0개의 댓글
          </Span>
          <TextArea
            id="commentForm"
            label="댓글을 작성해주세요."
            width={672}
            height={95}
            beforeTranslate={3}
            afterTranslate={-1}
            beforeMargin={10}
            afterMargin={0}
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
              댓글 작성
            </Button>
          </Container>
        </CommentsForContainer>
      </fieldset>
    </form>
  );
};

export default CommentsForm;
