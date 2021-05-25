import ProjectTeamMember from './ProjectTeamMember';
import { Formik, Form } from 'formik';

export default {
  title: 'Component/ProjectTeamMember',
  component: ProjectTeamMember,
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
          '**ProjectTeamMember** 프로젝트의 팀 구성원들의 이름과 Github 레포 주소를 작성할 수 있는 인풋창이 있는 컴포넌트입니다.',
      },
    },
  },
};

const Template = args => <ProjectTeamMember {...args} />;

export const ExampleProjectTeamMember = Template.bind({});
