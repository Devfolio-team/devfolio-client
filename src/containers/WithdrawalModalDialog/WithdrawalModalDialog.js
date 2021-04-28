import { forwardRef, useEffect, useState } from 'react';
import { Modal, Dialog, Button, Paragraph, Span, Heading, Input } from 'components';
import useDetectViewport from 'hooks/useDetectViewport';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { deleteAccountMiddleware } from 'store/modules/auth/authMiddleware';

const WithdrawalModalDialog = forwardRef(({ onModalCloseHandler }, ref) => {
  const { isDesktop, vw } = useDetectViewport();
  const [isDisabled, setIsDisabled] = useState(true);
  const dispatch = useDispatch();
  const history = useHistory();
  const currentUser = useSelector(state => state.auth.currentUser);
  const $rootNode = document.getElementById('root');
  $rootNode.setAttribute('aria-hidden', 'true');

  const onChangeHandler = e => {
    if (e.target.value === 'DevFolio의 회원 탈퇴에 동의합니다') setIsDisabled(false);
    else setIsDisabled(true);
  };

  const onWithdrawalHandler = () => {
    dispatch(deleteAccountMiddleware(currentUser.user_id));
    history.push('/');
  };

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
          width={`${isDesktop ? '500px' : '85%'}`}
          height={`${isDesktop ? '500px' : '440px'}`}
          padding={`${isDesktop ? '50px 30px' : '30px'}`}
          borderRadius={5}
          tabIndex={0}
          textAlign="center"
          minWidth="320px"
        >
          <Heading as="h3" color="#fff" fontSize={vw >= 555 ? 2.6 : 2}>
            회원 탈퇴
          </Heading>
          <Paragraph
            color="white"
            fontWeight="700"
            fontSize={vw >= 555 ? 1.6 : 1.4}
            margin={vw >= 769 ? '30px 0 30px 0' : '20px 0 20px 0'}
          >
            정말로 탈퇴하시겠습니까?
          </Paragraph>
          <Paragraph
            padding="0 30px"
            color="white"
            fontSize={vw >= 555 ? 1.6 : 1.4}
            lineHeight={vw >= 480 ? '30px' : '20px'}
          >
            <Span fontWeight="700">탈퇴</Span>를 하시면 작성하신 프로젝트 및 포트폴리오가 완전히{' '}
            <Span fontWeight="700" color="#ff0000">
              제거
            </Span>
            됩니다.
            <br />
            <br />
            탈퇴를 원하시면 아래의 문구를 똑같이 입력해주세요.
          </Paragraph>
          <Paragraph
            fontSize={1.6}
            fontWeight="700"
            color="#fff"
            margin={vw >= 768 ? '20px 0 20px 0' : '10px 0 10px 0'}
          >
            "DevFolio의 회원 탈퇴에 동의합니다"
          </Paragraph>
          <Input
            withdrawal={true}
            name="withdrawal"
            id="withdrawal"
            mode="hidden"
            label="회원탈퇴 동의 입력칸"
            width="80%"
            height={vw >= 480 ? 42 : 30}
            border="1px solid #EAEAEA"
            borderRadius={5}
            inputFontSize={1.6}
            fontWeight={600}
            padding="0"
            textAlign="center"
            margin="20px 0 0 0"
            boxShadow="1px 2px 4px rgba(0, 0, 0, 0.1)"
            onChange={onChangeHandler}
          />
          <Button
            width="80%"
            height={vw >= 480 ? 42 : 30}
            borderRadius={5}
            color="#d73a49"
            fontSize={vw >= 480 ? 1.6 : 1.5}
            fontWeight={700}
            background="#fafbfc"
            margin="20px 0 0 0"
            hoverBackground="#d73a49"
            hoverColor="#fafbfc"
            disabled={isDisabled}
            onClick={onWithdrawalHandler}
          >
            {vw >= 480 ? '위의 내용을 이해하고, 탈퇴를 진행합니다' : '탈퇴를 진행합니다'}
          </Button>

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

export default WithdrawalModalDialog;
