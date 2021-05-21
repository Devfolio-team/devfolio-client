import Comment from './Comment';

export default {
  title: 'Component/Comments',
  component: Comment,
  parameters: {
    docs: {
      description: {
        component:
          '**Comment** 컴포넌트는 사용자가 댓글을 작성하고 등록할 수 있는 컴포넌트 입니다.',
      },
    },
  },
  argTypes: {},
};

const Template = args => <Comment {...args} />;

export const ExampleComment = Template.bind({});

ExampleComment.args = {
  data: {
    comment_id: 1,
    contents: '스토리북에 Comment 컴포넌트를 렌더링 합니다.',
    created: '2021-05-20 00:45:34',
    is_deleted: 0,
    nickname: 'HajunRyu',
    profile_photo:
      'https://lh3.googleusercontent.com/a-/AOh14GhtpT7YH6EriNYjuPcuXRK6J-weil804Xl8sNWl=s350-c',
    user_user_id: 1,
  },
  commentsData: [],
  projectId: 1,
};
