import HeaderBar from './HeaderBar';
import { addDecorator } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import useDetectViewport from 'hooks/useDetectViewport';
import { Container } from 'components';

// 스토리북에서의 Router오류 방지를 위한 decorator
addDecorator(StoryRouter());

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

const Template = args => {
  const viewport = useDetectViewport();
  return (
    <Container position="relative" height={64}>
      <HeaderBar viewport={viewport} {...args} />
    </Container>
  );
};

export const HeaderBarLight = Template.bind({});

HeaderBarLight.args = {};
