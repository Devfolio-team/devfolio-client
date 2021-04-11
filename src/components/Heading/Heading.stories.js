import Heading from './Heading';

export default {
  title: 'Component/Heading',
  component: Heading,
  parameters: {
    docs: {
      description: {
        component: '**Heading** 컴포넌트는 as props를 받아서 h1~h6 중 하나를 사용 할 수 있습니다.',
      },
    },
  },
  argTypes: {
    color: { control: 'color' },
    fontSize: { control: 'number' },
    backgroundColor: { control: 'string' },
  },
};

const Template = args => <Heading {...args}>{args.children}</Heading>;

export const ExampleHeading = Template.bind({});

ExampleHeading.args = {
  children: '김지원',
  color: '#FFFFFF',
  fontSize: 6.4,
  //스토리북에서 default color가 흰색이라서 배경으로 검은색 했음.
  backgroundColor: '#000000',
};
