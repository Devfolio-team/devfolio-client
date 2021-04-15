import { Button, Container, MenuUnderline } from 'components';
import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

const StyledHomePage = styled.main`
  ${({ $padding, $background }) => css`
    padding: ${$padding};
    background: #f8f9fa;
  `}
`;

const HomePage = ({ viewport }) => {
  const { type, isMobile, isDesktop } = viewport;

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects();
  }, []);

  return (
    <StyledHomePage $padding={isDesktop ? '30px 70px' : '30px 30px'}>
      <Container width={type === 'xl' ? 1440 : '100%'}>
        <Container position="relative" margin="0 0 30px 0">
          <Button
            width={112}
            height={48}
            background="transparent"
            border="0"
            fontSize={1.9}
            fontWeight={700}
            // outline="none"
          >
            인기
          </Button>
          <Button color="#868E96" background="transparent" border="0" fontSize={1.9}>
            최신
          </Button>
          {/* 상태를 보고 transform 조정 */}
          <MenuUnderline
            position="absolute"
            bottom="0"
            left="0"
            transform="translate3D(0px, 0, 0)"
          />
        </Container>
        <Container></Container>
      </Container>
    </StyledHomePage>
  );
};

HomePage.defaultProps = {};

HomePage.propTypes = {};

export default HomePage;
