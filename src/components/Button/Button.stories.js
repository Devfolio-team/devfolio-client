import Button from './Button';

export default {
  title: 'Component/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component:
          '**Button** 컴포넌트는 클릭으로 사용자와 상호작용(interaction) 하여 제어(contorl) 하는 컨트롤입니다.',
      },
    },
  },
  argTypes: {
    onClick: { action: '버튼 클릭' },
    type: { control: 'text' },
    width: { control: 'number' },
    height: { control: 'number' },
    background: { control: 'text' },
    color: { control: 'color' },
    fontSize: { control: 'number' },
    fontWeight: { control: 'number' },
    border: { control: 'text' },
    borderRadius: { control: 'number' },
    padding: { control: 'text' },
    position: { control: 'text' },
    top: { control: 'text' },
    right: { control: 'text' },
    left: { control: 'text' },
    bottom: { control: 'text' },
    margin: { control: 'text' },
    display: { control: 'text' },
  },
};

const Template = args => <Button {...args} />;

export const ExampleButton = Template.bind({});

ExampleButton.args = {
  children: 'Example',
};
