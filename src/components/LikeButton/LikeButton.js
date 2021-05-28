import React from 'react';
import styled from 'styled-components';
import { Flicker } from 'react-micron';
import { useSelector } from 'react-redux';
import { SVGIcon } from 'components';
import { ReactComponent as Spinner } from 'assets/LoadingSpinner.svg';

const LikeButtonContainer = styled.div`
  position: fixed;
  top: 300px;

  @media (max-width: 1024px) {
    position: absolute;
    top: -50px;
    right: 0;
  }

  @media (max-width: 480px) {
    top: -1px;
    transform: scale(0.8);
  }
`;

const StyledLikeButton = styled.button`
  background: inherit;
  border: 1px solid #a3abb3;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  cursor: ${({ currentUser }) => (currentUser ? 'pointer' : 'not-allowed')};

  @media (max-width: 1024px) {
    background: inherit;
    border: 1px solid #a3abb3;
    border-radius: 5px;
    width: 82px;
    height: 33px;
    text-align: left;
    padding-left: 21px;
    color: #212121;
  }
`;

const LikeCount = styled.span`
  display: block;
  text-align: center;
  font-size: 1.4rem;
  margin-top: 5px;

  @media (max-width: 1024px) {
    position: absolute;
    cursor: pointer;
    pointer-events: none;
    top: 2px;
    right: 25px;
  }
`;

const EmptyHeartIcon = styled(SVGIcon)`
  & {
    stroke: #a3abb3;
  }
  path {
    fill: white;
  }
`;

const LikeButton = ({
  isLike: { value: likeValue, loading: likeLoading },
  likeCount,
  onLikeCountPlusHandler,
  ...restProps
}) => {
  const currentUser = useSelector(({ auth }) => auth.currentUser);
  return (
    <LikeButtonContainer {...restProps}>
      <Flicker events="onMouseEnter" timing="ease-in-out" duration={0.45} inline={false}>
        <StyledLikeButton
          aria-label="좋아요 버튼"
          onClick={onLikeCountPlusHandler}
          title={currentUser ? '좋아요 버튼' : '로그인이 필요합니다.'}
          currentUser={currentUser}
        >
          {likeLoading && currentUser ? (
            <Spinner width="20" height="20" style={{ margin: 0 }} />
          ) : currentUser && likeValue ? (
            <SVGIcon type="HeartRed" width={20} height={20} />
          ) : (
            <EmptyHeartIcon type="HeartRed" width={20} height={20} />
          )}
        </StyledLikeButton>
      </Flicker>
      <LikeCount>{likeCount}</LikeCount>
    </LikeButtonContainer>
  );
};

export default LikeButton;
