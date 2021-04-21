import { Heading, Container, TextArea } from 'components';
import { Field } from 'formik';

const PlanIntention = () => {
  return (
    <Container>
      <Heading as="h3" color="#212121" fontSize={1.6} margin="0 0 20px 0">
        기획 의도
      </Heading>
      <Field
        component={TextArea}
        name="planIntention"
        id="planIntention"
        width={600}
        height={95}
        fontSize={1.2}
        label="기획 의도를 200자 이내로 작성해주세요."
        beforeTranslate={3.5}
        afterTranslate={-0.5}
        beforeMargin={15}
        afterMargin={0}
      />
    </Container>
  );
};

PlanIntention.defaultProps = {};

PlanIntention.propTypes = {};

export default PlanIntention;
