import NestedComment from './NestedComment';

export default {
  title: 'Component/NestedComment',
  component: NestedComment,
  parameters: {
    docs: {
      description: {
        component:
          '**NestedComment** 컴포넌트는 사용자가 답글을 작성하고 등록할 수 있는 컴포넌트 입니다.',
      },
    },
  },
  argTypes: {},
};

const Template = args => <NestedComment {...args} />;

export const ExampleNestedComment = Template.bind({});

ExampleNestedComment.args = {};
