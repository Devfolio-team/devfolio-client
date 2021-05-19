import { ModalDialog } from 'containers';
import { Heading, Paragraph, Button } from 'components';
import useDetectViewport from 'hooks/useDetectViewport';
import { color } from 'utils';

const ConfirmModalDialog = ({ setIsModalOpen, isModalOpen, beforeRef }) => {
  const { isDesktop, vw } = useDetectViewport();

  const onClickConfirmHandler = () => {
    setIsModalOpen(false);
    beforeRef.current.focus();
    document.body.style.overflow = 'unset';
  };

  return (
    <ModalDialog
      setIsModalOpen={setIsModalOpen}
      isModalOpen={isModalOpen}
      beforeRef={beforeRef}
      width={`${isDesktop ? '500px' : '85%'}`}
      height={`${isDesktop ? '500px' : '440px'}`}
      padding={`${isDesktop ? '50px 30px' : '30px'}`}
      textAlign="center"
      minWidth="320px"
    >
      <Heading as="h3" color="#fff" fontSize={vw >= 555 ? 2.6 : 2}>
        새로운 기술 스택 등록 요청
      </Heading>
      <Paragraph
        color="#fff"
        fontSize={vw >= 555 ? 1.6 : 1.4}
        margin={vw >= 769 ? '60px 0 30px 0' : '20px 0 20px 0'}
        lineHeight="25px"
      >
        새로운 기술 스택을 신청하였습니다.
      </Paragraph>
      <Button
        type="submit"
        color={color.white}
        fontWeight="700"
        margin="100px 0 0 0"
        hoverColor={color.mainColor}
        hoverBackground={color.white}
        border={`1px solid ${color.white}`}
        onClick={onClickConfirmHandler}
      >
        확인
      </Button>
    </ModalDialog>
  );
};

export default ConfirmModalDialog;
