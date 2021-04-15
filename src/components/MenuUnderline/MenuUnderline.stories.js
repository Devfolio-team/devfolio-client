import MenuUnderline from './MenuUnderline';

export default {
  title: 'Component/MenuUnderline',
  component: MenuUnderline,
  parameters: {
    docs: {
      description: {
        component:
          '**MenuUnderline** 컴포넌트는 홈페이지에서 선택된 메뉴를 하이라이팅을 해주는 용도로 사용됩니다. ',
      },
    },
  },
  argTypes: {
    fontSize: { control: 'number' },
    position: { control: 'text' },
    top: { control: 'text' },
    right: { control: 'text' },
    bottom: { control: 'text' },
    left: { control: 'text' },
    transform: { control: 'text' },
  },
};

const Template = args => <MenuUnderline {...args} />;

export const ExampleMenuUnderline = Template.bind({});

ExampleMenuUnderline.args = {};
