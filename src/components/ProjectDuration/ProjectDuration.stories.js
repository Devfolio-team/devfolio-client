import { ProjectDuration } from 'components';

export default {
  title: 'Component/ProjectDuration',
  component: ProjectDuration,
  parameters: {
    docs: {
      description: {
        component: '**ProjectDuration** 프로젝트 진행 기간을 입력 할 수 있는 컴포넌트입니다.',
      },
    },
  },
  argTypes: {},
};

const Template = args => <ProjectDuration {...args} />;

export const ExampleProjectDuration = Template.bind({});

ExampleProjectDuration.argTypes = {};
