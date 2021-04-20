import ProjectName from './ProjectName';
import { Formik, Form } from 'formik';

export default {
  title: 'Component/ProjectName',
  component: ProjectName,
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
        component:
          '**ProjectName** 프로젝트이름, 부가 설명, 그리고 프로젝트이름을 작성할 수 있는 인풋창이 있는 컴포넌트입니다.',
      },
    },
  },
};

const Template = args => <ProjectName {...args} />;

export const ExampleProjectName = Template.bind({});
