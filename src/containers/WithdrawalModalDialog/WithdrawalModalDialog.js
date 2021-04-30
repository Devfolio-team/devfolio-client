import { forwardRef, useState } from 'react';
import { Button, Paragraph, Span, Heading, Input } from 'components';
import useDetectViewport from 'hooks/useDetectViewport';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { deleteAccountMiddleware } from 'store/modules/auth/authMiddleware';
import { ModalDialog } from 'containers';

const WithdrawalModalDialog = forwardRef(({ setIsModalOpen, beforeRef }, ref) => {
  const { isDesktop, vw } = useDetectViewport();
  const [isDisabled, setIsDisabled] = useState(true);
  const dispatch = useDispatch();
  const history = useHistory();
  const currentUser = useSelector(state => state.auth.currentUser);

  const onChangeHandler = e => {
    if (e.target.value === 'DevFolio의 회원 탈퇴에 동의합니다') setIsDisabled(false);
    else setIsDisabled(true);
  };

  const onWithdrawalHandler = () => {
    dispatch(deleteAccountMiddleware(currentUser.user_id));
    history.push('/');
  };

  return (
    <>
      <ModalDialog
        setIsModalOpen={setIsModalOpen}
        beforeRef={beforeRef}
        width={`${isDesktop ? '500px' : '85%'}`}
        height={`${isDesktop ? '500px' : '440px'}`}
        padding={`${isDesktop ? '50px 30px' : '30px'}`}
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
      </ModalDialog>
    </>
  );
});

export default WithdrawalModalDialog;
