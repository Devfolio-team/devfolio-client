import { Anchor, Container, Image, Span, SVGIcon } from 'components';
import useDetectViewport from 'hooks/useDetectViewport';
import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { applyStyle } from 'utils';
import Typewiter from 'react-simple-typewriter';

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
      min-height: 780px;
    }
  `}
`;

const SimpleIntroduce = styled.em`
  display: block;
  font-style: normal;
  font-weight: 700;
  font-size: 2.2rem;
  text-align: center;
  line-height: 3.5rem;
  color: #212121;
  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const CustomTypewriter = styled.div`
  @keyframes cursorAnimation {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  & > .typewriterEffectWraper > span:last-of-type {
    animation: cursorAnimation 1s infinite;
  }
  line-height: 3rem;
  margin: 65px 0 65px;
  font-size: 3rem;
  font-weight: 700;
  color: #212121;
  @media (max-width: 1024px) {
    font-size: 2.7rem;
  }
  @media (max-width: 768px) {
    font-size: 2.4rem;
  }
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const PortfolioProfile = ({ userInfo, ...restProps }) => {
  const { vw, vh } = useDetectViewport();

  const [iconSize, setIconSize] = useState(40);

  useEffect(() => {
    if (vw <= 1024) setIconSize(30);
    else {
      setIconSize(40);
    }
  }, [vw]);

  return (
    <StyledPortfolioProfile>
      <Container
        width={'100%'}
        padding="0 30px"
        display="flex"
        flexFlow="column nowrap"
        justifyContent="flex-start"
        alignItems="center"
        position="absolute"
        margin={vh >= 780 ? '3vh 0 0' : '0'}
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
          width={vw >= 1024 ? 250 : vw >= 768 ? 200 : 180}
          height={vw >= 1024 ? 250 : vw >= 768 ? 200 : 180}
          objectFit="cover"
        />
        <Span
          fontSize={vw >= 1024 ? 4.8 : 3.2}
          fontWeight={700}
          color="#212121"
          margin="35px 0 20px"
        >
          {userInfo ? userInfo.name : null}
        </Span>

        <Span fontSize={vw >= 1024 ? 3 : 2} fontWeight={700} color="#212121">
          {userInfo ? `(${userInfo.nickname})` : null}
        </Span>

        <CustomTypewriter>
          저는{' '}
          <Container
            className="typewriterEffectWraper"
            display={vw >= 768 ? 'inline-block' : 'block'}
          >
            <Typewiter
              loop
              cursor
              typeSpeed={150}
              deleteSpeed={140}
              delaySpeed={1000}
              words={['React.js', 'Vue.js', 'Styled Components', 'Javascript']}
            />{' '}
          </Container>
          할 줄 아는 개발자 입니다.
        </CustomTypewriter>

        <SimpleIntroduce>{userInfo ? userInfo.simple_introduction : null}</SimpleIntroduce>

        <Container
          width={vw >= 1024 ? 250 : vw >= 270 ? 180 : '100%'}
          margin="65px 0 0"
          display="flex"
          justifyContent="space-between"
        >
          <Anchor
            cursor="pointer"
            href={userInfo ? (userInfo.github_url ? userInfo.github_url : null) : null}
            target="_blank"
          >
            <SVGIcon type="GithubBlack" width={iconSize} height={iconSize} />
          </Anchor>
          <Anchor
            cursor="pointer"
            href={userInfo ? (userInfo.email ? userInfo.email : null) : null}
            target="_blank"
          >
            <SVGIcon type="Email" width={iconSize} height={iconSize} />
          </Anchor>
          <Anchor
            cursor="pointer"
            href={userInfo ? (userInfo.blog_url ? userInfo.blog_url : null) : null}
            target="_blank"
          >
            <SVGIcon type="Blog" width={iconSize} height={iconSize} />
          </Anchor>
        </Container>
      </Container>
    </StyledPortfolioProfile>
  );
};

export default PortfolioProfile;
