import { Anchor, Container, Span, SVGIcon } from 'components';
import useDetectViewport from 'hooks/useDetectViewport';
import React from 'react';
import styled, { css } from 'styled-components';
import { applyStyle } from 'utils';
import Typewiter from 'react-simple-typewriter';
import Skeleton from '@yisheng90/react-loading';
import scrollToTop from 'utils/scrollToTop';

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
    @media (max-height: 740px) {
      position: relative;
      min-height: 740px;
    }
  `}
`;

const ProfileImate = styled.img`
  border-radius: 50%;
  width: 250px;
  height: 250px;
  object-fit: cover;
  @media (max-height: 800px) {
    width: 220px;
    height: 220px;
  }
  @media (max-width: 1024px) {
    width: 200px;
    height: 200px;
  }
  @media (max-width: 768px) {
    width: 180px;
    height: 180px;
  }
`;

// const SimpleIntroduce = styled.em`
//   display: block;
//   max-width: 600px;
//   font-style: normal;
//   font-weight: 700;
//   font-size: 2.2rem;
//   text-align: center;
//   line-height: 3.5rem;
//   color: #212121;
//   @media (max-width: 768px) {
//     font-size: 1.6rem;
//     max-width: 300px;
//   }
// `;

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
  line-height: 3.3rem;
  margin: 60px 0 40px;
  font-size: 3rem;
  font-weight: 700;
  color: #212121;
  @media (max-width: 1024px) {
    font-size: 2.7rem;
  }
  @media (max-width: 768px) {
    font-size: 2.4rem;
    margin: 45px 0 35px;
  }
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const UsersSite = ({ href, type, margin, vw, iconMargin, children }) => {
  return (
    <Container width="100%" margin={margin} display="flex" alignItems="center">
      <Anchor href={href} target="_blank" margin={iconMargin} onFocus={scrollToTop}>
        <SVGIcon type={type} width={vw >= 768 ? 30 : 25} height={vw >= 768 ? 30 : 25} />
      </Anchor>
      <Anchor
        display="inline-block"
        target="_blank"
        href={href}
        fontSize={vw >= 768 ? 1.4 : 1.3}
        margin="0 0 0 8px"
      >
        {children}
      </Anchor>
    </Container>
  );
};

const PortfolioProfile = ({ userInfo, skills, ...restProps }) => {
  const { vw } = useDetectViewport();

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
        top="50%"
        left="50%"
        transform={`translate3D(-50%, ${vw >= 780 ? '-44%' : '-50%'}, 0)`}
      >
        {userInfo ? (
          <ProfileImate
            src={
              userInfo
                ? userInfo.profile_photo
                : 'https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg'
            }
            alt=""
          />
        ) : (
          <Skeleton
            color="#cccccc"
            width={vw >= 1024 ? 250 : vw >= 768 ? 200 : 180}
            height={vw >= 1024 ? 250 : vw >= 768 ? 200 : 180}
            circle
            translucent
          />
        )}

        {userInfo ? (
          <Span
            fontSize={vw >= 1024 ? 4.5 : 3.2}
            fontWeight={700}
            color="#212121"
            margin="35px 0 20px"
          >
            {userInfo.name}
          </Span>
        ) : (
          <Span margin="35px 0 16px">
            <Skeleton
              color="#cccccc"
              width={vw >= 1024 ? 150 : 100}
              height={vw >= 1024 ? 48 : 32}
              translucent
            />
          </Span>
        )}

        <Span fontSize={vw >= 1024 ? 3 : 2} fontWeight={700} color="#212121">
          {userInfo ? (
            `(${userInfo.nickname})`
          ) : (
            <Skeleton
              color="#cccccc"
              width={vw >= 1024 ? 105 : 70}
              height={vw >= 1024 ? 30 : 20}
              translucent
            />
          )}
        </Span>

        {vw >= 768 ? (
          <CustomTypewriter>
            {skills ? (
              <>
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
              </>
            ) : (
              <Span margin="0 0 -4px">
                {vw >= 768 ? (
                  <Skeleton
                    color="#cccccc"
                    width={vw >= 1024 ? 750 : 600}
                    height={vw >= 1024 ? 36 : 36}
                    translucent
                  />
                ) : (
                  <Skeleton rows={3} color="#cccccc" width={250} height={33} translucent />
                )}
              </Span>
            )}
          </CustomTypewriter>
        ) : null}
        <Container display="flex" flexFlow="column nowrap" alignItems="flex-start">
          {vw < 768 ? (
            <CustomTypewriter>
              {skills ? (
                <>
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
                </>
              ) : (
                <Span margin="0 0 -4px">
                  {vw >= 768 ? (
                    <Skeleton
                      color="#cccccc"
                      width={vw >= 1024 ? 750 : 600}
                      height={vw >= 1024 ? 36 : 36}
                      translucent
                    />
                  ) : (
                    <Skeleton rows={3} color="#cccccc" width={250} height={33} translucent />
                  )}
                </Span>
              )}
            </CustomTypewriter>
          ) : null}
        </Container>
        <Container
          width={vw >= 768 ? 'auto' : vw > 480 ? 250 : 208}
          maxWidth={vw >= 768 ? 250 : null}
          margin="30px auto"
          display="flex"
          flexFlow="column nowrap"
          position="relative"
          zIndex={10}
          justifyContent="space-between"
        >
          {userInfo ? (
            <>
              {userInfo.github_url ? (
                <UsersSite
                  href={userInfo.github_url}
                  children={userInfo.github_url}
                  margin="0"
                  vw={vw}
                  type="GithubBlack"
                  alignItems="center"
                />
              ) : null}
              {userInfo.email ? (
                <UsersSite
                  href={`mailto:${userInfo.email}`}
                  children={userInfo.email}
                  margin="10px 0"
                  vw={vw}
                  type="Email"
                  alignItems="center"
                />
              ) : null}
              {userInfo.blog_url ? (
                <UsersSite
                  href={userInfo.blog_url}
                  children={userInfo.blog_url}
                  margin="0"
                  vw={vw}
                  type="Blog"
                  alignItems="center"
                  iconMargin="0 0 -7px"
                />
              ) : null}
            </>
          ) : null}
        </Container>
      </Container>
    </StyledPortfolioProfile>
  );
};

export default PortfolioProfile;
