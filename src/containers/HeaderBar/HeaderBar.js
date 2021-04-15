import { A11yHidden, Button, Container, Heading, Logo, Portal } from 'components';
import React, { useState } from 'react';
import styled from 'styled-components';
import useDetectViewport from 'hooks/useDetectViewport';
import { LoginModalDialog } from 'containers';
import { Link } from 'react-router-dom';

const StyledHeader = styled.header.attrs(props => {})`
  width: 100vw;
  height: 64px;
  background: ${({ background }) => background};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ padding }) => padding};
`;

const HeaderBar = () => {
  const viewport = useDetectViewport();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const onModalClickHandler = () => {
    setIsModalOpen(!isModalOpen);
  };

  const { isDesktop } = viewport;

  return (
    <StyledHeader background="#F8F9FA" padding={`0 ${isDesktop ? '70px' : '30px'}`}>
      <Container
        as="nav"
        display="flex"
        width={isDesktop ? 1440 : '100%'}
        height={64}
        justifyContent="space-between"
        alignItems="center"
        background="#F8F9FA"
      >
        <Heading as="h1">
          <Link to="/">
            <A11yHidden as="span">Devfolio</A11yHidden>
            <Logo width={130} height={30} />
          </Link>
        </Heading>
        <Button
          width={84}
          height={36}
          color="#FFFFFF"
          background="#25272B"
          fontWeight={700}
          fontSize={1.6}
          borderRadius={16}
          border="0"
          onClick={onModalClickHandler}
        >
          로그인
        </Button>
        {isModalOpen ? (
          <Portal id="modal-root">
            <LoginModalDialog onModalClickHandler={onModalClickHandler}></LoginModalDialog>
          </Portal>
        ) : null}
      </Container>
    </StyledHeader>
  );
};

HeaderBar.propTypes = {};

export default HeaderBar;
