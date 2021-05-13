import { Button, Container, Image, Span, SVGIcon, Time } from 'components';
import Paragraph from 'components/Paragraph/Paragraph';
import React from 'react';
import styled from 'styled-components';
import { color } from 'utils';

const StyledComments = styled.div`
  width: 627px;
  padding: 30px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

const AuthorContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

const Comments = () => {
  return (
    <StyledComments>
      <AuthorContainer>
        <Image
          src="https://lh3.googleusercontent.com/a-/AOh14GhtpT7YH6EriNYjuPcuXRK6J-weil804Xl8sNWl=s350-c"
          alt=""
          borderRadius="50%"
          width={50}
          height={50}
        />
        <Container
          display="flex"
          flexFlow="column nowrap"
          justifyContent="space-between"
          margin="0 0 0 16px"
          padding="6px 0"
        >
          <Span display="block" fontSize={1.6} fontWeight={700}>
            HajunRyu
          </Span>
          <Time dateTime="" fontSize={1.4} color="#666666">
            2021.03.30
          </Time>
        </Container>
      </AuthorContainer>
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
    </StyledComments>
  );
};
export default Comments;
