import { Container, Image, Span, Time } from 'components';
import styled from 'styled-components';

const StyledCommentAuthor = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

function CommentAuthor() {
  return (
    <StyledCommentAuthor>
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
    </StyledCommentAuthor>
  );
}

export default CommentAuthor;
