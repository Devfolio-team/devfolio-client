import EmptyMessage from './EmptyMessage';

export default {
  title: 'Component/EmptyMessage',
  component: EmptyMessage,

  parameters: {
    docs: {
      description: {
        component:
          '**EmptyMessage** 는 데이터가 비었을때 사용자에게 알려주기 위한 스타일을 적용시켜주는 컴포넌트입니다.',
      },
    },
  },
};

const Template = args => <EmptyMessage>텅 -</EmptyMessage>;

export const ExampleEmptyMessage = Template.bind({});
