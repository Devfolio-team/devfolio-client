import Heading from './Heading';

export default {
  title: 'Component/Heading',
  componenet: Heading,
  parameters: {
    docs: {
      discription: {
        component: '**Heading** 컴포넌트는 as props를 받아서 h1~h6 중 하나를 사용 할 수 있습니다.',
      },
    },
  },
  argTypes: {
    color: { control: 'color' },
    fontSize: { control: 'number' },
    backgroundColor: { constrol: 'string' },
  },
};

const Template = args => <Heading {...args} />;

export const ExampleHeading = Template.bind({});

ExampleHeading.args = {
  children: '김지원',
  color: '#FFFFFF',
  fontSize: 6.4,
  backgroundColor: '#000000',
};
