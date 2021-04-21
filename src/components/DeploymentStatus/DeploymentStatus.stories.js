import DeploymentStatus from './DeploymentStatus';
import { Formik, Form } from 'formik';

export default {
  title: 'Component/DeploymentStatus',
  component: DeploymentStatus,
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
            <Story values={initialValues} />
          </Form>
        </Formik>
      );
    },
  ],
  parameters: {
    docs: {
      description: {
        component:
          '**DeploymentStatus** 프로젝트 배포 여부를 체크하고 배포됬을시 배포된 사이트의 주소를 입력할 수 있는 컴포넌트입니다.',
      },
    },
  },
  argTypes: {
    values: { control: 'object' },
  },
};

const Template = args => <DeploymentStatus {...args} />;

export const ExampleDeplomentStatus = Template.bind({});
