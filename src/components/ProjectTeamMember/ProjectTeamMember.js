import styled from 'styled-components';
import { Container, Heading, Paragraph, Selectbox, Input, FormErrorMessage } from 'components';
import { Field, ErrorMessage } from 'formik';
import { number, func, object } from 'prop-types';

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
    <StyledContainer>
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

ProjectTeamMember.propTypes = {
  /** 현재 뷰포트의 넓이를 가지고 있는 상태입니다. */
  vw: number,
  /** 팀원의 수를 나타내는 상태입니다. */
  numOfTeam: number,
  /** 팀원의 수의 상태를 조정할 수 있는 함수입니다. */
  setNumOfTeam: func,
  /** Formik이 관리하는 input이 validation을 통과하지 못하면 에러가 나는데, 그 에러들을 갖고 있는 객체입니다. */
  errors: object,
};

export default ProjectTeamMember;
