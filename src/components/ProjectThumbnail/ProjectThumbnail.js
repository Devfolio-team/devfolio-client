import { func } from 'prop-types';
import { Container, Heading, Paragraph, DND } from 'components';

const ProjectThumbnail = ({ setFieldValue }) => {
  return (
    <Container>
      <Heading as="h2" color="#212121" fontSize={1.6} margin="0 0 20px 0">
        프로젝트 썸네일
      </Heading>
      <Paragraph color="#666" fontSize={1.4} lineHeight={28} margin="0 0 20px 0">
        프로젝트의 대표 이미지를 올려주세요!
      </Paragraph>
      <DND setFieldValue={setFieldValue} />
    </Container>
  );
};

ProjectThumbnail.defaultProps = {};

ProjectThumbnail.propTypes = {
  /** file input의 값을 formik의 values로 설정해주는 함수입니다. */
  setFieldValue: func,
};

export default ProjectThumbnail;
