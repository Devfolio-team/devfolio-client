import DND from './DND';
import { Formik, Form } from 'formik';

export default {
  title: 'Component/DND',
  component: DND,
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
        component: '**DND** 컴포넌트는 drap and drop으로 이미지를 업로트할 수 있는 컨트롤입니다.',
      },
    },
  },
  argTypes: {
    setFieldValue: { action: '체인지!' },
  },
};

const Template = args => <DND {...args} />;

export const ExampleDND = Template.bind({});
