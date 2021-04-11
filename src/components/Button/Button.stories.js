import Button from './Button';

export default {
  title: 'Component/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component:
          '**버튼** 컴포넌트는 클릭으로 사용자와 상호작용(interaction) 하여 제어(contorl) 하는 컨트롤입니다.',
      },
    },
  },
  argTypes: {
    onClick: { action: '버튼 클릭' },
    bgColor: { control: 'color' },
    fontColor: { control: 'color' },
    width: { control: 'number' },
    height: { control: 'number' },
    fontSize: { control: 'number' },
    fontWeight: { control: 'number' },
    borderRadius: { control: 'number' },
  },
};

const Template = args => <Button {...args} />;

export const ExampleButton = Template.bind({});

ExampleButton.args = {
  children: 'Example',
};
