import TechStacks from './TechStacks';
import { Formik, Form } from 'formik';

export default {
  title: 'Component/TechStacks',
  component: TechStacks,
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
          '**TechStacks**는 사용 기술 스택이란 헤딩과 input창에 검색을 하여 나온 결과를 chip으로 만들어주어 사용자에게 보여주는 컴포넌트입니다.',
      },
    },
  },
  argTypes: {
    setFieldValue: { action: '체인지!' },
  },
};

const Template = args => <TechStacks {...args} />;

export const ExampleTechStacks = Template.bind({});
