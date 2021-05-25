import { Heading, Paragraph, Input, Container, FormErrorMessage } from 'components';
import { Field, ErrorMessage } from 'formik';
import styled from 'styled-components';

const StyledContainer = styled(Container)`
  width: 100%;

  @media (max-width: 1280px) {
    margin: 0 auto 60px;
    width: 80%;
  }
`;

const ProjectName = ({ vw, errors }) => {
  return (
    <StyledContainer vw={vw}>
      <Heading as="h3" color="#212121" fontSize={1.6} margin="0 0 20px 0">
        프로젝트 이름
      </Heading>
      <Paragraph color="#666" fontSize={1.4} lineHeight={28}>
        프로젝트에 사용했던 이름을 적어주세요!
        <br />
        프로젝트 이름은 프로젝트 페이지의 제목으로 사용됩니다.
      </Paragraph>
      <Field
        component={Input}
        name="subject"
        id="subject"
        mode="hidden"
        label="프로젝트 이름 입력칸"
        width="100%"
        height={42}
        border="1px solid #EAEAEA"
        borderRadius={5}
        margin="20px 0 0 0"
        boxShadow="1px 2px 4px rgba(0, 0, 0, 0.1)"
        errors={errors}
      />
      <ErrorMessage name="subject" component={FormErrorMessage} margin="10px 0 0 0" />
    </StyledContainer>
  );
};

ProjectName.defaultProps = {};

ProjectName.propTypes = {};

export default ProjectName;
