import { Heading, Container, RadioButton } from 'components';
import { Field } from 'formik';
import styled from 'styled-components';

const StyledContainer = styled(Container)`
  width: 100%;

  @media (max-width: 1280px) {
    margin: 0 auto 60px;
    width: 80%;
  }
`;

const PublicStatus = ({ vw }) => {
  return (
    <StyledContainer vw={vw}>
      <Heading as="h3" color="#212121" fontSize={1.6} margin="0 0 20px 0">
        공개 여부
      </Heading>
      <Container display="flex" flexFlow={vw > 600 ? 'row nowrap' : 'column nowrap'}>
        <Field
          type="radio"
          component={RadioButton}
          name="isPrivate"
          value="0"
          id="public"
          label="네! 프로젝트를 사람들과 공유하고싶슾니다 😄"
          margin={vw >= 1280 ? '13px 70px 0 0' : vw <= 600 ? '13px 70px 15px 0' : '13px 70px 0 0'}
        />
        <Field
          type="radio"
          component={RadioButton}
          name="isPrivate"
          value="1"
          id="private"
          label="아니오! 혼자만 보고 싶어요 😭"
          margin={vw >= 1280 ? '13px 0 0 0' : vw <= 600 ? '13px 0 0 0' : '13px 0 0 0'}
        />
      </Container>
    </StyledContainer>
  );
};

PublicStatus.defaultProps = {};

PublicStatus.propTypes = {};

export default PublicStatus;
