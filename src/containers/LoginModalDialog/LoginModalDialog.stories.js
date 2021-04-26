import LoginModalDialog from './LoginModalDialog';
import { React, useRef } from 'react';
import useDetectViewport from 'hooks/useDetectViewport';

export default {
  title: 'Container/LoginModalDialog',
  component: LoginModalDialog,
  parameters: {
    docs: {
      description: {
        component: '**LoginModalDialog** 컴포넌트는 로그인을 하기 위한 모달다이어로그 입니다. ',
      },
    },
  },
  argTypes: {},
};

const Template = args => {
  const ref = useRef(null);
  const viewport = useDetectViewport();
  return (
    <LoginModalDialog ref={ref} viewport={viewport} {...args}>
      {args.children}
    </LoginModalDialog>
  );
};

export const ExampleLoginModalDialog = Template.bind({});

ExampleLoginModalDialog.args = {};
