import { Heading, Paragraph, Input, Container, RadioButton } from 'components';
import { object } from 'prop-types';
import { Field } from 'formik';

const TeamName = ({ values }) => {
  const { teamNameRadio } = values;
  return (
    <Container>
      <Heading as="h3" color="#212121" fontSize={1.6} margin="0 0 20px 0">
        팀 이름
      </Heading>
      <Paragraph color="#666" fontSize={1.4} lineHeight={28}>
        팀 이름이 있나요?
      </Paragraph>
      <Container>
        <Field
          component={RadioButton}
          name="teamNameRadio"
          value="yes"
          margin="0 70px 0 0"
          type="radio"
          id="yes"
          label="네! 멋진 팀 이름이 있습니다 😄"
        />
        <Field
          component={RadioButton}
          name="teamNameRadio"
          value="no"
          id="no"
          margin="0 70px 0 0"
          type="radio"
          label="아니오! 팀 이름이 없습니다 😭"
        />
      </Container>
      <Field
        component={Input}
        id="teamName"
        name="teamName"
        mode="hidden"
        label="팀 이름 입력칸"
        width={600}
        height={42}
        border="1px solid #EAEAEA"
        borderRadius={5}
        margin="20px 0 0 0"
        boxShadow="1px 2px 4px rgba(0, 0, 0, 0.1)"
        disabled={teamNameRadio === 'no' || teamNameRadio === ''}
      />
    </Container>
  );
};

TeamName.defaultProps = {
  values: {},
};

TeamName.propTypes = {
  /** formik이 가지고 있는 인풋들의 value들을 가지고 있는 객체입니다. */
  values: object.isRequired,
};

export default TeamName;
