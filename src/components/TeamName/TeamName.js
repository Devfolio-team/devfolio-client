import { Heading, Paragraph, Input, Container, RadioButton } from 'components';
import { object } from 'prop-types';
import { Field } from 'formik';
import styled, { css } from 'styled-components';

const StyledContainer = styled(Container)`
  justify-self: end;
  ${({ vw }) => css`
    margin: ${vw >= 1280 ? 0 : '0 auto 60px auto'};
    width: ${vw >= 1280 ? '100%' : '80%'};
  `}
`;

const TeamName = ({ values, vw }) => {
  const { teamNameRadio } = values;
  return (
    <StyledContainer vw={vw}>
      <Heading as="h3" color="#212121" fontSize={1.6} margin="0 0 20px 0">
        팀 이름
      </Heading>
      <Paragraph color="#666" fontSize={1.4} lineHeight={28}>
        팀 이름이 있나요?
      </Paragraph>
      <Container display="flex" flexFlow={vw > 600 ? 'row nowrap' : 'column nowrap'}>
        <Field
          component={RadioButton}
          name="teamNameRadio"
          value="yes"
          margin={vw >= 1280 ? '13px 70px 0 0' : vw <= 600 ? '13px 70px 15px 0' : '13px 70px 0 0'}
          type="radio"
          id="yes"
          label="네! 멋진 팀 이름이 있습니다 😄"
        />
        <Field
          component={RadioButton}
          name="teamNameRadio"
          value="no"
          id="no"
          margin={vw >= 1280 ? '13px 0 0 0' : vw <= 600 ? '13px 0 15px 0' : '13px 0 0 0'}
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
        width="100%"
        height={42}
        border="1px solid #EAEAEA"
        borderRadius={5}
        margin="20px 0 0 0"
        boxShadow="1px 2px 4px rgba(0, 0, 0, 0.1)"
        disabled={teamNameRadio === 'no' || teamNameRadio === ''}
      />
    </StyledContainer>
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
