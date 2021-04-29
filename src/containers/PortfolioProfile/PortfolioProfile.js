import {
  Anchor,
  Container,
  SkillsTypewriterEffect,
  SkillsTypewriterEffectSkeleton,
  Span,
  SVGIcon,
} from 'components';
import useDetectViewport from 'hooks/useDetectViewport';
import React from 'react';
import styled, { css } from 'styled-components';
import { applyStyle } from 'utils';
import Skeleton from '@yisheng90/react-loading';
import scrollToTop from 'utils/scrollToTop';

const StyledPortfolioProfile = styled.div`
  background: #eaeaea;
  ${props => css`
    ${applyStyle(props)}
    position: fixed;
    top: 0;
    left: 0;
    z-index: 0;
    inset: 0px;
    width: 100%;
    min-height: 100vh;
    /* #f19d85 */
    @media (max-height: 740px) {
      position: relative;
      min-height: 740px;
    }
  `}
`;

const ProfileImage = styled.img`
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

const UsersSite = ({ href, type, margin, vw, iconMargin, children, title, ariaLabel }) => {
  return (
    <Container width="100%" margin={margin} display="flex" alignItems="center">
      <Anchor
        href={href}
        target="_blank"
        margin={iconMargin}
        onFocus={scrollToTop}
        title={title}
        aria-label={ariaLabel}
      >
        <SVGIcon type={type} width={vw >= 768 ? 30 : 25} height={vw >= 768 ? 30 : 25} />
      </Anchor>
      <Anchor
        display="inline-block"
        target="_blank"
        href={href}
        fontSize={vw >= 768 ? 1.4 : 1.3}
        margin="0 0 0 8px"
        title={title}
      >
        {children}
      </Anchor>
    </Container>
  );
};

const PortfolioProfile = ({ userInfo, skills, background, ...restProps }) => {
  const { vw } = useDetectViewport();

  return (
    <StyledPortfolioProfile $background={background}>
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
          <ProfileImage
            src={
              userInfo
                ? userInfo.profile_photo
                : 'https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg'
            }
            alt={`${userInfo.name}님의 프로필 사진`}
            title={`${userInfo.name}님의 프로필 사진`}
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

        {skills ? (
          <SkillsTypewriterEffect skills={skills.map(({ skill_name }) => skill_name)} />
        ) : (
          <SkillsTypewriterEffectSkeleton />
        )}

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
          {userInfo && (
            <>
              {userInfo.github_url ? (
                <UsersSite
                  href={userInfo.github_url}
                  children={userInfo.github_url}
                  margin="0"
                  vw={vw}
                  type="GithubBlack"
                  alignItems="center"
                  title={`${userInfo.name}님의 github 주소로 이동`}
                  ariaLabel={`${userInfo.name}님의 github 주소로 이동`}
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
                  title={`${userInfo.name}님에게 email 전송`}
                  ariaLabel={`${userInfo.name}님에게 email 전송`}
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
                  title={`${userInfo.name}님의 blog 주소로 이동`}
                  ariaLabel={`${userInfo.name}님의 blog 주소로 이동`}
                />
              ) : null}
            </>
          )}
        </Container>
      </Container>
    </StyledPortfolioProfile>
  );
};

export default PortfolioProfile;
