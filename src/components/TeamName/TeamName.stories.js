import TeamName from './TeamName';
import { Formik, Form } from 'formik';

// const test = Story => {
//   return () => {
//     const initialValues = {
//       projectName: '',
//       teamNameRadio: '',
//       planIntention: '',
//       techStacks: '',
//       teamNameInput: '',
//     };

//     return (
//       <Formik
//         initialValues={initialValues}
//         onSubmit={values => {
//           console.log(values);
//         }}
//       >
//         <Form>
//           <Story values={initialValues} />
//         </Form>
//       </Formik>
//     );
//   };
// };

export default {
  title: 'Component/TeamName',
  component: TeamName,
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
        component:
          '**TeamName** 팀이름, 부가 설명, 팀 이름이 있는지 여부를 물어보는 라디오 인풋창 그리고 팀이름을 작성할 수 있는 인풋창이 있는 컴포넌트입니다.',
      },
    },
  },
  argTypes: {
    values: { control: 'object' },
  },
};

const Template = args => <TeamName {...args} />;

export const ExampleTeamName = Template.bind({});
