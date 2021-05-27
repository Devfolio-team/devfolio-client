import styled from 'styled-components';
import { Container, Heading, Paragraph, Selectbox, Input, FormErrorMessage } from 'components';
import { Field, ErrorMessage } from 'formik';

const StyledContainer = styled(Container)`
  grid-column: 1 / 3;
  width: 100%;

  @media (max-width: 1280px) {
    margin: 0 auto 60px;
    width: 80%;
  }
`;

const ProjectTeamMember = ({ vw, numOfTeam, setNumOfTeam, errors }) => {
  const onTeamMemberChangeHandler = e => {
    setNumOfTeam(+e.target.value);
  };

  return (
    <StyledContainer vw={vw}>
      <Heading as="h3" color="#212121" fontSize={1.6} margin="0 0 20px 0">
        팀원
      </Heading>
      <Container display="flex" alignItems="center">
        <Paragraph color="#666" fontSize={1.4}>
          총 몇 명의 팀원과 협업 했었나요? (팀원에는 본인도 포함됩니다)
        </Paragraph>
        <Selectbox label="최대 10명" onChange={onTeamMemberChangeHandler} />
      </Container>
      <Paragraph color="#666" fontSize={1.2} margin="5px 0 20px 0">
        Github Url은 선택적 사항입니다. 없으면 비워두세요!
      </Paragraph>
      <Container display="flex" flexFlow="row wrap" justifyContent="space-between">
        {Array.from({ length: numOfTeam }, (_, i) => i).map((_, index) => (
          <Container margin="0" width={vw > 768 ? '45%' : '100%'} key={index} position="relative">
            <Field
              component={Input}
              name={`memberName${index}`}
              id={`memberName${index}`}
              label="팀원 이름"
              labelPosition="absolute"
              width="25%"
              height={42}
              border="1px solid #EAEAEA"
              borderRadius={5}
              margin="20px 5% 0 0"
              boxShadow="1px 2px 4px rgba(0, 0, 0, 0.1)"
              percentMargin={true}
              beforeTranslate={3.5}
              afterTranslate={0.3}
              beforeMargin={2}
              afterMargin={0}
              errors={errors}
            />
            <Field
              component={Input}
              name={`memberGithubUrl${index}`}
              id={`memberGithubUrl${index}`}
              labelPosition="absolute"
              label={vw > 980 ? 'github 주소 (ex: https://github.com/yourid)' : 'github 주소'}
              width="70%"
              height={42}
              border="1px solid #EAEAEA"
              borderRadius={5}
              margin="20px 0 0 0"
              boxShadow="1px 2px 4px rgba(0, 0, 0, 0.1)"
              percentMargin={true}
              beforeTranslate={-2.7}
              afterTranslate={-6.0}
              beforeMargin={32}
              afterMargin={30}
              errors={errors}
            />
            <ErrorMessage
              name={`memberName${index}`}
              component={FormErrorMessage}
              margin="10px 0 0 0"
            />
            <ErrorMessage
              name={`memberGithubUrl${index}`}
              component={FormErrorMessage}
              margin="10px 0 0 0"
            />
          </Container>
        ))}
      </Container>
    </StyledContainer>
  );
};

ProjectTeamMember.defaultProps = {};

ProjectTeamMember.propTypes = {};

export default ProjectTeamMember;
