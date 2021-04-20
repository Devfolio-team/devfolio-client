import {
  A11yHidden,
  Button,
  Container,
  Heading,
  Image,
  Logo,
  Portal,
  UserNavigator,
} from 'components';
import React, { useState, useRef, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { LoginModalDialog } from 'containers';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ReactComponent as arrowDownIcon } from 'assets/arrowDownIcon.svg';
import { applyStyle } from 'utils';

const StyledHeaderBar = styled.header`
  ${({ $background, $padding }) => css`
    width: 100%;
    height: 64px;
    position: fixed;
    z-index: 100;
    background: ${$background};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${$padding};
  `}
`;

const StyledArrowDownIcon = styled(arrowDownIcon)`
  ${props => css`
    ${applyStyle(props)}
  `}
`;

const HeaderBar = ({ viewport }) => {
  const { currentUser } = useSelector(state => state.auth);

  const { isDesktop, type } = viewport;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [userNavigatorIsOepn, setUserNavigatorIsOepn] = useState(false);

  const onNavigatorToggleHandler = () => {
    setUserNavigatorIsOepn(!userNavigatorIsOepn);
  };

  const onNavigatorCloseHandler = ({ target }) => {
    if (target.classList.contains('userNavigator')) return;
    setUserNavigatorIsOepn(false);
  };

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

  useEffect(() => {
    window.addEventListener('click', onNavigatorCloseHandler);
    return () => {
      window.removeEventListener('click', onNavigatorCloseHandler);
    };
  }, []);

  return (
    <StyledHeaderBar $background="#25272B">
      <Container
        as="nav"
        display="flex"
        width={type === 'xl' ? 1440 : '100%'}
        height={64}
        justifyContent="space-between"
        alignItems="center"
        background="#25272B"
        padding={`0 ${isDesktop ? '70px' : '30px'}`}
        position="relative"
      >
        <Heading as="h1">
          <Link to="/">
            <A11yHidden as="span">Devfolio</A11yHidden>
            <Logo width={130} height={30} type="white" />
          </Link>
        </Heading>
        {currentUser ? (
          <Container display="flex" alignItems="center" margin="0">
            <Button
              width={125}
              height={32}
              margin="0 20px 0 0"
              border="2px solid #f8f9fa"
              background="#212121"
              color="#f8f9fa"
              fontWeight="700"
              fontSize={1.6}
              borderRadius={16}
              padding="0"
            >
              프로젝트 등록
            </Button>
            <Container
              className="userNavigator"
              display="flex"
              alignItems="center"
              cursor="pointer"
              tabIndex={-1}
              onClick={onNavigatorToggleHandler}
              focusOutline="none"
            >
              <Button
                className="userNavigator"
                width={40}
                height={40}
                border="0"
                borderRadius="50%"
                padding="0"
                margin="0 5px 0 0"
              >
                <Image
                  className="userNavigator"
                  src={currentUser.profile_photo}
                  alt=""
                  width={40}
                  height={40}
                  borderRadius="50%"
                />
              </Button>
              <StyledArrowDownIcon
                className="userNavigator"
                width={24}
                height={24}
                fill="#f8f9fa"
                $transition=".5s"
                $transform={`${userNavigatorIsOepn ? 'rotate(0.5turn)' : ''}`}
              />
            </Container>
            <UserNavigator
              height={userNavigatorIsOepn ? 171 : 0}
              tabIndex={userNavigatorIsOepn ? 0 : -1}
              setUserNavigatorIsOepn={setUserNavigatorIsOepn}
            />
          </Container>
        ) : (
          <Button
            width={84}
            height={36}
            color="#FFFFFF"
            background="#25272B"
            fontWeight={700}
            fontSize={1.6}
            borderRadius={16}
            padding="0"
            border="0"
            onClick={onModalOpenHandler}
            ref={beforeRef}
          >
            로그인
          </Button>
        )}
        {isModalOpen ? (
          <Portal id="modal-root">
            <LoginModalDialog
              viewport={viewport}
              ref={ref}
              onModalCloseHandler={onModalCloseHandler}
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
            ></LoginModalDialog>
          </Portal>
        ) : null}
      </Container>
    </StyledHeaderBar>
  );
};

HeaderBar.propTypes = {};

export default HeaderBar;
