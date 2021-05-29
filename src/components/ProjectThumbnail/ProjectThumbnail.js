import { func } from 'prop-types';
import { Container, Heading, Paragraph, DND } from 'components';
import styled from 'styled-components';

const StyledContainer = styled(Container)`
  grid-row: 5 / span 2;
  grid-column: 2 / 3;
  justify-self: end;
  width: 100%;

  @media (max-width: 1280px) {
    margin: 0 auto 60px;
    width: 80%;
  }
`;

const ProjectThumbnail = ({ setFieldValue, errors, editThumbnail }) => {
  return (
    <StyledContainer>
      <Heading as="h3" color="#212121" fontSize={1.6} margin="0 0 20px 0">
        프로젝트 썸네일
      </Heading>
      <Paragraph color="#666" fontSize={1.4} lineHeight={28} margin="0 0 20px 0">
        프로젝트의 대표 이미지를 올려주세요!
      </Paragraph>
      <DND
        setFieldValue={setFieldValue}
        errors={errors}
        profile={false}
        borderRadius="5px"
        editThumbnail={editThumbnail}
      />
    </StyledContainer>
  );
};

ProjectThumbnail.defaultProps = {};

ProjectThumbnail.propTypes = {
  /** file input의 값을 formik의 values로 설정해주는 함수입니다. */
  setFieldValue: func,
};

export default ProjectThumbnail;
