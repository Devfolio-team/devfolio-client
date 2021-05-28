import MarkdownStyler from './MarkdownStyler';

export default {
  title: 'Component/MarkdownStyler',
  component: MarkdownStyler,
  parameters: {
    docs: {
      description: {
        component:
          '**MarkdownStyler** 프로젝트 등록, 포트폴리오 수정에서 텍스트 에디터로 작성한 문서들이 html로 파싱되어 저장된 데이터베이스의 문자열을 받아 각 태그마다 지정된 스타일로 렌더링해주는 컴포넌트입니다.',
      },
    },
  },
  argTypes: {},
};

const Template = args => <MarkdownStyler {...args} />;

export const ExampleProjectExplanation = Template.bind({});

ExampleProjectExplanation.args = {
  code:
    '<h1>covi-ding</h1><h2>주요 기능</h2><pre class="lang-javascript"><code data-language="javascript">const distance = [];const linePath = [];</code></pre>',
};
