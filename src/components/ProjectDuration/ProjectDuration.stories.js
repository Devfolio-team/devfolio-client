import { ProjectDuration } from 'components';
import { Formik, Form } from 'formik';

export default {
  title: 'Component/ProjectDuration',
  component: ProjectDuration,
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
        <Formik
          initialValues={initialValues}
          onSubmit={values => {
            console.log(values);
          }}
        >
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
        component: '**ProjectDuration** 프로젝트 진행 기간을 입력 할 수 있는 컴포넌트입니다.',
      },
    },
  },
  argTypes: {
    setFieldValue: { action: '체인지!' },
  },
};

const Template = args => <ProjectDuration {...args} />;

export const ExampleProjectDuration = Template.bind({});
