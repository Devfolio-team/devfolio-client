import ProjectComments from './ProjectComments';

export default {
  title: 'Container/ProjectComments',
  component: ProjectComments,
  parameters: {
    docs: {
      description: {
        component:
          '**ProjectComments** 컴포넌트는 프로젝트에 달린 댓글과 답글을 렌더링 하는 컨테이너 컴포넌트입니다.',
      },
    },
  },
  argTypes: {},
};

const Template = args => <ProjectComments {...args} />;

export const ExampleProjectComments = Template.bind({});

ExampleProjectComments.args = {
  projectId: 27,
};
