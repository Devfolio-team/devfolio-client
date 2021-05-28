import { Heading, Container, TextArea, FormErrorMessage, Paragraph } from 'components';
import { Field, ErrorMessage } from 'formik';
import styled from 'styled-components';

const StyledContainer = styled(Container)`
  width: 100%;

  @media (max-width: 1280px) {
    margin: 0 auto 60px;
    width: 80%;
  }
`;

const PlanIntention = ({ errors }) => {
  return (
    <StyledContainer>
      <Heading as="h3" color="#212121" fontSize={1.6} margin="0 0 20px 0">
        기획 의도 및 소개
      </Heading>
      <Paragraph color="#666" fontSize={1.4} margin="0 0 20px 0">
        이 항목은 프로젝트의 소개글로 표시됩니다.
      </Paragraph>
      <Field
        component={TextArea}
        name="planIntention"
        id="planIntention"
        width="100%"
        height={85}
        fontSize={1.2}
        label="기획 의도를 200자 이내로 작성해주세요."
        beforeTranslate={3.5}
        afterTranslate={-0.8}
        beforeMargin={15}
        afterMargin={0}
        errors={errors}
      />
      <ErrorMessage name="planIntention" component={FormErrorMessage} margin="10px 0 0 0" />
    </StyledContainer>
  );
};

PlanIntention.defaultProps = {};

PlanIntention.propTypes = {};

export default PlanIntention;
