import CommentRegistButton from './CommentRegistButton';

export default {
  title: 'Component/CommentRegistButton',
  component: CommentRegistButton,
  parameters: {
    docs: {
      description: {
        component:
          '**CommentRegistButton** 컴포넌트는 사용자가 댓글을 작성하고 등록할 수 있는 컴포넌트 입니다.',
      },
    },
  },
  argTypes: {},
};

const Template = args => <CommentRegistButton {...args}>댓글 등록</CommentRegistButton>;

export const ExampleCommentRegistButton = Template.bind({});

ExampleCommentRegistButton.args = {
  onClick() {},
  disabled: true,
};
