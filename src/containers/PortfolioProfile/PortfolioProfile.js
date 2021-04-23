import { Anchor, Container, Image, Span, SVGIcon } from 'components';
import useDetectViewport from 'hooks/useDetectViewport';
import React from 'react';
import styled, { css } from 'styled-components';
import { applyStyle } from 'utils';

const StyledPortfolioProfile = styled.div`
  ${props => css`
    ${applyStyle(props)}
    position: fixed;
    top: 0;
    left: 0;
    z-index: 0;
    inset: 0px;
    width: 100%;
    min-height: 100vh;
    background: #f19d85;
    @media (max-height: 780px) {
      position: relative;
      min-height: 940px;
    }
  `}
`;

const SimpleIntroduce = styled.em`
  font-style: normal;
  font-weight: 700;
  font-size: 2.4rem;
  text-align: center;
  line-height: 3.5rem;
  color: #212121;
  margin: 65px 0 65px;
`;

const PortfolioProfile = ({ userInfo, ...restProps }) => {
  const { vh } = useDetectViewport();

  return (
    <StyledPortfolioProfile>
      <Container
        width={422}
        display="flex"
        flexFlow="column nowrap"
        justifyContent="flex-start"
        alignItems="center"
        position="absolute"
        margin={vh >= 780 ? '5vh 0 0' : '0'}
        top="50%"
        left="50%"
        transform="translate3D(-50%, -50%, 0)"
      >
        <Image
          src={
            userInfo
              ? userInfo.profile_photo
              : 'https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg'
          }
          alt=""
          borderRadius="50%"
          width={250}
          height={250}
          objectFit="cover"
        />
        <Span fontSize={6.4} fontWeight={700} color="#212121" margin="35px 0 20px">
          {userInfo ? userInfo.name : null}
        </Span>

        <Span fontSize={3.4} fontWeight={700} color="#212121">
          {userInfo ? `(${userInfo.nickname})` : null}
        </Span>
        <SimpleIntroduce>{userInfo ? userInfo.simpleIntroduce : null}</SimpleIntroduce>

        <Span fontSize={2.4} fontWeight={700} color="#212121">
          저는 React.js 할 줄 아는 개발자 입니다.
        </Span>
        <Container width={270} margin="65px 0 0" display="flex" justifyContent="space-between">
          <Anchor
            cursor="pointer"
            href={userInfo ? (userInfo.github_url ? userInfo.github_url : null) : null}
            target="_blank"
          >
            <SVGIcon type="GithubBlack" width="40" height="40" />
          </Anchor>
          <Anchor
            cursor="pointer"
            href={userInfo ? (userInfo.email ? userInfo.email : null) : null}
            target="_blank"
          >
            <SVGIcon type="Email" width="40" height="40" />
          </Anchor>
          <Anchor
            cursor="pointer"
            href={userInfo ? (userInfo.blog_url ? userInfo.blog_url : null) : null}
            target="_blank"
          >
            <SVGIcon type="Blog" width="40" height="40" />
          </Anchor>
        </Container>
      </Container>
    </StyledPortfolioProfile>
  );
};

export default PortfolioProfile;
