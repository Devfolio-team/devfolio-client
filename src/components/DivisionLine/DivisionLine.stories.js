import DivisionLine from './DivisionLine';

export default {
  title: 'Component/DivisionLine',
  component: DivisionLine,
  parameters: {
    docs: {
      description: {
        component: '**DivisionLine** 컴포넌트는 문단 사이의 구분선을 그어주는 선입니다.',
      },
    },
  },
  argTypes: {
    width: { control: 'text' },
  },
};

const Template = args => <DivisionLine {...args} />;

export const ExampleDivisionLine = Template.bind({});

ExampleDivisionLine.args = {
  width: '500px',
};
