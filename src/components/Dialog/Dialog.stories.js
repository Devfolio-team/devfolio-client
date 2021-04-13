import Dialog from './Dialog';

export default {
  title: 'Component/Dialog',
  component: Dialog,
  parameters: {
    docs: {
      description: {
        component: '**다이얼로그** 컴포넌트는 팝업 형태의 창을 띄워 정보를 보여주는 화면입니다.',
      },
    },
  },
  argTypes: {},
};

const Template = args => <Dialog {...args} />;

export const ExampleDialog = Template.bind({});

ExampleDialog.args = {
  width: 710,
  height: 500,
};
