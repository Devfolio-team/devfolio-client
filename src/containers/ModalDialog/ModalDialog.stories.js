import { Button } from 'components';
import useDetectViewport from 'hooks/useDetectViewport';
import { useRef, useState } from 'react';
import ModalDialog from './ModalDialog';

export default {
  title: 'Container/ModalDialog',
  component: ModalDialog,
  parameters: {
    docs: {
      description: {
        component:
          '**ModalDialog** 컴포넌트는 클릭으로 사용자와 상호작용(interaction) 하여 제어(contorl) 하는 컨트롤입니다.',
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
        ModalDialog Open
      </Button>
      {isModalOpen ? (
        <ModalDialog
          viewport={viewport}
          setIsModalOpen={setIsModalOpen}
          beforeRef={beforeRef}
          {...args}
        />
      ) : null}
    </>
  );
};

export const ExampleModalDialog = Template.bind({});

ExampleModalDialog.args = {
  width: '500px',
  height: '500px',
};
