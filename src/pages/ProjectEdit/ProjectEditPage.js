import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ProjectEditForm } from 'containers';
import { Heading, Container } from 'components';
import { useSelector } from 'react-redux';
import scrollToTop from 'utils/scrollToTop';
import { Prompt, useHistory } from 'react-router-dom';

const StyledProjectEditPage = styled.main``;

const ProjectEditPage = ({ viewport }) => {
  const currentUser = useSelector(({ auth }) => auth.currentUser);

  const history = useHistory();

  const [leave, setLeave] = useState(true);

  useEffect(() => {
    scrollToTop();
  }, []);

  const { vw, isDesktop } = viewport;
  useEffect(() => {
    window.addEventListener('beforeunload', alertUser);
    return () => {
      window.removeEventListener('beforeunload', alertUser);
    };
  }, []);
  const alertUser = e => {
    e.preventDefault();
    e.returnValue = '';
  };

  if (!currentUser) {
    history.push('/page-not-found');
    return null;
  }

  return (
    <StyledProjectEditPage>
      <Prompt
        when={leave}
        message={() =>
          `이 페이지를 벗어나면 정성껏 작성하신 모든 정보들이 날아갑니다. 

정말로 나가시겠습니까?`
        }
      />
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
          {currentUser.nickname}님 안녕하세요!
          <br />
          프로젝트 등록을 시작해 볼까요?
        </Heading>
        <ProjectEditForm vw={vw} setLeave={setLeave} />
      </Container>
    </StyledProjectEditPage>
  );
};

ProjectEditPage.defaultProps = {};

ProjectEditPage.propTypes = {};

export default ProjectEditPage;
