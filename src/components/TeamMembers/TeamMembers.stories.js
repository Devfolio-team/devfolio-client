import TeamMembers from './TeamMembers';

export default {
  title: 'Component/TeamMembers',
  component: TeamMembers,
  parameters: {
    docs: {
      description: {
        component:
          '**TeamMembers** 컴포넌트는 데이터를 받아 팀원들의 목록을 렌더링해주는 컴포넌트입니다.',
      },
    },
  },
  argTypes: {},
};

const Template = args => <TeamMembers {...args} />;

export const ExampleTeamMembers = Template.bind({});

ExampleTeamMembers.args = {
  teamMembers: [
    {
      member_github_url: 'https://github.com/HaJunRyu',
      member_name: 'HajunRyu',
      project_project_id: 103,
      project_team_members_id: 1,
    },
    {
      member_github_url: 'https://github.com/bcround',
      member_name: 'bcround',
      project_project_id: 103,
      project_team_members_id: 2,
    },
    {
      member_github_url: 'https://github.com/choisuhyeok1255',
      member_name: 'choisuhyeok',
      project_project_id: 103,
      project_team_members_id: 3,
    },
  ],
};
