import Container from './Container';

export default {
  title: 'Component/Container',
  component: Container,
  parameters: {
    docs: {
      description: {
        component:
          '**Container** 컴포넌트는 애플리케이션의 스타일링을 위해 요소들을 랩핑해야 할 때 사용 할 수 있습니다.',
      },
    },
  },
  argTypes: {
    display: { control: 'text' },
    width: { control: 'number' },
    height: { control: 'number' },
    background: { control: 'text' },
    padding: { control: 'text' },
    margin: { control: 'text' },
    flexFlow: { control: 'text' },
    justifyContent: { control: 'text' },
    alignItems: { control: 'text' },
    position: { control: 'text' },
    border: { control: 'text' },
    top: { control: 'number' },
    left: { control: 'number' },
    bottom: { control: 'number' },
    right: { control: 'number' },
    borderRadius: { control: 'text ' },
  },
};

const Template = args => <Container {...args}>{args.children}</Container>;

export const ExampleContainer = Template.bind({});

ExampleContainer.args = {
  width: 385,
  height: 812,
  // 스토리북 렌더링을 위한 배경색 설정
  background: '#cccccc',
};
