import SectionHeading from './SectionHeading';

export default {
  title: 'Component/SectionHeading',
  component: SectionHeading,
  parameters: {
    docs: {
      description: {
        component:
          '**SectionHeading** 컴포넌트는 프로젝트 조회 페이지에서 각각의 section에 반복적으로 사용되는 컴포넌트입니다.',
      },
    },
  },
  argTypes: {
    id: { control: 'text' },
  },
};

const Template = args => <SectionHeading {...args} />;

export const ExampleSectionHeading = Template.bind({});

ExampleSectionHeading.args = {
  id: '사용기술스택',
  children: '사용 기술 스택',
};
