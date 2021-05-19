import NestedCommentsForm from './NestedCommentsForm';

export default {
  title: 'Component/NestedCommentsForm',
  component: NestedCommentsForm,
  parameters: {
    docs: {
      description: {
        component:
          '**NestedCommentsForm** 컴포넌트는 사용자가 답글을 작성하고 등록할 수 있는 컴포넌트 입니다.',
      },
    },
  },
  argTypes: {},
};

const Template = args => <NestedCommentsForm {...args} />;

export const ExampleNestedCommentsForm = Template.bind({});

ExampleNestedCommentsForm.args = {
  projectId: 1,
  commentId: 1,
  dispatch: () => {},
  seq: 0,
};
