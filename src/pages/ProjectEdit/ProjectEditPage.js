import { useEffect } from 'react';
import styled from 'styled-components';
import { ProjectEditForm } from 'containers';
import { Heading, Container } from 'components';
import { useSelector } from 'react-redux';
import scrollToTop from 'utils/scrollToTop';

const StyledProjectEditPage = styled.main``;

const ProjectEditPage = ({ viewport }) => {
  const userName = useSelector(state => state.auth.currentUser.name);

  useEffect(() => {
    scrollToTop();
  }, []);

  const { vw, isDesktop } = viewport;

  return (
    <StyledProjectEditPage>
      <Container
        padding={isDesktop ? '80px 70px' : '25px 30px'}
        width={vw >= 1440 ? 1440 : '100%'}
        minWidth="320px"
      >
        <Heading
          as="h2"
          color="#212121"
          fontSize={vw > 768 ? 3 : vw > 420 ? 2.5 : 2}
          textAlign="center"
          lineHeight="46px"
        >
          {userName}님 안녕하세요!
          <br />
          프로젝트 등록을 시작해 볼까요?
        </Heading>
        <ProjectEditForm vw={vw} />
      </Container>
    </StyledProjectEditPage>
  );
};

ProjectEditPage.defaultProps = {};

ProjectEditPage.propTypes = {};

export default ProjectEditPage;
