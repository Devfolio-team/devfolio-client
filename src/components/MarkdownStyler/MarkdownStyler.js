import React from 'react';
import styled from 'styled-components';
import { parseHtmlAndHighlighter } from 'utils/parseHtmlAndHighlighter';

const StyledMarkdownStyler = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-bottom: 1rem;
    padding: 10px 0;
    line-height: 1.5;
  }

  h1 {
    font-size: 4rem;
  }
  h2 {
    font-size: 3.2rem;
    margin-bottom: 1rem;
    padding: 10px 0;
  }
  h3 {
    font-size: 2.4rem;
  }
  h4 {
    font-size: 1.8rem;
  }
  h5 {
    font-size: 1.5rem;
  }
  h6 {
    font-size: 1.2rem;
  }

  p,
  li {
    list-style-type: disc;
    list-style-position: inside;
    font-size: 1.7rem;
    line-height: 2.8rem;
    margin-bottom: 1rem;
  }

  a {
    text-decoration: underline;
    color: #157cd6;
    word-wrap: break-word;
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

const MarkdownStyler = ({ children }) => {
  return <StyledMarkdownStyler>{parseHtmlAndHighlighter(children)}</StyledMarkdownStyler>;
};

export default MarkdownStyler;
