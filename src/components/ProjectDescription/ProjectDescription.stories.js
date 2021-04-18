import ProjectDescription from './ProjectDescription';

export default {
  title: 'Component/ProjectDescription',
  component: ProjectDescription,
  parameters: {
    docs: {
      description: {
        component:
          '**ProjectDescription** 프로젝트에 대한 설명을 적을 수 있는 에디터가 있는 컴포넌트입니다.',
      },
    },
  },
};

const Template = args => <ProjectDescription {...args} />;

export const ExampleProjectDescription = Template.bind({});
