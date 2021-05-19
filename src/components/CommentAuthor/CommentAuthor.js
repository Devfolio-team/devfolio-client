import { Container, Image, Span, Time } from 'components';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { dateFormMaker } from 'utils';
import { string, number } from 'prop-types';

const StyledCommentAuthor = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

const transferCreationDate = date => {
  const creationDate = parseInt((new Date().getTime() - new Date(date).getTime()) / 1000);

  if (creationDate < 1) return '방금 전';
  else if (creationDate < 60) return `${creationDate}초 전`;
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

CommentAuthor.propTypes = {
  /** 댓글을 작성한 유저의 닉네임을 입력해줍니다. */
  nickname: string.isRequired,
  /** 댓글을 작성한 유저의 프로필 사진 url을 입력해줍니다. */
  profilePhoto: string.isRequired,
  /** 댓글을 작성한 시간을  ISOString형식으로 입력해줍니다. */
  created: string.isRequired,
  /** 댓글을 작성한 유저의 프로필 사진이나 닉네임을 클릭했을때 해당 유저의 포트폴리오 페이지로 이동하기 위한 Link요소에 쓰일 유저의 고유 id값을 입력해줍니다. */
  authorId: number.isRequired,
};

export default CommentAuthor;
