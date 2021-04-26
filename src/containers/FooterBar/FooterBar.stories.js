import FooterBar from './FooterBar';

export default {
  title: 'Container/FooterBar',
  component: FooterBar,
  parameters: {
    docs: {
      description: {
        component:
          '**FooterBar** 컴포넌트는 애플리케이션 뷰의 최하단에 위치 할 컨테이너 컴포넌트입니다. 가로 길이가 길어 스토리북상에서는 짤려서 보이니 축소하거나 새창에서 확인해주세요.',
      },
    },
  },
  argTypes: {},
};

const Template = args => <FooterBar {...args} />;

export const FooterBarBlack = Template.bind({});

FooterBarBlack.args = {};
