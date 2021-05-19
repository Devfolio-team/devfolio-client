import { Container, Image, Span, Time } from 'components';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { dateFormMaker } from 'utils';

const StyledCommentAuthor = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

const transferCreationDate = date => {
  const creationDate = parseInt((new Date().getTime() - new Date(date).getTime()) / 1000);

  if (creationDate < 60) return `${creationDate}초 전`;
  else if (creationDate >= 60 && creationDate < 3599) return `${parseInt(creationDate / 60)}분 전`;
  else if (creationDate >= 3600 && creationDate < 3600 * 24)
    return `${parseInt(creationDate / 3600)}시간 전`;
  else if (creationDate >= 3600 * 24 && creationDate < 3600 * 24 * 7)
    return `${parseInt(creationDate / (3600 * 24))}일 전`;
  else dateFormMaker(date);
};

function CommentAuthor({ nickname, profilePhoto, created, authorId }) {
  return (
    <StyledCommentAuthor>
      <Link to={`/portfolio/${authorId}`}>
        <Image
          src={profilePhoto}
          alt={`${nickname}님의 프로필 사진`}
          borderRadius="50%"
          width={50}
          height={50}
        />
      </Link>
      <Container
        display="flex"
        flexFlow="column nowrap"
        justifyContent="space-between"
        margin="0 0 0 16px"
        padding="6px 0"
      >
        <Link to={`/portfolio/${authorId}`}>
          <Span display="block" fontSize={1.6} fontWeight={700}>
            {nickname}
          </Span>
        </Link>
        <Time dateTime="" fontSize={1.4} color="#666666">
          {transferCreationDate(created)}
        </Time>
      </Container>
    </StyledCommentAuthor>
  );
}

export default CommentAuthor;
