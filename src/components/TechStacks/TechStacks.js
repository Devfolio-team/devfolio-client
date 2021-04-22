import { func } from 'prop-types';
import { Container, Heading, ChipInputSearch } from 'components';
import styled, { css } from 'styled-components';

const StyledContainer = styled(Container)`
  ${({ vw }) => css`
    margin: ${vw >= 1280 ? 0 : '0 auto 60px auto'};
    width: ${vw >= 1280 ? '100%' : '80%'};
  `}
`;

const TechStacks = ({ setFieldValue, vw }) => {
  return (
    <StyledContainer vw={vw}>
      <Heading as="h3" color="#212121" fontSize={1.6} margin="0 0 32px 0">
        사용 기술 스택
      </Heading>
      <ChipInputSearch id="techStacksList" setFieldValue={setFieldValue} />
    </StyledContainer>
  );
};

TechStacks.defaultProps = {};

TechStacks.propTypes = {
  /** ChipInputSearch의 인풋의 값을 formik의 values로 설정해주는 함수입니다. */
  setFieldValue: func,
};

export default TechStacks;
