import styled, { css } from 'styled-components';
import { Button, Container, Heading, SVGIcon, Modal, Dialog, Span } from 'components';
import { forwardRef, useEffect, React } from 'react';
import { applyStyle } from 'utils';

const DivisionLine = styled.div`
  ${({ $height, $marginBottom }) => css`
    border-bottom: 1px solid #454b58;
    width: 100%;
    height: ${$height};
    margin-bottom: ${$marginBottom};
  `}
`;

const DivisionDiv = styled.div`
  ${({ $width }) => css`
    color: #ffffff;
    background-color: #2c3035;
    width: ${$width};
    height: 23px;
    line-height: 23px;
    text-align: center;
    font-size: 16px;
    position: absolute;
    margin: 0 auto;
    left: 50%;
    transform: translateX(-50%);
  `};
`;

const DialogForm = styled.form`
  width: 100%;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SVGIconName = styled.span`
  font-size: 1.6rem;
  line-height: 1.6rem;
  margin-left: 16px;
`;

const LinkToWebSite = styled.a`
  ${props => css`
    ${applyStyle(props)}
  `}
`;

const onSubmitHandler = e => {
  e.preventDefault();
};

const LoginModalDialog = forwardRef(({ onModalCloseHandler, viewport }, ref) => {
  const { isDesktop, isMobile, type } = viewport;
  const $rootNode = document.getElementById('root');
  $rootNode.setAttribute('aria-hidden', 'true');

  useEffect(() => {
    ref.current.focus();

    const handleFocusTrap = e => {
      const dialogNode = ref.current;
      const focusableNodeList = dialogNode.querySelectorAll(
        'input, button, textarea, select, [href]'
      );

      const [firstFocusableNode] = focusableNodeList;
      const lastFocusableNode = focusableNodeList[focusableNodeList.length - 1];

      const key = e.keyCode;
      if (e.target === firstFocusableNode && e.shiftKey && key === 9) {
        e.preventDefault();
        lastFocusableNode.focus();
      }
      if (e.target === lastFocusableNode && !e.shiftKey && key === 9) {
        e.preventDefault();
        firstFocusableNode.focus();
      }
    };

    window.addEventListener('keydown', handleFocusTrap);
    window.addEventListener('keyup', onModalCloseHandler);

    return () => {
      $rootNode.removeAttribute('aria-hidden');
      window.removeEventListener('keydown', handleFocusTrap);
      window.removeEventListener('keyup', onModalCloseHandler);
    };
  }, [$rootNode, onModalCloseHandler, ref]);

  return (
    <>
      <Modal onClick={onModalCloseHandler}>
        <Dialog
          ref={ref}
          role="dialog"
          width={`${isDesktop ? '500px' : type === 'sm' ? '85%' : '85%'}`}
          height={`${isDesktop ? '500px' : type === 'sm' ? '400px' : '340px'}`}
          padding={`${isDesktop ? '30px' : type === 'sm' ? '50px' : '30px'}`}
          borderRadius={5}
          tabIndex={0}
        >
          <Heading
            as="h2"
            fontSize={+`${isDesktop ? 3.5 : type === 'sm' ? 3 : 2.5}`}
            color="#FFFFFF"
            margin="10px 0 35px 0"
            textAlign="center"
          >
            시작하기
          </Heading>
          <Container
            width={`${isDesktop ? '100%' : '100%'}`}
            display={`${isDesktop ? 'flex' : ''}`}
            justifyContent={`${isDesktop ? 'center' : ''}`}
            alignItems="center"
            flexFlow="column"
          >
            <Button
              aria-label="구글 로그인"
              width={`${isDesktop ? '320px' : '100%'}`}
              height={`${type === 'xs' ? '48px' : '66px'}`}
              borderRadius={30}
              background="#ffffff"
              margin={`${isMobile ? '0 0 10px 0' : '0 0 30px 0'}`}
              fontWeight={700}
              onClick={() => {
                window.location.href = `${process.env.REACT_APP_API_URL}/auth/google`;
              }}
            >
              <IconContainer>
                <SVGIcon type={'Google'} width="30px" height="30px"></SVGIcon>
                <SVGIconName>Google</SVGIconName>
              </IconContainer>
            </Button>
            <Button
              aria-label="깃허브 로그인"
              width={`${isDesktop ? '320px' : '100%'}`}
              height={`${type === 'xs' ? '48px' : '66px'}`}
              borderRadius={30}
              background="#ffffff"
              fontWeight={700}
              margin={`${isMobile ? '0 0 10px 0' : ''}`}
              onClick={() => {
                window.location.href = `${process.env.REACT_APP_API_URL}/auth/github`;
              }}
            >
              <IconContainer>
                <SVGIcon type="GithubBlack" width="30px" height="30px"></SVGIcon>
                <SVGIconName>Github</SVGIconName>
              </IconContainer>
            </Button>
          </Container>
          <Container display="flex" alignItems="center" position="relactive">
            <DivisionDiv $width={`${isDesktop ? '146px' : type === 'sm' ? '80px' : '80px'}`}>
              또는
            </DivisionDiv>
            <DivisionLine
              $height={`${isDesktop ? '44px' : type === 'sm' ? '20px' : '20px'}`}
              $marginBottom={`${isDesktop ? '42px' : type === 'sm' ? '20px' : '20px'}`}
            ></DivisionLine>
          </Container>
          <DialogForm onSubmit={onSubmitHandler}>
            {/* <Input
              id="dialogInput"
              aria-label="이메일 로그인"
              label="이메일 주소를 입력해주세요 :)"
              autoComplete="off"
              labelFontSize={`${isDesktop ? '2' : type === 'sm' ? '1.5' : '1.1'}`}
              width={`${isDesktop ? '550px' : type === 'sm' ? '100%' : '100%'}`}
              height={`${type === 'xs' ? '48px' : '66px'}`}
              borderRadius={30}
              margin="0 auto"
              padding="21px 0 21px 26px"
              display="block"
              beforeTranslate={`${isDesktop ? '4.2' : type === 'sm' ? '4' : '3'}`}
              afterTranslate={`${isDesktop ? '-1.5' : type === 'sm' ? '-1' : '-1'}`}
              beforeMargin={`${isDesktop ? '80' : type === 'sm' ? '20' : '20'}`}
              afterMargin={`${isDesktop ? '60' : type === 'sm' ? '4.2' : '10'}`}
            /> */}
            <Heading
              as="h3"
              color="#FFFFFF"
              fontSize={isDesktop ? 2 : type === 'sm' ? 1.8 : 1.4}
              fontWeight={400}
              textAlign="center"
            >
              Suits에서 기술면접 준비하기
            </Heading>
            <LinkToWebSite
              href="https://github.com/TEAM-SUITS/Suits"
              target="_blank"
              $width={`${isDesktop ? '320px' : '100%'}`}
              $height={`${type === 'xs' ? '48px' : '66px'}`}
              $background="#ffffff"
              $borderRadius={30}
              $display="flex"
              $flexFlow="column"
              $alignItems="center"
              $justifyContent="center"
              $margin={`${isDesktop ? '21px auto' : '10px 0 0 0 '}`}
            >
              <Span fontSize={1.4} fontWeight={400} margin="0 0 4px 0">
                기술 면접을 준비하는 단정한 습관
              </Span>
              <SVGIcon type="Suits" />
            </LinkToWebSite>
          </DialogForm>
          <Button
            width={22}
            height={22}
            background="transparent"
            border="0"
            position="absolute"
            top="20px"
            right="20px"
            onClick={onModalCloseHandler}
            color="#FFFFFF"
            fontSize={2.2}
          >
            X
          </Button>
        </Dialog>
      </Modal>
    </>
  );
});

export default LoginModalDialog;
