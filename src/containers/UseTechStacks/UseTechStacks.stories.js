import UseTechStacks from './UseTechStacks';

export default {
  title: 'Container/UseTechStacks',
  component: UseTechStacks,
  parameters: {
    docs: {
      description: {
        component:
          '**UseTechStacks** 컴포넌트는 유저가 등록한 프로젝트에서 사용된 기술스택들을 렌더링해주는 컴포넌트입니다.',
      },
    },
  },
  argTypes: {},
};

const Template = args => <UseTechStacks {...args} />;

export const ExampleUseTechStacks = Template.bind({});

ExampleUseTechStacks.args = {
  techStacks: [{ project_tech_stacks_id: 1, tech_name: 'React' }],
};
