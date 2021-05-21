import NestedComment from './NestedComment';

export default {
  title: 'Component/NestedComment',
  component: NestedComment,
  parameters: {
    docs: {
      description: {
        component: '**NestedComment** 컴포넌트는 댓글에 대한 답글을 렌더링 해주는 컴포넌트 입니다.',
      },
    },
  },
  argTypes: {},
};

const Template = args => <NestedComment {...args} />;

export const ExampleNestedComment = Template.bind({});

ExampleNestedComment.args = {
  data: {
    contents: '스토리북에 답글을 렌더링합니다.',
    created: '2021-05-20 00:49:52',
    is_deleted: 0,
    nickname: 'HajunRyu',
    profile_photo:
      'https://lh3.googleusercontent.com/a-/AOh14GhtpT7YH6EriNYjuPcuXRK6J-weil804Xl8sNWl=s350-c',
    user_user_id: 1,
    projectId: 1,
  },
};
