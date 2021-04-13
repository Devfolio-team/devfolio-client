import HeaderBar from './HeaderBar';

export default {
  title: 'Container/HeaderBar',
  component: HeaderBar,
  parameters: {
    docs: {
      description: {
        component:
          '**Header** 컴포넌트는 애플리케이션 뷰의 최상단에 위치 할 컨테이너 컴포넌트입니다. 가로 길이가 길어 스토리북상에서는 짤려서 보이니 축소하거나 새창에서 확인해주세요.',
      },
    },
  },
  argTypes: {},
};

const Template = args => <HeaderBar {...args} />;

export const HeaderBarLight = Template.bind({});

HeaderBarLight.args = {};
