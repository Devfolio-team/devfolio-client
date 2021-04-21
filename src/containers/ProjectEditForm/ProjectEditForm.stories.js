import ProjectEditForm from './ProjectEditForm';

export default {
  title: 'Container/ProjectEditForm',
  component: ProjectEditForm,
  parameters: {
    docs: {
      description: {
        component:
          '**ProjectEditForm** 팀이름, 부가 설명, 팀 이름이 있는지 여부를 물어보는 라디오 인풋창 그리고 팀이름을 작성할 수 있는 인풋창이 있는 컴포넌트입니다.',
      },
    },
  },
  argTypes: {
    value: { control: 'object' },
  },
};

const Template = args => <ProjectEditForm {...args} />;

export const ExampleProjectEditForm = Template.bind({});
