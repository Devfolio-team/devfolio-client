import CommentTextArea from './CommentTextArea';

export default {
  title: 'Component/CommentTextArea',
  component: CommentTextArea,
  parameters: {
    docs: {
      description: {
        component: '**CommentTextArea** 컴포넌트는 사용자가 댓글을 작성하는 form 내부 요소입니다.',
      },
    },
  },
  argTypes: {},
};

const Template = args => <CommentTextArea {...args} />;

export const ExampleCommentTextArea = Template.bind({});

ExampleCommentTextArea.args = {
  id: 'commentForm',
  label: '댓글을 입력해주세요.',
  width: 300,
};
