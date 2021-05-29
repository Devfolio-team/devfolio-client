import { func } from 'prop-types';
import { Container, Heading, ChipInputSearch } from 'components';
import styled from 'styled-components';

const StyledContainer = styled(Container)`
  width: 100%;
  margin-top: 50px;
  @media (max-width: 1280px) {
    margin: 0 auto 60px;
    width: 80%;
  }
`;

const TechStacks = ({ setFieldValue, editTechStacks }) => {
  return (
    <StyledContainer>
      <Heading as="h3" color="#212121" fontSize={1.6} margin="0 0 32px 0">
        사용 기술 스택
      </Heading>
      <ChipInputSearch
        id="techStacksList"
        setFieldValue={setFieldValue}
        profile={false}
        editTechStacks={editTechStacks}
      />
    </StyledContainer>
  );
};

TechStacks.defaultProps = {};

TechStacks.propTypes = {
  /** ChipInputSearch의 인풋의 값을 formik의 values로 설정해주는 함수입니다. */
  setFieldValue: func,
};

export default TechStacks;
