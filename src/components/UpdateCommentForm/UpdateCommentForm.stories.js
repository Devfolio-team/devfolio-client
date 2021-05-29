import UpdateCommentForm from './UpdateCommentForm';

export default {
  title: 'Component/UpdateCommentForm',
  component: UpdateCommentForm,
  parameters: {
    docs: {
      description: {
        component:
          '**UpdateCommentForm** 컴포넌트는 사용자가 댓글과 답글을 수정 할 수 있는 컴포넌트 입니다.',
      },
    },
  },
  argTypes: {},
};

const Template = args => <UpdateCommentForm {...args} />;

export const ExampleUpdateCommentForm = Template.bind({});

ExampleUpdateCommentForm.args = {
  contents: '',
  projectId: 1,
  commentId: 1,
  dispatch: () => {},
  onDisableUpdateModeHandler: () => {},
};
