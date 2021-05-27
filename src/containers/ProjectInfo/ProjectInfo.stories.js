import ProjectInfo from './ProjectInfo';

export default {
  title: 'Container/ProjectInfo',
  component: ProjectInfo,
  parameters: {
    docs: {
      description: {
        component:
          '**ProjectInfo** 프로젝트의 제목, 팀 이름, 수정 삭제 버튼, 좋아요버튼, 배포주소, 깃허브 주소, 썸네일을 포함하고 있는 컨테이너 컴포넌트입니다.',
      },
    },
  },
  argTypes: {},
};

const Template = args => <ProjectInfo {...args} />;

export const ExampleProjectInfo = Template.bind({});

ExampleProjectInfo.args = {
  subject: 'Suits',
  team_name: 'Suits',
  onDeleteModalOpenHandler() {},
  projectData: { project_id: 26 },
  onLikeCountPlusHandler() {},
  isLike: true,
  likeCount: 5,
  deploy_url: null,
  github_url: null,
  thumbnail: 'https://github.com/HaJunRyu/FDS18_RWD/raw/master/_ASSETS_/cover.jpg',
  ref: null,
};
