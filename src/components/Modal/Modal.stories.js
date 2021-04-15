import Modal from './Modal';

export default {
  title: 'Component/Modal',
  component: Modal,
  parameters: {
    docs: {
      description: {
        component:
          '**모달** 컴포넌트는 다이얼로그창의 백그라운드로 사용되며 모달컴포넌트 이외의 영역은 클릭되지 않게 합니다.',
      },
    },
  },
  argTypes: {},
};

const Template = args => <Modal {...args} />;

export const ExampleModal = Template.bind({});
