import TechStacks from './TechStacks';

export default {
  title: 'Component/TechStacks',
  component: TechStacks,
  parameters: {
    docs: {
      description: {
        component:
          '**TechStacks**는 사용 기술 스택이란 헤딩과 input창에 검색을 하여 나온 결과를 chip으로 만들어주어 사용자에게 보여주는 컴포넌트입니다.',
      },
    },
  },
  argTypes: {
    chipLabels: { control: 'array' },
    onKeyUpHandler: { action: '키 입력!' },
    value: { control: 'text' },
    onChange: { action: '체인지!' },
  },
};

const Template = args => <TechStacks {...args} />;

export const ExampleTechStacks = Template.bind({});
