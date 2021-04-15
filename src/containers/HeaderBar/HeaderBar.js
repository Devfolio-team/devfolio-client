import { A11yHidden, Button, Container, Heading, Logo, Portal } from 'components';
import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import useDetectViewport from 'hooks/useDetectViewport';
import { LoginModalDialog } from 'containers';

const StyledHeader = styled.header`
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
  const ref = useRef(null);
  const beforeRef = useRef(null);

  const onModalOpenHandler = () => {
    setIsModalOpen(true);
  };

  const onModalCloseHandler = e => {
    if (e.keyCode === 27) {
      setIsModalOpen(false);
      beforeRef.current.focus();
      return;
    }

    if (e.target === e.currentTarget) {
      setIsModalOpen(false);
      beforeRef.current.focus();
      return;
    }
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
          <A11yHidden as="span">Devfolio</A11yHidden>
          <Logo width={130} height={30} />
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
          onClick={onModalOpenHandler}
          ref={beforeRef}
        >
          로그인
        </Button>
        {isModalOpen ? (
          <Portal id="modal-root">
            <LoginModalDialog
              ref={ref}
              onModalCloseHandler={onModalCloseHandler}
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
            ></LoginModalDialog>
          </Portal>
        ) : null}
      </Container>
    </StyledHeader>
  );
};

HeaderBar.propTypes = {};

export default HeaderBar;
