import React from 'react';
import parse from 'html-react-parser';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export const parseHtmlAndHighlighter = (html, { language = 'javascript', style = docco } = {}) => {
  return parse(html, {
    replace: domNode => {
      if (domNode.name === 'pre') {
        const codeList = domNode.children.filter(child => child.name === 'code');
        const codeChildrenData = codeList
          .map(code => code.children.map(item => item.data).join(''))
          .join('');

        return (
          <SyntaxHighlighter language={language} style={style}>
            {codeChildrenData}
          </SyntaxHighlighter>
        );
      }
      return domNode;
    },
  });
};
