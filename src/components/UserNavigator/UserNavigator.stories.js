import { UserNavigator } from 'components';
import useDetectViewport from 'hooks/useDetectViewport';

export default {
  title: 'Component/UserNavigator',
  component: UserNavigator,
  parameters: {
    docs: {
      description: {
        component:
          '**UserNavigator** 는 로그인 하였을시 유저가 특정 페이지로의 이동하거나 기능을 이용할 수 있는 요소들을 담고 있는 메뉴 리스트 컴포넌트입니다.  ',
      },
    },
  },
  argTypes: {},
};

const Template = args => {
  const viewport = useDetectViewport();
  return <UserNavigator viewport={viewport} {...args} />;
};

export const ExampleUserNavigator = Template.bind({});

ExampleUserNavigator.args = {
  height: 171,
  tabIndex: 0,
};
