import { ModalDialog } from 'containers';
import { forwardRef, useState, useRef } from 'react';
import { Heading, Paragraph, Input, Button } from 'components';
import useDetectViewport from 'hooks/useDetectViewport';
import { color } from 'utils';
import ajax from 'apis/ajax';

const NewTechStackModalDialog = ({ setIsModalOpen, isModalOpen, beforeRef }) => {
  const { isDesktop, vw } = useDetectViewport();
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef();

  const onChangeInputValueHandler = e => {
    setInputValue(e.target.value);
  };

  const onClickSubmitHandler = async () => {
    await ajax.requestNewTechStack(inputRef.current.value);
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
        새로운 기술 스택 등록 신청
      </Heading>
      <Paragraph
        color="#fff"
        fontSize={vw >= 555 ? 1.6 : 1.4}
        margin={vw >= 769 ? '30px 0 30px 0' : '20px 0 20px 0'}
        lineHeight="25px"
      >
        신청을 하면 검토 후 추가됩니다. 승인이 완료 될 때까지는 해당 기술을 입력할 수 없습니다.
      </Paragraph>
      <Input
        id="applyNewStack"
        label="새로운 기술 스택"
        ref={inputRef}
        labelFontSize={1.2}
        value={inputValue}
        onChange={onChangeInputValueHandler}
        width="100%"
        height="40px"
        border="1px solid #EAEAEA"
        borderRadius={5}
        withdrawal="true"
        boxShadow="1px 2px 4px rgba(0, 0, 0, 0.1)"
        beforeTranslate={2.6}
        afterTranslate={-1}
        beforeMargin={-340}
        afterMargin={-365}
      />
      <Button
        type="submit"
        color={color.white}
        fontWeight="700"
        margin="100px 0 0 0"
        hoverColor={color.mainColor}
        hoverBackground={color.white}
        border={`1px solid ${color.white}`}
        onClick={onClickSubmitHandler}
      >
        신청하기
      </Button>
    </ModalDialog>
  );
};

export default NewTechStackModalDialog;
