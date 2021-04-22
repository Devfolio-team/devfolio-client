import PlanIntention from './PlanIntention';
import { Formik, Form } from 'formik';

export default {
  title: 'Component/PlanIntention',
  component: PlanIntention,
  decorators: [
    Story => {
      const initialValues = {
        projectName: '',
        teamNameRadio: '',
        planIntention: '',
        techStacks: '',
        teamNameInput: '',
      };

      return (
        <Formik initialValues={initialValues} onSubmit={values => {}}>
          <Form>
            <Story />
          </Form>
        </Formik>
      );
    },
  ],
  parameters: {
    docs: {
      description: {
        component:
          '**PlanIntention** 프로젝트의 기획 의도를 작성할 수 있는 TextArea가 있는 컴포넌트입니다.',
      },
    },
  },
};

const Template = args => <PlanIntention {...args} />;

export const ExamplePlanIntention = Template.bind({});

ExamplePlanIntention.argTypes = {
  value: 'Example',
};
