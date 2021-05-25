import React from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';
import { SVGIcon } from 'components';

const StyledMember = styled.li`
  color: #666666;
  font-size: 1.6rem;
  font-weight: 700;
  margin-top: 50px;
  line-height: 1.6;

  & svg {
    vertical-align: top;
    margin-right: 10px;
  }

  &:first-of-type {
    margin-top: 0;
  }

  @media (max-width: 479px) {
    border-left: 2px solid #a9c1ff;
    padding-left: 10px;
    padding-left: 20px;
  }
`;

const Name = styled.span`
  display: inline-block;
  width: 130px;
  font-size: 1.6rem;
  padding-right: 20px;
  border-right: 2px solid #a9c1ff;
  margin-right: 20px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  @media (max-width: 479px) {
    width: auto;
    border-right: 0;
    padding-right: 0;
  }
`;

const GithubUrl = styled.a`
  display: inline-block;
  width: 598px;
  color: #666666;
  font-size: 1.6rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  @media (max-width: 828px) {
    width: 65vw;
  }

  @media (max-width: 657px) {
    width: 50vw;
  }

  @media (max-width: 479px) {
    display: none;
  }
`;

const GithubIconUrl = styled.a`
  @media (min-width: 480px) {
    display: none;
  }
`;

const Member = ({ name, githubUrl }) => {
  return (
    <StyledMember>
      <GithubIconUrl
        href={githubUrl}
        title={`${name}님의 github로 이동(새 창)`}
        target="_blank"
        rel="noopener"
        aria-label={`${name}님의 github로 이동(새 창)`}
      >
        <SVGIcon type="GithubBlack" width="23" height="23" />
      </GithubIconUrl>

      <Name title={name}>{name}</Name>

      <GithubUrl
        href={githubUrl}
        title={`${name}님의 github로 이동(새 창)`}
        target="_blank"
        rel="noopener"
        aria-label={`${name}님의 github로 이동(새 창)`}
      >
        <SVGIcon type="GithubBlack" width="23" height="23" />
        {githubUrl}
      </GithubUrl>
    </StyledMember>
  );
};

Member.propTypes = {
  /** 팀원의 이름을 전달해줍니다. */
  name: string.isRequired,
  /** 팀원의 github주소를 전달해줍니다. */
  githubUrl: string.isRequired,
};

export default Member;
