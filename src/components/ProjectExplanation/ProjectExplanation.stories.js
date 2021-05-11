import { ProjectExplanation } from 'components';

export default {
  title: 'Component/ProjectExplanation',
  component: ProjectExplanation,
  parameters: {
    docs: {
      description: {
        component:
          '**ProjectExplanation** 컴포넌트는 프로젝트페이지의 프로젝트 설명에 태그에 맞게 스타일링 되어 있으며 언어에 맞는 코드도 스타일링 되어 있습니다.',
      },
    },
  },
  argTypes: {},
};

const Template = args => {
  const code =
    '<h1>covi-ding</h1><h2>주요 기능</h2><pre class="lang-javascript"><code data-language="javascript">const distance = [];const linePath = [];</code></pre>';

  return <ProjectExplanation {...args}>{code}</ProjectExplanation>;
};

export const ExampleProjectExplanation = Template.bind({});

ExampleProjectExplanation.args = {};
