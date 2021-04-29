import { Container, DND, Button, Input, FormErrorMessage, SVGIcon } from 'components';
import { color } from 'utils';
import { Field, ErrorMessage } from 'formik';
import useDetectViewport from 'hooks/useDetectViewport';
import { useState } from 'react';
import { SwatchesPicker } from 'react-color';

const PortfolioEditProfile = ({ setFieldValue, errors }) => {
  const { isDesktop, vw } = useDetectViewport();
  const [isDeleted, setIsDeleted] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [profileColor, setProfileColor] = useState('#fff');
  const [showColorPicker, setShowColorPicker] = useState(false);

  const onClickDeleteHandler = () => {
    if (!isDeleted && window.confirm('정말로 프로필 사진을 지우시겠습니까?')) {
      setIsDeleted(true);
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  };

  const onColorChangeHandler = updatedColor => {
    setProfileColor(updatedColor.hex);
  };

  const onClickShowColorPickerHandler = () => {
    setShowColorPicker(!showColorPicker);
  };

  return (
    <Container background={profileColor} height={isDesktop ? '970px' : '890px'}>
      <Container
        width={vw >= 1440 ? 1440 : '100%'}
        padding={isDesktop ? '70px 70px 0 70px' : '40px 30px 30px 30px'}
        display="flex"
        flexFlow="column nowrap"
        alignItems="center"
        minWidth="320px"
        textAlign="center"
      >
        <Button
          width="48px"
          height="48px"
          borderRadius={0}
          padding="0"
          position="absolute"
          top="94px"
          right="30px"
          onClick={onClickShowColorPickerHandler}
        >
          <SVGIcon type="Palette" />
        </Button>
        <Container position="absolute" top="152px" right="30px">
          {showColorPicker && (
            <SwatchesPicker color={profileColor} onChange={onColorChangeHandler} />
          )}
        </Container>
        <DND
          setFieldValue={setFieldValue}
          errors={errors}
          profile={true}
          borderRadius="50%"
          isDeleted={isDeleted}
          setIsDeleted={setIsDeleted}
          setIsDisabled={setIsDisabled}
        />
        <Button
          children="이미지 제거"
          color={color.mainColor}
          fontWeight="700"
          margin="30px 0 20px 0"
          hoverColor={color.white}
          hoverBackground={color.mainColor}
          border={`1px solid ${color.mainColor}`}
          background={color.white}
          onClick={onClickDeleteHandler}
          disabled={isDisabled}
        />
        <Field
          component={Input}
          name="name"
          id="name"
          label="이름"
          labelFontSize={isDesktop ? 1.6 : 1.4}
          inputFontSize={isDesktop ? 1.6 : 1.4}
          width={isDesktop ? 300 : 315}
          height={42}
          border="1px solid #EAEAEA"
          borderRadius={5}
          margin="10px 0 10px 0"
          boxShadow="1px 2px 4px rgba(0, 0, 0, 0.1)"
          beforeTranslate={isDesktop ? 3.9 : 3.8}
          afterTranslate={0}
          beforeMargin={isDesktop ? -245 : -260}
          afterMargin={isDesktop ? -265 : -280}
        />
        <Field
          component={Input}
          name="nickname"
          id="nickname"
          label="닉네임"
          labelFontSize={isDesktop ? 1.6 : 1.4}
          inputFontSize={isDesktop ? 1.6 : 1.4}
          width={isDesktop ? 300 : 315}
          height={42}
          border="1px solid #EAEAEA"
          borderRadius={5}
          margin="10px 0 10px 0"
          boxShadow="1px 2px 4px rgba(0, 0, 0, 0.1)"
          beforeTranslate={isDesktop ? 3.9 : 3.8}
          afterTranslate={0}
          beforeMargin={isDesktop ? -230 : -245}
          afterMargin={isDesktop ? -250 : -265}
        />
        <Field
          component={Input}
          name="githubUrl"
          id="githubUrl"
          label="GitHub 주소를 입력하세요"
          labelFontSize={isDesktop ? 1.6 : 1.4}
          inputFontSize={isDesktop ? 1.6 : 1.4}
          width={isDesktop ? 300 : 315}
          height={42}
          border="1px solid #EAEAEA"
          borderRadius={5}
          margin="10px 0 10px 0"
          boxShadow="1px 2px 4px rgba(0, 0, 0, 0.1)"
          beforeTranslate={isDesktop ? 3.9 : 3.8}
          afterTranslate={0}
          beforeMargin={isDesktop ? -95 : -130}
          afterMargin={isDesktop ? -115 : -150}
          errors={errors}
        />
        <ErrorMessage name="githubUrl" component={FormErrorMessage} margin="0 0 10px -120px" />
        <Field
          component={Input}
          name="email"
          id="email"
          label="이메일을 입력하세요"
          labelFontSize={isDesktop ? 1.6 : 1.4}
          inputFontSize={isDesktop ? 1.6 : 1.4}
          width={isDesktop ? 300 : 315}
          height={42}
          border="1px solid #EAEAEA"
          borderRadius={5}
          margin="10px 0 10px 0"
          boxShadow="1px 2px 4px rgba(0, 0, 0, 0.1)"
          beforeTranslate={isDesktop ? 3.9 : 3.8}
          afterTranslate={0}
          beforeMargin={isDesktop ? -135 : -165}
          afterMargin={isDesktop ? -155 : -185}
          errors={errors}
        />
        <ErrorMessage name="email" component={FormErrorMessage} margin="0 0 10px -50px" />
        <Field
          component={Input}
          name="blogUrl"
          id="blogUrl"
          label="블로그 주소를 입력하세요"
          labelFontSize={isDesktop ? 1.6 : 1.4}
          inputFontSize={isDesktop ? 1.6 : 1.4}
          width={isDesktop ? 300 : 315}
          height={42}
          border="1px solid #EAEAEA"
          borderRadius={5}
          margin="10px 0 0 0"
          boxShadow="1px 2px 4px rgba(0, 0, 0, 0.1)"
          beforeTranslate={isDesktop ? 3.9 : 3.8}
          afterTranslate={0}
          beforeMargin={isDesktop ? -100 : -140}
          afterMargin={isDesktop ? -120 : -160}
          errors={errors}
        />
        <ErrorMessage name="blogUrl" component={FormErrorMessage} margin="10px 0 10px -120px" />
      </Container>
    </Container>
  );
};

export default PortfolioEditProfile;
