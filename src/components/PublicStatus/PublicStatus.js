import { Heading, Container, RadioButton } from 'components';
import { Field } from 'formik';

const PublicStatus = () => {
  return (
    <Container>
      <Heading as="h3" color="#212121" fontSize={1.6} margin="0 0 20px 0">
        공개 여부
      </Heading>
      <Container>
        <Field
          type="radio"
          component={RadioButton}
          name="isPrivate"
          value="0"
          id="public"
          label="네! 프로젝트를 사람들과 공유하고싶슾니다 😄"
          margin="0 70px 0 0"
        />
        <Field
          type="radio"
          component={RadioButton}
          name="isPrivate"
          value="1"
          id="private"
          label="아니오! 혼자만 보고 싶어요 😭"
        />
      </Container>
    </Container>
  );
};

PublicStatus.defaultProps = {};

PublicStatus.propTypes = {};

export default PublicStatus;
