import { createRef, useEffect } from 'react';
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
  Container,
} from 'components';
import { color, validationSchema } from 'utils';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ajax from 'apis/ajax';
import styled, { css } from 'styled-components';

const StyledContainer = styled(Container)`
  ${({ vw }) => css`
    display: ${vw >= 1280 ? 'grid' : 'flex'};
    grid-template-rows: repeat(5, 300px) 600px;
    grid-template-columns: minmax(300px, 650px) minmax(300px, 650px);
    flex-direction: column;
    margin-top: 80px;
    column-gap: 100px;
  `}
`;

const ProjectEditForm = ({ vw, setLeave }) => {
  const authState = useSelector(state => state.auth);
  const editorRef = createRef();
  const history = useHistory();

  const getContents = () => {
    return editorRef.current.getInstance().getHtml();
  };

  const onGoBackHandler = () => {
    window.history.back();
  };

  const scrollToErrors = errors => {
    const errorKeys = Object.keys(errors);
    if (errorKeys.length > 0) {
      document.getElementById(errorKeys[0]).focus();
    }
  };

  return (
    <Formik
      initialValues={{
        subject: '',
        thumbnail: null,
        teamNameRadio: 'no',
        planIntention: '',
        techStacks: [],
        teamName: '',
        githubUrl: '',
        deploymentStatus: 'undeployed',
        deployUrl: '',
        isPrivate: '',
        startDate: '',
        endDate: '',
      }}
      validationSchema={validationSchema}
      initialTouched={{
        subject: true,
        planIntention: true,
        startDate: true,
        endDate: true,
        deployUrl: true,
        githubUrl: true,
        thumbnail: true,
      }}
      onSubmit={async values => {
        const editorContent = getContents();
        const projectData = {
          ...values,
          mainContents: editorContent,
          userUserId: authState.currentUser.user_id,
        };
        setLeave(false);
        try {
          const res = await ajax.postProject(projectData);
          const projectId = res.data.insertId;
          history.push(`/project/${projectId}`);
        } catch (error) {
          throw new Error(error);
        }
      }}
    >
      {({ values, errors, setFieldValue }) => {
        return (
          <Form>
            <StyledContainer vw={vw}>
              <ProjectName vw={vw} errors={errors} />
              <TeamName values={values} vw={vw} />
              <PlanIntention vw={vw} errors={errors} />
              <ProjectDuration setFieldValue={setFieldValue} vw={vw} errors={errors} />
              <TechStacks setFieldValue={setFieldValue} vw={vw} />
              <GithubRepoInput vw={vw} />
              <DeploymentStatus values={values} vw={vw} />
              <PublicStatus vw={vw} />
              <ProjectThumbnail setFieldValue={setFieldValue} vw={vw} errors={errors} />
              <ProjectDescription ref={editorRef} vw={vw} />
            </StyledContainer>
            <Container
              display="flex"
              width={vw > 768 ? '100%' : '80%'}
              justifyContent={vw > 768 ? 'center' : 'space-between'}
            >
              <Button
                type="button"
                children="뒤로가기"
                onClick={onGoBackHandler}
                color={color.darkGray}
                fontWeight="700"
                hoverColor={color.white}
                hoverBackground={color.darkGray}
                border={`1px solid ${color.darkGray}`}
              />
              <Button
                type="submit"
                children="게시하기"
                color={color.mainColor}
                fontWeight="700"
                margin="0 0 0 30px"
                hoverColor={color.white}
                hoverBackground={color.mainColor}
                border={`1px solid ${color.mainColor}`}
                onClick={() => {
                  scrollToErrors(errors);
                }}
              />
            </Container>
          </Form>
        );
      }}
    </Formik>
  );
};

export default ProjectEditForm;
