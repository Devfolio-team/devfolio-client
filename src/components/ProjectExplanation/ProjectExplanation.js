import React from 'react';
import styled from 'styled-components';
import { parseHtmlAndHighlighter } from 'utils/parseHtmlAndHighlighter';

const StyledProjectExplanation = styled.div`
  h1 {
    font-size: 3rem;
    line-height: 3.5rem;
    margin-bottom: 1rem;
    padding: 10px 0;
  }

  h2 {
    font-size: 2rem;
    line-height: 2.5rem;
    margin-bottom: 1rem;
    padding: 10px 0;
  }

  h3,
  h4,
  h5,
  h6 {
    font-size: 1rem;
    line-height: 2.5rem;
    margin-bottom: 1rem;
    padding: 10px 0;
  }

  p,
  li {
    list-style-type: disc;
    font-size: 1.7rem;
    line-height: 2.8rem;
    margin-bottom: 1rem;
  }

  div {
    font-size: 2rem;
  }

  code {
    overflow: hidden;
    white-space: pre-wrap;
    font-size: 1.5rem;
    line-height: 2rem;
  }

  img {
    width: 100%;
  }

  em,
  strong,
  del,
  strike,
  sup,
  sub,
  small,
  u {
    font-size: 1.7rem;
  }
`;

const ProjectExplanation = ({ children }) => {
  return <StyledProjectExplanation>{parseHtmlAndHighlighter(children)}</StyledProjectExplanation>;
};

export default ProjectExplanation;
