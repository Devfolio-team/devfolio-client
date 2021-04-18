import LoginModalDialog from './LoginModalDialog';
import viewport from '../../utils/applyStyle';
import { forwardRef, React } from 'react';

export default {
  title: 'Component/LoginModalDialog',
  component: LoginModalDialog,
  parameters: {
    docs: {
      description: {
        component: '**로그인모달다이어로그** 컴포넌트는 로그인을 하기 위한 모달다이어로그 입니다. ',
      },
    },
  },
  argTypes: {},
};

const Template = args => <LoginModalDialog {...args}>{args.children}</LoginModalDialog>;

export const ExampleLoginModalDialog = Template.bind({});

ExampleLoginModalDialog.args = { viewport, forwardRef };
