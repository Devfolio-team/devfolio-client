import { string, func } from 'prop-types';
import { Container, Heading, Paragraph, DND } from 'components';

const ProjectThumbnail = ({ src, alt, onChangeHandler, value }) => {
  return (
    <Container>
      <Heading as="h2" color="#212121" fontSize={1.6} margin="0 0 20px 0">
        프로젝트 썸네일
      </Heading>
      <Paragraph color="#666" fontSize={1.4} lineHeight={28} margin="0 0 20px 0">
        프로젝트의 대표 이미지를 올려주세요!
      </Paragraph>
      <DND id="projectThumbnail" src={src} alt={alt} onChange={onChangeHandler} value={value} />
    </Container>
  );
};

ProjectThumbnail.defaultProps = {
  src: '',
  alt: '',
  onChangeHandler: null,
};

ProjectThumbnail.propTypes = {
  /** 이미지의 경로를 설정합니다. */
  src: string.isRequired,
  /** 이미지의 대체 텍스트를 설정합니다. */
  alt: string.isRequired,
  /** 인풋의 변경되는 값을 감지하는 이벤트를 설정합니다. */
  onChangeHandler: func.isRequired,
  /** 인풋 박스에 들어오는 이미지경로 값을 설정합니다. */
  value: string,
};

export default ProjectThumbnail;
