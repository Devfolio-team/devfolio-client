import ProjectNavigator from './ProjectNavigator';

export default {
  title: 'Component/ProjectNavigator',
  component: ProjectNavigator,

  parameters: {
    docs: {
      description: {
        component:
          '**ProjectNavigator** 는 프로젝트의 section을 손쉽게 이동할 수 있게 해주는 네비게이션 역할의 컴포넌트입니다.',
      },
    },
  },
  argTypes: {},
};

const Template = args => <ProjectNavigator {...args} />;

export const ExampleProjectNavigator = Template.bind({});

ExampleProjectNavigator.args = {
  subject: 'Suits',
};
