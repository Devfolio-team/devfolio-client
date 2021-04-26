import { Heading, Input, Container, FormErrorMessage } from 'components';
import { Field, ErrorMessage } from 'formik';
import styled, { css } from 'styled-components';

const StyledContainer = styled(Container)`
  justify-self: end;
  ${({ vw }) => css`
    margin: ${vw >= 1280 ? 0 : '0 auto 60px auto'};
    width: ${vw >= 1280 ? '100%' : '80%'};
  `}
`;

const GithubRepoInput = ({ vw }) => {
  return (
    <StyledContainer vw={vw}>
      <Heading as="h3" color="#212121" fontSize={1.6} margin="0 0 20px 0">
        GitHub 저장소 링크
      </Heading>
      <Field
        component={Input}
        name="githubUrl"
        id="githubUrl"
        label="예) https://github.com/project"
        labelFontSize={1.2}
        width="100%"
        height="40px"
        border="1px solid #EAEAEA"
        borderRadius={5}
        boxShadow="1px 2px 4px rgba(0, 0, 0, 0.1)"
        beforeTranslate={2.5}
        afterTranslate={-1}
        beforeMargin={8}
        afterMargin={3}
      />
      <ErrorMessage name="githubUrl" component={FormErrorMessage} />
    </StyledContainer>
  );
};

GithubRepoInput.defaultProps = {};

GithubRepoInput.propTypes = {};

export default GithubRepoInput;
