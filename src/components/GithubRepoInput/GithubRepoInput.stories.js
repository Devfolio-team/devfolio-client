import { GithubRepoInput } from 'components';
import { Formik, Form } from 'formik';

export default {
  title: 'Component/GithubRepoInput',
  component: GithubRepoInput,
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
        component: '**GithubRepoInput** 깃허브 주소를 작성할 수 있는 인풋창이 있는 컴포넌트입니다.',
      },
    },
  },
};

const Template = args => <GithubRepoInput {...args} />;

export const ExampleGithubRepoInput = Template.bind({});
