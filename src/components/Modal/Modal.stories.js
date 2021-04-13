import Modal from './Modal';

export default {
  title: 'Component/Modal',
  component: Modal,
  parameters: {
    docs: {
      description: {
        component:
          '**모달** 컴포넌트는 다이어로그창 배경 부분으로 사용하며 어두운색의 투명도를 주어서 사용하는 컴포넌트입니다.',
      },
    },
  },
  argTypes: {},
};

const Template = args => <Modal {...args} />;

export const ExampleModal = Template.bind({});
