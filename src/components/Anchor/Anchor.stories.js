import Anchor from './Anchor';

export default {
  title: 'Component/Anchor',
  component: Anchor,
  parameters: {
    docs: {
      description: {
        component: '**Anchor** 컴포넌트는 클릭했을때 href값에 설정된 페이지로 이동시켜줍니다.',
      },
    },
  },
  argTypes: {
    display: { control: 'text' },
    color: { control: 'color' },
    fontSize: { control: 'number' },
    margin: { control: 'text' },
    padding: { control: 'text' },
    width: { control: 'number' },
    height: { control: 'number' },
    href: { control: 'text' },
    target: {
      control: {
        type: 'radio',
        options: ['_self', '_blank'],
      },
    },
  },
};

const Template = args => <Anchor {...args} />;

export const ExampleAnchor = Template.bind({});

ExampleAnchor.args = {
  children: '프로젝트 저장소로 이동',
  href: 'https://github.com/Devfolio-team',
  target: '_blank',
  fontSize: 2,
};
