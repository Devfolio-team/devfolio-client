import ProjectRegistInfo from './ProjectRegistInfo';

export default {
  title: 'Component/ProjectRegistInfo',
  component: ProjectRegistInfo,

  parameters: {
    docs: {
      description: {
        component:
          '**ProjectRegistInfo** 는 프로젝트를 작성한 날짜와 작성자의 프로필 사진, 닉네임을 렌더링 해주는 컴포넌트입니다.',
      },
    },
  },
  argTypes: {},
};

const Template = args => <ProjectRegistInfo {...args} />;

export const ExampleProjectRegistInfo = Template.bind({});

ExampleProjectRegistInfo.args = {
  projectData: {
    created: '2021-04-19T06:40:56.455Z',
    authorInfo: {
      nickname: 'HajunRyu',
      profile_photo:
        'https://lh3.googleusercontent.com/a-/AOh14GhtpT7YH6EriNYjuPcuXRK6J-weil804Xl8sNWl=s350-c',
    },
    user_user_id: 2,
  },
};
