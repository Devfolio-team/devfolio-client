import Input from './Input';

export default {
  title: 'Component/Input',
  component: Input,
  parameters: {
    docs: {
      description: {
        component:
          '**인풋** 컴포넌트는 웹 기반 양식에서 사용자의 데이터를 받을 수 있는 대화형 컨트롤 입니다.',
      },
    },
  },
  argTypes: {
    id: { control: 'text' },
    width: { control: 'number' },
    height: { control: 'number' },
    fontSize: { control: 'number' },
    fontWeight: { control: 'number' },
    fontColor: { control: 'color' },
    borderRadius: { control: 'number' },
  },
};

const Template = args => <Input {...args} />;

export const ExampleInput = Template.bind({});
