import { styled } from '@storybook/theming';
import { Container, Heading, Image, Paragraph, Span, SVGIcon, Time } from 'components';
import React, { useState } from 'react';
import { css } from 'styled-components';
import { string, number } from 'prop-types';
import { Link } from 'react-router-dom';
import { applyStyle } from 'utils';
import { ReactComponent as LoadingSpinner } from 'assets/LoadingSpinner.svg';

const StyledProjectItem = styled.li`
  ${({ $width, $margin }) => css`
    display: inline-block;
    width: ${$width};
    height: 100%;
    margin: 16px ${$margin};
    border: 1px solid transparent;
    border-radius: 5px;
    overflow: hidden;
    transition: 0.5s;
    &:hover {
      transform: translate3d(0, -8px, 0);
    }
  `}
`;

const StyledLink = styled(Link)`
  ${props => css`
    ${applyStyle(props)}
    display: block;
    width: 100%;
    height: 100%;
    &:focus:not(:focus-visible) {
      outline: none;
    }
  `}
`;

StyledLink.displayName = 'Link';

const StyledLoadingSpinner = styled(LoadingSpinner)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
`;

const ProjectItem = ({
  projectId,
  thumbnail,
  subject,
  planIntention,
  created,
  authorId,
  author,
  authorProfile,
  likeCount,
  viewport,
}) => {
  const [imageLoading, setImageLoading] = useState(true);

  const onImageLoadingHandler = () => {
    setImageLoading(false);
  };

  const { vw } = viewport;

  const createDate = new Date(created);
  const year = createDate.getFullYear();
  const month = createDate.getMonth() + 1;
  const date = createDate.getDate();

  const createdText = `${year}년 ${month}월 ${date}일`;

  const dateTime = createDate.toISOString();

  return (
    <StyledProjectItem
      $width={vw >= 1440 ? '301px' : vw >= 1126 ? '31%' : vw >= 1024 ? '47.5%' : '100%'}
      $margin={vw >= 1440 ? '16px' : vw >= 1024 ? '1.1%' : '0'}
    >
      <Container
        position="relative"
        $minWidth="100%"
        $minHeight={
          vw >= 1440
            ? 166
            : vw >= 1126
            ? '15.7vw'
            : vw >= 1024
            ? '23.8vw'
            : vw >= 768
            ? '47.6111vw'
            : '49.4vw'
        }
      >
        {imageLoading ? <StyledLoadingSpinner width={vw >= 1126 ? '35%' : '25%'} /> : null}
        <StyledLink to={`project/${projectId}`} tabIndex={-1}>
          <Image
            src={thumbnail}
            alt=""
            width={imageLoading ? 0 : '100%'}
            maxHeight={
              vw >= 1440
                ? 166
                : vw >= 1126
                ? '15.7vw'
                : vw >= 1024
                ? '23.8vw'
                : vw >= 768
                ? '47.6111vw'
                : '49.4vw'
            }
            cursor="pointer"
            objectFit="cover"
            onLoad={onImageLoadingHandler}
          />
          {/* 스크린 리더의 흐름상 Heading요소 바로 뒤에 있기 때문에 alt속성을 비워줌 */}
        </StyledLink>
      </Container>
      <Container width="100%" height={167} padding="16px" background="#FFFFFF">
        <StyledLink to={`project/${projectId}`}>
          <Heading as="h3" color="#212121" fontSize={1.6} margin="0 0 10px 0" cursor="pointer">
            {subject}
          </Heading>
          <Paragraph
            color="#495057"
            fontSize={1.4}
            height={82}
            margin="0 0 18px 0"
            cursor="pointer"
            display="-webkit-box"
            overflow="hidden"
            textOverflow="ellipsis"
            webkitLineClamp={4}
            webkitBoxOrient="vertical"
            lineHeight={21}
          >
            {planIntention}
          </Paragraph>
          <Time dateTime={dateTime} color="#70777d" fontSize={1.2}>
            {createdText}
          </Time>
        </StyledLink>
      </Container>
      <Container
        width="100%"
        height={44}
        padding="10px 16px"
        background="#FFFFFF"
        borderTop="1px solid #E6E6E6"
        display="flex"
        flexFlow="row nowrap"
        justifyContent="space-between"
        alignItems="center"
      >
        <Container margin="0" padding="0 5px 0 0" cursor="pointer">
          <StyledLink
            to={`portfolio/${authorId}`}
            title={`${author}님의 포트폴리오 페이지로 이동`}
            aria-label={`${author}님의 포트폴리오 페이지로 이동`}
          >
            <Image
              src={authorProfile}
              alt={`${author}님의 프로필 사진`}
              width={24}
              height={24}
              borderRadius="50%"
            />
            <Span margin="0 0 0 8px" color="#70777d" fontSize={1.2} verticalAlign="middle">
              by
            </Span>
            <Span verticalAlign="middle" fontSize={1.2}>
              {' '}
              {author}
            </Span>
          </StyledLink>
        </Container>
        <Container margin="0" display="flex" justifyContent="end" alignItems="center">
          <SVGIcon type="HeartRed" width="12" height="18" />
          <Span marginLeft={5}>{likeCount}</Span>
        </Container>
      </Container>
    </StyledProjectItem>
  );
};

ProjectItem.propTypes = {
  /** 프로젝트의 썸네일을 url형식으로 입력해줍니다. */
  thumbnail: string,
  /** 프로젝트의 제목을 입력해줍니다. */
  subject: string,
  /** 프로젝트의 기획의도를 입력해줍니다. */
  planIntention: string,
  /** 프로젝트를 애플리케이션에 등록 날짜를 ISOString형식으로 입력해줍니다. */
  created: string,
  /** 프로젝트를 애플리케이션에 등록한 유저의 닉네임을 입력해줍니다. */
  author: string,
  /** 프로젝트를 애플리케이션에 등록한 유저의 프로필 사진을 url형식으로 입력해줍니다. */
  authorProfile: string,
  /** 프로젝트의 좋아요 갯수를 입력해줍니다. */
  likeCount: number,
};

export default ProjectItem;
