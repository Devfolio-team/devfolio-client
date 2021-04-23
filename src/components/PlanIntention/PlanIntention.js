import { Heading, Container, TextArea } from 'components';
import { Field, ErrorMessage } from 'formik';
import styled, { css } from 'styled-components';

const StyledContainer = styled(Container)`
  ${({ vw }) => css`
    margin: ${vw >= 1280 ? 0 : '0 auto 60px auto'};
    width: ${vw >= 1280 ? '100%' : '80%'};
  `}
`;

const PlanIntention = ({ vw }) => {
  return (
    <StyledContainer vw={vw}>
      <Heading as="h3" color="#212121" fontSize={1.6} margin="0 0 20px 0">
        기획 의도
      </Heading>
      <Field
        component={TextArea}
        name="planIntention"
        id="planIntention"
        width="100%"
        height={85}
        fontSize={1.2}
        label="기획 의도를 200자 이내로 작성해주세요."
        beforeTranslate={3.5}
        afterTranslate={-0.5}
        beforeMargin={15}
        afterMargin={0}
      />
      <ErrorMessage name="planIntention" />
    </StyledContainer>
  );
};

PlanIntention.defaultProps = {};

PlanIntention.propTypes = {};

export default PlanIntention;
