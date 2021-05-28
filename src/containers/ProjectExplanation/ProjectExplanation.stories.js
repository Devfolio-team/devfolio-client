import ProjectExplanation from './ProjectExplanation';

export default {
  title: 'Container/ProjectExplanation',
  component: ProjectExplanation,
  parameters: {
    docs: {
      description: {
        component:
          '**ProjectExplanation** 은 프로젝트의 진행기간과 주요설명의 데이터를 렌더링해주는 컴포넌트입니다.',
      },
    },
  },
  argTypes: {},
};

const Template = args => <ProjectExplanation {...args} />;

export const ExampleProjectExplanation = Template.bind({});

ExampleProjectExplanation.args = {
  mainContents: '<h1>프로젝트 설명</h1>',
  startDate: '2021-05-26T12:52:07.000Z',
  endDate: '2021-05-29T00:52:07.000Z',
};
