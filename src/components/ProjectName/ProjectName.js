import { Heading, Paragraph, Input } from 'components';
import { string, func } from 'prop-types';

const ProjectName = ({ value, onChange }) => {
  return (
    <div>
      <Heading as="h2" color="#212121" fontSize={1.6} margin="0 0 20px 0">
        프로젝트 이름
      </Heading>
      <Paragraph color="#666" fontSize={1.4} lineHeight={28}>
        프로젝트에 사용했던 이름을 적어주세요!
        <br />
        프로젝트 이름은 프로젝트 페이지의 제목으로 사용됩니다.
      </Paragraph>
      <Input
        id="projectName"
        value={value}
        onChange={onChange}
        mode="hidden"
        label="프로젝트 이름 입력칸"
        width={600}
        height={42}
        border="1px solid #EAEAEA"
        borderRadius={5}
        margin="20px 0 0 0"
        boxShadow="1px 2px 4px rgba(0, 0, 0, 0.1)"
      />
    </div>
  );
};

ProjectName.defaultProps = {
  value: '',
};

ProjectName.propTypes = {
  value: string.isRequired,
  onChange: func.isRequired,
};

export default ProjectName;
