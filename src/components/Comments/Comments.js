import { Button, CommentAuthor, NestedComment, Span, SVGIcon } from 'components';
import Paragraph from 'components/Paragraph/Paragraph';
import React from 'react';
import styled from 'styled-components';
import { color } from 'utils';

const StyledComments = styled.li`
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

const NestedComments = styled.ul`
  position: relative;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 20px 20px 30px;
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

const Comments = () => {
  return (
    <StyledComments>
      <CommentAuthor />
      <Paragraph fontSize={1.6} lineHeight="20px" margin="30px 0 40px">
        좋은 글 감사합니다. 후속편이 기대되네요 :)
      </Paragraph>
      <Button width="auto" height="auto" padding="0">
        <SVGIcon type="Plus" width="12" height="12" />
        <Span
          color={color.mainColor}
          fontSize={1.2}
          fontWeight={700}
          marginLeft="5px"
          verticalAlign="top"
        >
          답글 달기
        </Span>
      </Button>
      <NestedComments>
        <NestedComment />
      </NestedComments>
    </StyledComments>
  );
};
export default Comments;
