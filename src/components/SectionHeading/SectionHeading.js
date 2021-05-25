import React from 'react';
import styled from 'styled-components';
import { string, node } from 'prop-types';

const StyledSectionHeading = styled.h3`
  color: #212121;
  display: inline-block;
  font-weight: 700;
  font-size: 3rem;
  border-bottom: 14px solid rgba(66, 139, 202, 0.6);
  line-height: 10px;
  margin: 0 0 47px 0;
  padding: 100px 0 0 0;
`;

const SectionHeading = ({ id, children }) => {
  return <StyledSectionHeading id={id}>{children}</StyledSectionHeading>;
};

SectionHeading.propTypes = {
  /** 프로젝트 우측의 네비게이션바에서 조회를 할 수 있게끔 해주는 id입니다. */
  id: string,
  /** Heading의 하위 노드를 전달합니다. */
  children: node,
};

export default SectionHeading;
