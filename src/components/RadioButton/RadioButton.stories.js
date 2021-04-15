import RadioButton from './RadioButton';

export default {
  title: 'Component/RadioButton',
  component: RadioButton,
  parameters: {
    docs: {
      description: {
        component:
          '**RadioButton** 컴포넌트는 클릭으로 사용자와 상호작용(interaction) 하여 옵션을 제어(contorl) 하는 컨트롤입니다.',
      },
    },
  },
  argTypes: {
    name: { control: 'text' },
    id: { control: 'text' },
    value: { control: 'text' },
    checked: { control: 'boolean' },
    children: { control: 'text' },
  },
};

const Template = args => <RadioButton {...args} />;

export const ExampleRadioButton = Template.bind({});

ExampleRadioButton.args = {
  children: 'Example',
  id: 'rd-1',
};
