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
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ajax from 'apis/ajax';

const ProjectEditForm = () => {
  const authState = useSelector(state => state.auth);
  const editorRef = createRef();
  const history = useHistory();

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
        subject: '',
        thumbnail: '',
        teamNameRadio: '',
        planIntention: '',
        techStacks: [],
        teamName: '',
        githubUrl: '',
        deploymentStatus: '',
        deployUrl: '',
        isPrivate: '',
        startDate: '',
        endDate: '',
      }}
      onSubmit={async values => {
        const editorContent = getContents();
        const projectData = {
          ...values,
          mainContents: editorContent,
          userUserId: authState.currentUser.user_id,
        };
        try {
          const res = await ajax.postProject(projectData);
          const projectId = res.data.insertId;
          history.push(`/project/${projectId}`);
        } catch (error) {
          throw new Error(error);
        }
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
