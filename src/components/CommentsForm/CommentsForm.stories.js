import CommentsForm from './CommentsForm';

export default {
  title: 'Component/CommentsForm',
  component: CommentsForm,
  parameters: {
    docs: {
      description: {
        component:
          '**CommentsForm** 컴포넌트는 사용자가 댓글을 작성하고 등록할 수 있는 컴포넌트 입니다.',
      },
    },
  },
  argTypes: {},
};

const Template = args => <CommentsForm {...args} />;

export const ExampleCommentsForm = Template.bind({});

ExampleCommentsForm.args = {};
