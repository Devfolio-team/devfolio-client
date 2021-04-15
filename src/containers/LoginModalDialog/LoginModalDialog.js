import styled from 'styled-components';
import { Button, Container, Heading, Input, SVGIcon, Modal, Dialog } from 'components';
import { forwardRef, useEffect, React } from 'react';

const DivisionLine = styled.div`
  border-bottom: 1px solid #454b58;
  width: 100%;
  height: 44px;
  margin-bottom: 42px;
`;

const DivisionDiv = styled.div`
  color: #ffffff;
  background-color: #2c3035;
  width: 146px;
  height: 46px;
  line-height: 46px;
  text-align: center;
  margin: 0 auto;
  font-size: 16px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

const DialogForm = styled.form`
  width: 650px;
  height: 448px;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const SVGIconName = styled.span`
  font-size: 1.6rem;
  line-height: 1.6rem;
  margin-left: 16px;
`;

const onSubmitHandler = e => {
  e.preventDefault();
};

const LoginModalDialog = forwardRef(({ onModalCloseHandler }, ref) => {
  useEffect(() => {
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
      window.removeEventListener('keydown', handleFocusTrap);
      window.removeEventListener('keyup', onModalCloseHandler);
    };
  }, [onModalCloseHandler, ref]);

  return (
    <>
      <Modal onClick={onModalCloseHandler}>
        <Dialog
          ref={ref}
          role="dialog"
          width={710}
          height={500}
          margin="21rem auto 0 auto"
          borderRadius={8}
        >
          <Heading
            as={'h2'}
            fontSize={3.5}
            color={'#FFFFFF'}
            margin="10px 0 35px 0"
            textAlign="center"
          >
            시작하기
          </Heading>
          <Container width={550} display="flex" justifyContent="space-between">
            <Button
              ariaLabel="구글 로그인"
              width={260}
              height={66}
              borderRadius={30}
              bgColor={'#ffffff'}
            >
              <IconContainer>
                <SVGIcon type={'Google'} width={16} height={16}></SVGIcon>
                <SVGIconName>Google</SVGIconName>
              </IconContainer>
            </Button>
            <Button
              ariaLabel="깃허브 로그인"
              width={260}
              height={66}
              borderRadius={30}
              bgColor={'#ffffff'}
            >
              <IconContainer>
                <SVGIcon type={'GithubBlack'} width={16} height={16}></SVGIcon>
                <SVGIconName>Github</SVGIconName>
              </IconContainer>
            </Button>
          </Container>
          <Container display="flex" alignItems="center" position="relactive">
            <DivisionDiv>또는</DivisionDiv>
            <DivisionLine></DivisionLine>
          </Container>
          <DialogForm onSubmit={onSubmitHandler}>
            <Input
              id={'dialogInput'}
              label="이메일 주소를 입력해주세요 :)"
              // mode="hidden"
              width={550}
              height={65}
              borderRadius={30}
              margin={'0 auto'}
              padding={'21px 0 21px 26px'}
              display="block"
            />
            <Button
              width={260}
              height={65}
              background={'#2c3035'}
              border="1px solid #ffffff"
              borderRadius={30}
              color={'#ffffff'}
              display="block"
              margin="55px auto 0 auto"
            >
              로그인 / 회원가입
            </Button>
          </DialogForm>
          <Button
            width={22}
            height={22}
            background={'transparent'}
            color={'#ffffff'}
            border="0"
            fontSize={2}
            position="absolute"
            top="20px"
            right="20px"
            onClick={onModalCloseHandler}
          >
            X
          </Button>
        </Dialog>
      </Modal>
    </>
  );
});

export default LoginModalDialog;
