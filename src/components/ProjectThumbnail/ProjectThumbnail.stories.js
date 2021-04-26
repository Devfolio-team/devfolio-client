import ProjectThumbnail from './ProjectThumbnail';
import { Formik, Form } from 'formik';

export default {
  title: 'Component/ProjectThumbnail',
  component: ProjectThumbnail,
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
          '**ProjectThumbnail** drap and drop으로 이미지를 업로트할 수 있는 컴포넌트입니다.',
      },
    },
  },
  argTypes: {
    setFieldValue: { action: '체인지!' },
  },
};

const Template = args => <ProjectThumbnail {...args} />;

export const ExampleProjectThumbnail = Template.bind({});
