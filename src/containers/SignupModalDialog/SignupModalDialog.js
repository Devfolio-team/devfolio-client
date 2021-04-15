import { Button, Container, Dialog, Heading, Input, Modal, SVGIcon } from 'components';
import React, { forwardRef, useEffect } from 'react';

const SignupModalDialog = forwardRef(({ onModalCloseHandler }, ref) => {
  const $rootNode = document.getElementById('root');
  $rootNode.setAttribute('aria-hidden', 'true');

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
          width={710}
          height={750}
          borderRadius={8}
          position="absolute"
        >
          <Heading
            as={'h2'}
            fontSize={3.5}
            color={'#FFFFFF'}
            margin="10px 0 35px 0"
            textAlign="center"
          >
            회원가입
          </Heading>
          <Container width={550}>
            <Input
              id="useridInput"
              width={550}
              height={65}
              borderRadius={30}
              margin="0 auto 20px auto"
              padding="21px 0 21px 26px"
              display="block"
              readOnly="readOnly"
            />
            <Input
              id="NameInput"
              label="이름 :)"
              width={550}
              height={65}
              borderRadius={30}
              margin="0 auto 20px auto"
              padding="21px 0 21px 26px"
              display="block"
              beforeTranslate="4.2"
              afterTranslate="-1"
              beforeMargin="40"
              afterMargin="40"
            />
            <Input
              id="NickNameInput"
              label="닉네임 :)"
              width={550}
              height={65}
              borderRadius={30}
              margin="0 auto 20px auto"
              padding="21px 0 21px 26px"
              display="block"
              beforeTranslate="4.2"
              afterTranslate="-1"
              beforeMargin="40"
              afterMargin="40"
            />
            <Input
              id="PasswordInput"
              label="비밀번호 :)"
              width={550}
              height={65}
              borderRadius={30}
              margin="0 auto 20px auto"
              padding="21px 0 21px 26px"
              display="block"
              beforeTranslate="4.2"
              afterTranslate="-1"
              beforeMargin="40"
              afterMargin="40"
            />
            <Input
              id="PasswordCheckInput"
              label="비밀번호 확인 :)"
              width={550}
              height={65}
              borderRadius={30}
              margin="0 auto 20px auto"
              padding="21px 0 21px 26px"
              display="block"
              beforeTranslate="4.2"
              afterTranslate="-1"
              beforeMargin="40"
              afterMargin="40"
            />
          </Container>
          <Button
            width={260}
            height={65}
            background={'#2c3035'}
            border="1px solid #ffffff"
            borderRadius={30}
            color={'#ffffff'}
            display="block"
            margin="40px auto 0 auto"
          >
            회원가입
          </Button>
          <Button
            width={22}
            height={22}
            background={'transparent'}
            border="0"
            position="absolute"
            top="20px"
            right="20px"
            onClick={onModalCloseHandler}
          >
            <SVGIcon type="X" onClick={onModalCloseHandler} width={22} height={22} />
          </Button>
        </Dialog>
      </Modal>
    </>
  );
});

export default SignupModalDialog;
