import { Formik, Form } from 'formik';
import { TeamName, PlanIntention, ProjectThumbnail, TechStacks, ProjectName } from 'components';

const ProjectEditForm = () => {
  return (
    <Formik
      initialValues={{
        projectName: '',
        teamNameRadio: '',
        planIntention: '',
        techStacks: '',
        teamNameInput: '',
      }}
      onSubmit={values => {
        console.log(values);
      }}
    >
      {({ values, setFieldValue }) => {
        return (
          <Form>
            <ProjectName />
            <TeamName values={values} />
            <PlanIntention />
            <TechStacks setFieldValue={setFieldValue} />
            <ProjectThumbnail setFieldValue={setFieldValue} />
            <button type="submit">submit</button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default ProjectEditForm;
