import React from 'react';
import styled from 'styled-components';
import { color } from 'utils';
import { ReactComponent as CloudIcon } from 'assets/cloud1.svg';
import { Button, Container, Span } from 'components';
import { useHistory } from 'react-router';
import useDetectViewport from 'hooks/useDetectViewport';

const StyledPageNotFound = styled.main`
  padding: 0;
  position: relative;
  z-index: 9999;
  width: 100%;
  height: 100vh;
  background: ${color.mainColor};
  text-align: center;
`;

const NotFoundMessage = styled.em`
  display: block;
  margin: 0 auto 30px;
  width: 400px;
  color: #ffffff;
  font-size: 18rem;
  @media (max-width: 768px) {
    font-size: 10rem;
  }
`;

const PageNotFound = () => {
  const { isDesktop } = useDetectViewport();

  const history = useHistory();

  const onMovoToHomePageHandler = () => {
    history.push('/');
  };
  return (
    <StyledPageNotFound>
      <Container position="absolute" top="50%" left="50%" transform="translate3D(-50%, -50%, 0)">
        <NotFoundMessage>404</NotFoundMessage>
        <CloudIcon width="100" height="100" />
        <Span
          fontSize={isDesktop ? 4 : 2}
          fontWeight={700}
          color="#FFFFFF"
          display="block"
          margin="30px 0 50px"
        >
          요청하신 페이지가 존재하지 않네요!
        </Span>
        <Button
          width={isDesktop ? 130 : 100}
          height={isDesktop ? 55 : 45}
          color="#FFFFFF"
          fontSize={isDesktop ? 3 : 2}
          border="3px solid #FFFFFF"
          background={color.mainColor}
          onClick={onMovoToHomePageHandler}
          hoverColor={color.mainColor}
          hoverBackground="#FFFFFF"
        >
          홈으로
        </Button>
      </Container>
    </StyledPageNotFound>
  );
};

PageNotFound.defaultProps = {};

PageNotFound.propTypes = {};

export default PageNotFound;
