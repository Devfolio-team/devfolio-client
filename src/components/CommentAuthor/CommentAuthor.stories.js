import CommentAuthor from './CommentAuthor';

export default {
  title: 'Component/CommentAuthor',
  component: CommentAuthor,
  parameters: {
    docs: {
      description: {
        component: '**CommentAuthor** 컴포넌트는 댓글을 쓴 사용자의 정보들을 나타내줍니다.',
      },
    },
  },
  argTypes: {},
};

const Template = args => <CommentAuthor {...args} />;

export const ExampleCommentAuthor = Template.bind({});

ExampleCommentAuthor.args = {};
