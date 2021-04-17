import ProjectName from './ProjectName';

export default {
  title: 'Component/ProjectName',
  component: ProjectName,
  parameters: {
    docs: {
      description: {
        component:
          '**ProjectName** 프로젝트이름, 부가 설명, 그리고 프로젝트이름을 작성할 수 있는 인풋창이 있는 컴포넌트입니다.',
      },
    },
  },
  argTypes: {
    id: { control: 'text' },
    value: { control: 'text' },
    onChange: { action: '체인지!' },
  },
};

const Template = args => <ProjectName {...args} />;

export const ExampleProjectName = Template.bind({});

ExampleProjectName.argTypes = {
  id: 'example-1',
  value: 'Example',
};
