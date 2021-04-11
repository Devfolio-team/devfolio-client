import Paragraph from './Paragraph';

export default {
  title: 'Component/Paragraph',
  component: Paragraph,
  parameters: {
    docs: {
      description: {
        component: '**Paragraph** 컴포넌트는 문서의 내용을 서술하기 위한 컴포넌트입니다. ',
      },
    },
  },
  argTypes: {
    color: { control: 'color' },
    fontSize: { control: 'number' },
  },
};

const Template = args => <Paragraph {...args}>{args.children}</Paragraph>;

export const ExampleHeading = Template.bind({});

ExampleHeading.args = {
  children: '포트폴리오에 보여질 자기 소개를 최대한 자세히 적어주세요!',
  color: '#666666',
  fontSize: 2.4,
};
