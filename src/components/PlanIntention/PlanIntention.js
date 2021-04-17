import { Heading, Container, TextArea } from 'components';
import { string, func } from 'prop-types';

const PlanIntention = ({ value, onChange }) => {
  return (
    <Container>
      <Heading as="h2" color="#212121" fontSize={1.6} margin="0 0 20px 0">
        기획 의도
      </Heading>
      <TextArea
        id="planIntention"
        width={600}
        height={95}
        fontSize={1.2}
        value={value}
        onChange={onChange}
        label="기획 의도를 200자 이내로 작성해주세요."
        beforeTranslate={3.5}
        afterTranslate={-0.5}
        beforeMargin={15}
        afterMargin={0}
      />
    </Container>
  );
};

PlanIntention.defaultProps = {
  value: '',
};

PlanIntention.propTypes = {
  value: string.isRequired,
  onChange: func.isRequired,
};

export default PlanIntention;
