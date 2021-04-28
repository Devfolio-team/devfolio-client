import React from 'react';
import parse from 'html-react-parser';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { xonokai } from 'react-syntax-highlighter/dist/esm/styles/prism';

export const parseHtmlAndHighlighter = (html, { style = xonokai } = {}) => {
  // data-languege 위치 찾기 (위치를 찾고 "" 사이에 있는 값을 찾기 위해)
  const searchDataLanguege = html.indexOf('data-language');
  // 첫번째 "
  const startPoint = html.indexOf('"', searchDataLanguege + 12);
  // 두번째 "
  const endPoint = html.indexOf('"', startPoint + 1);
  const language = html.substring(startPoint + 1, endPoint);

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
