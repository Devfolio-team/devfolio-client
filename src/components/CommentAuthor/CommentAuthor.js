import { Container, DeleteModalDialog, Image, Span, Time } from 'components';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { dateFormMaker } from 'utils';
import { string, number, func } from 'prop-types';
import { useSelector } from 'react-redux';
import { useRef, useState } from 'react';
import ajax from 'apis/ajax';

const StyledCommentAuthor = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

const DeleteModifyButton = styled.button`
  color: #868e96;
  font-size: 1.4rem;
  background: transparent;

  &:hover {
    color: #212121;
    font-weight: 700;
  }
`;

const transferCreationDate = date => {
  const today = new Date();
  const registerDate = new Date(date);

  // 초 단위로 댓글을 작성한 시점으로부터의 경과 시간이 담김
  const creationDate = parseInt((today.getTime() - registerDate.getTime()) / 1000);

  if (creationDate < 1) return '방금 전';
  else if (creationDate < 60) return `${creationDate}초 전`;
  else if (creationDate >= 60 && creationDate < 3600) return `${parseInt(creationDate / 60)}분 전`;
  else if (creationDate >= 3600 && creationDate < 3600 * 24)
    return `${parseInt(creationDate / 3600)}시간 전`;
  else if (creationDate >= 3600 * 24 && today.getDate() - registerDate.getDate() < 8)
    return `${today.getDate() - registerDate.getDate()}일 전`;
  else return dateFormMaker(date);
};

function CommentAuthor({
  nickname,
  profilePhoto,
  created,
  authorId,
  commentId,
  isDeleted,
  dispatch,
  onEnableUpdateModeHandler,
}) {
  const currentUser = useSelector(({ auth }) => auth.currentUser);

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const onDeleteModalOpenHandler = () => {
    setIsDeleteModalOpen(true);
  };

  const deleteButtonRef = useRef();

  const onDeleteCommentHandler = async () => {
    try {
      await ajax.deleteComment(commentId);
      setIsDeleteModalOpen(false);

      dispatch({ type: 'DELETE_COMMENT', payload: { commentId } });
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <StyledCommentAuthor>
      <Link to={isDeleted ? '/page-not-found' : `/portfolio/${authorId}`}>
        <Image
          src={
            isDeleted
              ? 'https://aws-devfolio.s3.ap-northeast-2.amazonaws.com/default_user_profile.jpeg'
              : profilePhoto
          }
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
        <Link to={isDeleted ? '/page-not-found' : `/portfolio/${authorId}`}>
          <Span display="block" fontSize={1.6} fontWeight={700} whiteSpace="nowrap">
            {isDeleted ? '알 수 없음' : nickname}
          </Span>
        </Link>
        <Time dateTime="" fontSize={1.4} color="#666666">
          {transferCreationDate(created)}
        </Time>
      </Container>
      {isDeleted
        ? null
        : currentUser &&
          currentUser.user_id === authorId && (
            <>
              <Container width="100%" margin="0" padding="6px 0" textAlign="right">
                <DeleteModifyButton onClick={onEnableUpdateModeHandler}>수정</DeleteModifyButton>
                <DeleteModifyButton ref={deleteButtonRef} onClick={onDeleteModalOpenHandler}>
                  삭제
                </DeleteModifyButton>
              </Container>
              {isDeleteModalOpen && (
                <DeleteModalDialog
                  deleteButtonRef={deleteButtonRef}
                  setIsDeleteModalOpen={setIsDeleteModalOpen}
                  deleteEvent={onDeleteCommentHandler}
                  deleteTargetName="댓글"
                />
              )}
            </>
          )}
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
  /** 댓글 수정 Form을 열기 위한 CommentUpdateMode의 상태를 변경하기 위한 함수를 전달해줍니다. */
  onEnableUpdateModeHandler: func.isRequired,
};

export default CommentAuthor;
