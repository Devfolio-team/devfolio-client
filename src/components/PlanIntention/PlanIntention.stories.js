import PlanIntention from './PlanIntention';

export default {
  title: 'Component/PlanIntention',
  component: PlanIntention,
  parameters: {
    docs: {
      description: {
        component:
          '**PlanIntention** 프로젝트의 기획 의도를 작성할 수 있는 TextArea가 있는 컴포넌트입니다.',
      },
    },
  },
  argTypes: {
    value: { control: 'text' },
    onChange: { action: '체인지!' },
  },
};

const Template = args => <PlanIntention {...args} />;

export const ExamplePlanIntention = Template.bind({});

ExamplePlanIntention.argTypes = {
  value: 'Example',
};
