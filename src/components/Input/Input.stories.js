import Input from './Input';

export default {
  title: 'Component/Input',
  component: Input,
  parameters: {
    docs: {
      description: {
        component:
          '**Input** 컴포넌트는 웹 기반 양식에서 사용자의 데이터를 받을 수 있는 대화형 컨트롤 입니다.',
      },
    },
  },
  argTypes: {
    id: { control: 'text' },
    type: { control: 'text' },
    label: { control: 'text' },
    width: { control: 'number' },
    height: { control: 'number' },
    fontSize: { control: 'number' },
    fontWeight: { control: 'number' },
    color: { control: 'color' },
    borderRadius: { control: 'number' },
    border: { control: 'text' },
    mode: { control: 'text' },
    margin: { control: 'text' },
    display: { control: 'text' },
  },
};

const Template = args => <Input {...args} />;

export const ExampleInput = Template.bind({});

ExampleInput.args = {
  label: 'Example',
  id: 'exInput1',
};
