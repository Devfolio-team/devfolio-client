import { Button } from 'components';
import useDetectViewport from 'hooks/useDetectViewport';
import { useRef, useState } from 'react';
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
  const beforeRef = useRef();

  return (
    <>
      <Button ref={beforeRef} onClick={setIsModalOpen} border="1px solid black">
        로그인
      </Button>
      {isModalOpen ? (
        <LoginModalDialog
          viewport={viewport}
          setIsModalOpen={setIsModalOpen}
          beforeRef={beforeRef}
          {...args}
        />
      ) : null}
    </>
  );
};

export const ExampleLoginModalDialog = Template.bind({});

ExampleLoginModalDialog.args = {};
