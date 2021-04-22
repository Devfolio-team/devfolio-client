import { Heading, Input, Container } from 'components';
import { Field } from 'formik';

const GithubRepoInput = () => {
  return (
    <Container>
      <Heading as="h3" color="#212121" fontSize={1.6} margin="0 0 20px 0">
        GitHub 저장소 링크
      </Heading>
      <Field
        component={Input}
        name="githubUrl"
        id="githubUrl"
        label="https://github.com/project"
        labelFontSize={1.2}
        width="600px"
        height="40px"
        border="1px solid #EAEAEA"
        borderRadius={5}
        boxShadow="1px 2px 4px rgba(0, 0, 0, 0.1)"
        beforeTranslate={2.5}
        afterTranslate={-1}
        beforeMargin={8}
        afterMargin={3}
      />
    </Container>
  );
};

GithubRepoInput.defaultProps = {};

GithubRepoInput.propTypes = {};

export default GithubRepoInput;
