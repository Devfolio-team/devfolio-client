import PublicStatus from './PublicStatus';
import { Formik, Form } from 'formik';

export default {
  title: 'Component/PublicStatus',
  component: PublicStatus,
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
            <Story values={initialValues} />
          </Form>
        </Formik>
      );
    },
  ],
  parameters: {
    docs: {
      description: {
        component: '**PublicStatus** 프로젝트 공개여부를 정할 수 있는 컴포넌트입니다.',
      },
    },
  },
};

const Template = args => <PublicStatus {...args} />;

export const ExamplePublicStatus = Template.bind({});
