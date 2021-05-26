import React from 'react';
import styled from 'styled-components';
import { Flicker } from 'react-micron';
import { useSelector } from 'react-redux';
import { SVGIcon } from 'components';

const LikeButtonContainer = styled.div`
  position: fixed;

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
    top: 2px;
    right: 25px;
  }
`;

const HeartIcon = styled(SVGIcon)`
  & {
    stroke: #a3abb3;
  }
  path {
    fill: white;
  }
`;

const LikeButton = ({ isLike, likeCount, onLikeCountPlusHandler, ...restProps }) => {
  const currentUser = useSelector(({ auth }) => auth.currentUser);
  return (
    <LikeButtonContainer {...restProps}>
      <Flicker events="onMouseEnter" timing="ease-in-out" duration={0.45} inline={false}>
        <StyledLikeButton
          aria-label="좋아요 버튼"
          onClick={onLikeCountPlusHandler}
          title={currentUser && '로그인이 필요합니다.'}
          currentUser={currentUser}
        >
          {isLike ? (
            <SVGIcon type="HeartRed" width={20} height={20}></SVGIcon>
          ) : (
            <HeartIcon type="HeartRed" width={20} height={20}></HeartIcon>
          )}
        </StyledLikeButton>
      </Flicker>
      <LikeCount>{likeCount}</LikeCount>
    </LikeButtonContainer>
  );
};

export default LikeButton;
