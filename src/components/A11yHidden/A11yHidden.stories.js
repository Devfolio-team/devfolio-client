import A11yHidden from './A11yHidden';

export default {
  title: 'Component/A11yHidden',
  component: A11yHidden,
  parameters: {
    docs: {
      description: {
        component:
          '**A11yHidden**는 요소를 화면에서 감추되, 스크린 리더에서 읽힐 수 있도록 하는 컴포넌트입니다.',
      },
    },
  },
};

const Template = args => <A11yHidden {...args} />;

export const ExampleA11yHidden = Template.bind({});
