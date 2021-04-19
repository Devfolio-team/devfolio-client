import { styled } from '@storybook/theming';
import { Container, Heading, Image, Paragraph, Span, SVGIcon, Time } from 'components';
import React from 'react';
import { css } from 'styled-components';
import { string, number } from 'prop-types';

const StyledProjectItem = styled.li`
  ${() => css`
    display: inline-block;
    width: 301px;
    height: 380px;
    margin: 16px;
    border: 1px solid transparent;
    border-radius: 5px;
    overflow: hidden;
  `}
`;

const ProjectItem = ({
  thumbnail,
  subject,
  planIntention,
  created,
  author,
  authorProfile,
  likeCount,
}) => {
  const createDate = new Date(created);
  const year = createDate.getFullYear();
  const month = createDate.getMonth() + 1;
  const date = createDate.getDate();

  const createdText = `${year}년 ${month}월 ${date}일`;

  const dateTime = createDate.toISOString();

  return (
    <StyledProjectItem>
      <Image src={thumbnail} alt="" width="100%" height={167} />
      <Container width={301} height={167} padding="16px" background="#FFFFFF">
        <Heading as="h3" color="#212121" fontSize={1.6} margin="0 0 10px 0">
          {subject}
        </Heading>
        <Paragraph color="#495057" fontSize={1.4} height={65} margin="0 0 34px 0">
          {planIntention}
        </Paragraph>
        <Container color="#868E96">
          <Time dateTime={dateTime} color="#70777d" fontSize={1.2}>
            {createdText}
          </Time>
        </Container>
      </Container>
      <Container
        width={301}
        height={44}
        padding="10px 16px"
        background="#FFFFFF"
        borderTop="1px solid #E6E6E6"
        display="flex"
        flexFlow="row nowrap"
        justifyContent="space-between"
        alignItems="center"
      >
        <Container margin="0">
          <Image
            src={authorProfile}
            alt={`${author}의 프로필 사진`}
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
        </Container>
        <Container margin="0" display="flex" justifyContent="end" alignItems="center">
          <SVGIcon type="HeartRed" />
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
