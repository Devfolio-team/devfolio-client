import { createRef } from 'react';
import { Formik, Form } from 'formik';
import {
  TeamName,
  PlanIntention,
  ProjectThumbnail,
  TechStacks,
  ProjectName,
  GithubRepoInput,
  DeploymentStatus,
  PublicStatus,
  ProjectDuration,
  ProjectDescription,
  Button,
} from 'components';
import { color } from 'utils';

const ProjectEditForm = () => {
  const editorRef = createRef();

  const getContents = () => {
    return editorRef.current.getInstance().getHtml();
  };

  const onGoBackHandler = () => {
    window.history.back();
  };
  window.onbeforeunload = e => {
    return 'You have unsaved work.';
  };

  return (
    <Formik
      initialValues={{
        projectName: '',
        teamNameRadio: '',
        planIntention: '',
        techStacks: '',
        teamNameInput: '',
        gitHubRepo: '',
        deploymentStatus: '',
        deploymentURL: '',
        publicStatus: '',
        projectStartDate: '',
        projectEndDate: '',
      }}
      onSubmit={values => {
        const editorContent = getContents();
        const datas = { ...values, editorContent };
        console.log(datas);
      }}
    >
      {({ values, setFieldValue }) => {
        return (
          <Form>
            <ProjectName />
            <TeamName values={values} />
            <PlanIntention />
            <ProjectDuration setFieldValue={setFieldValue} />
            <TechStacks setFieldValue={setFieldValue} />
            <GithubRepoInput />
            <DeploymentStatus values={values} />
            <PublicStatus />
            <ProjectThumbnail setFieldValue={setFieldValue} />
            <ProjectDescription ref={editorRef} />
            <Button
              type="button"
              children="← 뒤로가기"
              onClick={onGoBackHandler}
              color={color.darkGray}
              border={`1px solid ${color.darkGray}`}
            />
            <Button type="submit" children="게시하기" border={`1px solid ${color.mainColor}`} />
          </Form>
        );
      }}
    </Formik>
  );
};

export default ProjectEditForm;
