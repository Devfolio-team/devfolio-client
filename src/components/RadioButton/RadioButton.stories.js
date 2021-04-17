import RadioButton from './RadioButton';

export default {
  title: 'Component/RadioButton',
  component: RadioButton,
  parameters: {
    docs: {
      description: {
        component:
          '**RadioButton** 컴포넌트는 클릭으로 사용자와 상호작용(interaction) 하여 옵션을 제어(control) 하는 컨트롤입니다.',
      },
    },
  },
  argTypes: {
    name: { control: 'text' },
    id: { control: 'text' },
    value: { control: 'text' },
    checked: { control: 'boolean' },
    label: { control: 'text' },
    fontSize: { control: 'number' },
    fontWeight: { control: 'text' },
    color: { control: 'color' },
    onChange: { action: '체인지!' },
    margin: { control: 'text' },
  },
};

const Template = args => <RadioButton {...args} />;

export const ExampleRadioButton = Template.bind({});

ExampleRadioButton.args = {
  name: 'radio',
  value: 'radio',
  id: 'rd-1',
};
