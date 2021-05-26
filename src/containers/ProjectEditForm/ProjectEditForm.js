import { createRef, useEffect, useState } from 'react';
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
  ProjectTeamMember,
} from 'components';
import { color } from 'utils';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ajax from 'apis/ajax';
import styled, { css } from 'styled-components';
import * as Yup from 'yup';

const StyledContainer = styled(Container)`
  ${({ vw }) => css`
    display: ${vw > 1280 ? 'grid' : 'flex'};
    grid-template-rows: repeat(2, 300px) minmax(min-content, 200px) repeat(3, 300px) 600px;
    grid-template-columns: minmax(300px, 650px) minmax(300px, 650px);
    flex-direction: column;
    margin-top: 80px;
    column-gap: 100px;
  `}
`;

const ProjectEditForm = ({ vw, setLeave, editProjectData, projectId }) => {
  const [numOfTeam, setNumOfTeam] = useState(1);
  const authState = useSelector(state => state.auth);
  const editorRef = createRef();
  const history = useHistory();
  const initialValues = {
    subject: editProjectData?.projectData.subject || '',
    thumbnail: editProjectData?.projectData.thumbnail
      ? { src: null, size: 0, type: 'image/jpeg' }
      : null,
    teamNameRadio: editProjectData?.projectData.team_name ? 'yes' : 'no',
    planIntention: editProjectData?.projectData.plan_intention || '',
    techStacks: [],
    teamName: editProjectData?.projectData.team_name || '',
    githubUrl: editProjectData?.projectData.github_url || '',
    deploymentStatus: editProjectData?.projectData.deploy_url ? 'deployed' : 'undeployed',
    deployUrl: editProjectData?.projectData.deploy_url || '',
    isPrivate: String(editProjectData?.projectData.is_private) || '',
    startDate: editProjectData?.projectData.start_date || '',
    endDate: editProjectData?.projectData.end_date || '',
    teamMembers: [],
  };
  const initialTouched = {
    subject: true,
    planIntention: true,
    startDate: true,
    endDate: true,
    deployUrl: true,
    githubUrl: true,
    thumbnail: true,
  };
  const FILE_SIZE = 1000 * 1000 * 10;

  const SUPPORTED_FORMATS = ['image/jpeg', 'image/png', 'image/jpg', 'image/webp', 'image/gif'];

  const projectValidation = {
    subject: Yup.string().required('* 프로젝트 이름은 필수 항목입니다.'),
    planIntention: Yup.string()
      .max(200, '기획의도는 200자 이내여야 합니다.')
      .required('* 기획의도는 필수 항목입니다.'),
    startDate: Yup.date().required('* 시작날짜는 필수 항목입니다.'),
    endDate: Yup.date().required('* 종료날짜는 필수 항목입니다.'),
    deployUrl: Yup.string().matches(
      /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      '형식에 맞는 URL을 작성해주세요!'
    ),
    githubUrl: Yup.string().matches(
      /^https:\/\/github.com\/[\w-]+\/[\w-]+$/,
      '형식에 맞는 URL을 작성해주세요!'
    ),
    thumbnail: Yup.mixed()
      .test(
        'fileType',
        '지원하지않는 파일형식입니다. (지원하는 파일 형식: jpeg, png, jpg, webp, gif)',
        value => value === null || (value && SUPPORTED_FORMATS.includes(value.type))
      )
      .test(
        'fileSize',
        '파일 크기가 너무 큽니다. (최대 10MB)',
        value => value === null || (value && value.size <= FILE_SIZE)
      )
      .required('* 프로젝트 썸네일은 필수 항목입니다.'),
  };

  Array.from({ length: 10 }, (_, i) => i).forEach((_, index) => {
    initialTouched[`memberName${index}`] = true;
    initialTouched[`memberGithubUrl${index}`] = true;
  });

  Array.from({ length: numOfTeam }, (_, i) => i).forEach((_, index) => {
    initialValues[`memberName${index}`] = '';
    initialValues[`memberGithubUrl${index}`] = '';
    projectValidation[`memberName${index}`] = Yup.string().required(
      '* 팀원 이름은 필수 항목입니다.'
    );
    projectValidation[`memberGithubUrl${index}`] = Yup.string().matches(
      /((https?):\/\/)?github.com\/[\w-]+$/,
      '형식에 맞는 URL을 작성해주세요!'
    );
  });

  const projectValidationSchema = Yup.object(projectValidation);

  useEffect(() => {
    editorRef.current.getInstance().setHtml(editProjectData?.projectData.main_contents);
  }, [editProjectData, editorRef]);

  const getContents = () => {
    return editorRef.current.getInstance().getHtml() || editProjectData?.projectData.main_contents;
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
      initialValues={initialValues}
      validationSchema={projectValidationSchema}
      initialTouched={initialTouched}
      onSubmit={async values => {
        let teamMembers = [];
        Array.from({ length: numOfTeam }, (_, i) => i).forEach((_, index) => {
          teamMembers = [
            ...teamMembers,
            {
              memberName: values[`memberName${index}`] || '',
              memberGithubUrl: values[`memberGithubUrl${index}`] || '',
            },
          ];
        });
        values.teamMembers = teamMembers;
        const editorContent = getContents();
        const projectData = {
          ...values,
          mainContents: editorContent,
          userUserId: authState.currentUser.user_id,
        };
        setLeave(false);
        if (editProjectData) {
          try {
            await ajax.editProject(projectData, projectId);
            history.push(`/project/${projectId}`);
          } catch (error) {
            throw new Error(error);
          }
        } else {
          try {
            const res = await ajax.postProject(projectData);
            const projectId = res.data.insertId;
            history.push(`/project/${projectId}`);
          } catch (error) {
            throw new Error(error);
          }
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
              <ProjectDuration
                setFieldValue={setFieldValue}
                vw={vw}
                errors={errors}
                editStartDate={editProjectData?.projectData.start_date}
                editEndDate={editProjectData?.projectData.end_date}
              />
              <ProjectTeamMember
                vw={vw}
                setFieldValue={setFieldValue}
                numOfTeam={numOfTeam}
                setNumOfTeam={setNumOfTeam}
                errors={errors}
              />
              <TechStacks
                setFieldValue={setFieldValue}
                vw={vw}
                editTechStacks={editProjectData?.projectTechStacks}
              />
              <GithubRepoInput vw={vw} errors={errors} />
              <DeploymentStatus values={values} vw={vw} />
              <PublicStatus vw={vw} />
              <ProjectThumbnail
                setFieldValue={setFieldValue}
                vw={vw}
                errors={errors}
                editThumbnail={editProjectData?.projectData.thumbnail}
              />
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
                children={editProjectData ? '수정하기' : '게시하기'}
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
