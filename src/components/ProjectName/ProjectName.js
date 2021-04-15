import { Heading, Paragraph, Input } from 'components';

const ProjectName = () => {
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
        id="projectNameInput"
        mode="hidden"
        label="프로젝트 이름 입력칸"
        width={600}
        height={42}
        border="1px solid #EAEAEA"
        borderRadius={5}
        margin="20px 0 0 0"
      />
    </div>
  );
};

export default ProjectName;
