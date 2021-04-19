import { Heading, Input } from 'components';
import { string, func, number } from 'prop-types';

const GithubRepoInput = ({ value, onChange }) => {
  return (
    <div>
      <Heading as="h2" color="#212121" fontSize={1.6} margin="0 0 20px 0">
        GitHub 저장소 링크
      </Heading>
      <Input
        id="GithubLink"
        value={value}
        onChange={onChange}
        label="https://github.com/project"
        labelsize={1.2}
        width="600px"
        height="40px"
        border="1px solid #EAEAEA"
        borderRadius={5}
        margin="20px 0 0 0"
        boxShadow="1px 2px 4px rgba(0, 0, 0, 0.1)"
        beforeTranslate={4.5}
        afterTranslate={1}
        beforeMargin={8}
        afterMargin={3}
      />
    </div>
  );
};

GithubRepoInput.defaultProps = {
  value: '',
};

GithubRepoInput.propTypes = {
  value: string.isRequired,
  onChange: func.isRequired,
  beforeTranslate: number,
  afterTranslate: number,
  beforeMargin: number,
  afterMargin: number,
};

export default GithubRepoInput;
