import Member from './Member';

export default {
  title: 'Component/Member',
  component: Member,
  parameters: {
    docs: {
      description: {
        component:
          '**Member** 컴포넌트는 팀원 목록에서 팀원들의 이름, github url을 렌더링 해주는 컴포넌트입니다. ',
      },
    },
  },
  argTypes: {},
};

const Template = args => <Member {...args} />;

export const ExampleMember = Template.bind({});

ExampleMember.args = {
  name: 'HajunRyu',
  githubUrl: 'https://github.com/HaJunRyu',
};
