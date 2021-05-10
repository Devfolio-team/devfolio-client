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
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ReactComponent as arrowDownIcon } from 'assets/arrowDownIcon.svg';
import { applyStyle } from 'utils';
import { LoginModalDialog } from 'containers';

const StyledHeaderBar = styled.header`
  ${({ $background, $padding }) => css`
    width: 100%;
    height: 64px;
    position: fixed;
    z-index: 9999;
    top: 0;
    left: 0;
    background: ${$background};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${$padding};
  `}
`;

const Naigation = styled.nav`
  display: flex;
  margin: 0 auto;
  width: 1440px;
  height: 64px;
  justify-content: space-between;
  align-items: center;
  background: #25272b;
  padding: 0 70px;
  position: relative;
  @media (max-width: 1440px) {
    width: 100%;
  }
  @media (max-width: 768px) {
    padding: 30px;
  }
`;

const ProjectEditLink = styled(Link)`
  ${props => applyStyle(props)}
`;

ProjectEditLink.displayName = 'ProjectEditLink';

const StyledArrowDownIcon = styled(arrowDownIcon)`
  ${props => css`
    ${applyStyle(props)}
  `}
`;

const HeaderBar = ({ viewport }) => {
  const { currentUser } = useSelector(state => state.auth);

  const { type } = viewport;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [userNavigatorIsOepn, setUserNavigatorIsOepn] = useState(false);

  const onNavigatorToggleHandler = () => {
    setUserNavigatorIsOepn(!userNavigatorIsOepn);
  };

  const onNavigatorCloseHandler = ({ target }) => {
    if (target.classList.contains('userNavigator')) return;
    setUserNavigatorIsOepn(false);
  };

  const beforeRef = useRef(null);

  const onModalOpenHandler = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  useEffect(() => {
    window.addEventListener('click', onNavigatorCloseHandler);
    return () => {
      window.removeEventListener('click', onNavigatorCloseHandler);
    };
  }, []);

  return (
    <StyledHeaderBar $background="#25272B">
      <Naigation>
        <Heading as="h1">
          <Link to="/">
            <A11yHidden as="span">Devfolio</A11yHidden>
            <Logo width={130} height={30} type="white" />
          </Link>
        </Heading>
        {currentUser ? (
          <Container display="flex" alignItems="center" margin="0">
            {type === 'xs' ? null : (
              <ProjectEditLink
                to="/edit/project"
                $width={125}
                $height={36}
                $margin="0 20px 0 0"
                $border="2px solid #f8f9fa"
                $background="#212121"
                $color="#f8f9fa"
                $fontWeight="700"
                $fontSize={1.6}
                $borderRadius={16}
                $padding="0"
                $hoverBackground="#f8f9fa"
                $hoverColor="#212121"
                $textAlign="center"
                $lineHeight="1.88"
              >
                프로젝트 등록
              </ProjectEditLink>
            )}
            <Container
              title="네비게이션 메뉴 열기"
              aria-label="네비게이션 메뉴 열기"
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
              aria-hidden={!userNavigatorIsOepn}
              viewport={viewport}
              height={!userNavigatorIsOepn ? 0 : type === 'xs' ? 228 : 171}
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
              beforeRef={beforeRef}
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
            ></LoginModalDialog>
          </Portal>
        ) : null}
      </Naigation>
    </StyledHeaderBar>
  );
};

HeaderBar.propTypes = {};

export default HeaderBar;
