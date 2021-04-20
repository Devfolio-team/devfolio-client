import ChipInputSearch from './ChipInputSearch';
import { Formik, Form } from 'formik';

export default {
  title: 'Component/ChipInputSearch',
  component: ChipInputSearch,
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
          '**ChipInputSearch** 컴포넌트는 input창에 검색을 하여 나온 결과를 chip으로 만들어주어 사용자에게 보여줍니다.',
      },
    },
  },
  argTypes: {
    id: { control: 'text' },
    setFieldValue: { action: '체인지!' },
  },
};

const Template = args => <ChipInputSearch {...args} />;

export const ExampleChipInputSearch = Template.bind({});
