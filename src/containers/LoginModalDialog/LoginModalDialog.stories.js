import { HeaderBar } from 'containers';
import useDetectViewport from 'hooks/useDetectViewport';
import { useState } from 'react';
import LoginModalDialog from './LoginModalDialog';

export default {
  title: 'Container/LoginModalDialog',
  component: LoginModalDialog,
  parameters: {
    docs: {
      description: {
        component: '**LoginModalDialog** 로그인을 하기 위한 모달창 입니다.',
      },
    },
  },
  argTypes: {},
};

const Template = args => {
  const viewport = useDetectViewport();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <HeaderBar viewport={viewport} {...args}></HeaderBar>
      <LoginModalDialog viewport={viewport} setIsModalOpen={setIsModalOpen} {...args} />;
    </>
  );
};

export const ExampleLoginModalDialog = Template.bind({});

ExampleLoginModalDialog.args = {};
