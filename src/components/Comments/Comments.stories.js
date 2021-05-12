import Comments from './Comments';

export default {
  title: 'Component/Comments',
  component: Comments,
  parameters: {
    docs: {
      description: {
        component:
          '**Comments** 컴포넌트는 사용자가 댓글을 작성하고 등록할 수 있는 컴포넌트 입니다.',
      },
    },
  },
  argTypes: {},
};

const Template = args => <Comments {...args} />;

export const ExampleComments = Template.bind({});

ExampleComments.args = {};
