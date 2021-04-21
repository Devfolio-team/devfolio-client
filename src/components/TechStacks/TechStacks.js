import { func } from 'prop-types';
import { Container, Heading, ChipInputSearch } from 'components';

const TechStacks = ({ setFieldValue }) => {
  return (
    <Container>
      <Heading as="h3" color="#212121" fontSize={1.6} margin="0 0 20px 0">
        사용 기술 스택
      </Heading>
      <ChipInputSearch id="techStacksList" setFieldValue={setFieldValue} />
    </Container>
  );
};

TechStacks.defaultProps = {};

TechStacks.propTypes = {
  /** ChipInputSearch의 인풋의 값을 formik의 values로 설정해주는 함수입니다. */
  setFieldValue: func,
};

export default TechStacks;
