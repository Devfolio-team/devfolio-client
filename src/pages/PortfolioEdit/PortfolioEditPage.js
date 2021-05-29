import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Formik, Form } from 'formik';
import { PortfolioEditProfile, PortfolioEditContents, WithdrawalModalDialog } from 'containers';
import { useSelector, useDispatch } from 'react-redux';
import { editAccountMiddleware } from 'store/modules/auth/authMiddleware';
import { useHistory } from 'react-router-dom';
import scrollToTop from 'utils/scrollToTop';
import { portfolioValidationSchema, color } from 'utils';
import { Container, Button, Paragraph, Portal } from 'components';
import useDetectViewport from 'hooks/useDetectViewport';

const StyledPortfolioEditPage = styled.main``;

const DivLine = styled.div`
  width: 80%;
  height: 1px;
  background: ${color.darkGray};
  opacity: 0.5;
`;

const PortfolioEditPage = () => {
  const editorRef = useRef(null);
  const { isDesktop } = useDetectViewport();
  const authState = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const history = useHistory();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const ref = useRef(null);
  const beforeRef = useRef(null);
  const [profileColor, setProfileColor] = useState(
    authState.currentUser.profile_background || '#eaeaea'
  );

  const onColorChangeHandler = updatedColor => {
    setProfileColor(updatedColor.hex);
  };

  const getContents = () => {
    return editorRef.current.getInstance().getHtml();
  };

  const scrollToErrors = errors => {
    const errorKeys = Object.keys(errors);
    if (errorKeys.length > 0) {
      document.getElementById(errorKeys[0]).focus();
    }
  };

  const onModalOpenHandler = () => {
    setIsModalOpen(true);
  };

  useEffect(() => {
    scrollToTop();
    editorRef.current?.getInstance().setHtml(authState.currentUser.introduce);
  }, [authState.currentUser?.introduce]);

  if (!authState.currentUser) {
    history.push('/page-not-found');
    return null;
  }

  return (
    <StyledPortfolioEditPage>
      <Formik
        initialValues={{
          name: authState.currentUser?.name,
          nickname: authState.currentUser?.nickname,
          githubUrl: authState.currentUser?.github_url || '',
          email: authState.currentUser?.email || '',
          blogUrl: authState.currentUser?.blog_url || '',
          techStacks: [],
          profilePhoto: null,
        }}
        validationSchema={portfolioValidationSchema}
        initialTouched={{
          githubUrl: true,
          blogUrl: true,
          email: true,
        }}
        onSubmit={values => {
          const editedInfo = {
            ...values,
            introduce: getContents(),
            profileBackground: profileColor,
          };
          dispatch(editAccountMiddleware(authState.currentUser.user_id, editedInfo));
          history.push(`/portfolio/${authState.currentUser.user_id}`);
        }}
      >
        {({ errors, setFieldValue }) => {
          return (
            <Form>
              <PortfolioEditProfile
                errors={errors}
                setFieldValue={setFieldValue}
                onColorChangeHandler={onColorChangeHandler}
                profileColor={profileColor}
              />
              <PortfolioEditContents ref={editorRef} setFieldValue={setFieldValue} />
              <Container
                display="flex"
                flexFlow="column nowrap"
                justifyContent="center"
                alignItems="center"
                textAlign="center"
              >
                <Button
                  type="submit"
                  children="저장"
                  color={color.mainColor}
                  fontWeight="700"
                  margin={isDesktop ? '100px 0 127px 0' : '30px 0 63px 0'}
                  hoverColor={color.white}
                  hoverBackground={color.mainColor}
                  border={`1px solid ${color.mainColor}`}
                  onClick={() => {
                    scrollToErrors(errors);
                  }}
                />
                <DivLine />
                <Button
                  children="회원탈퇴"
                  color="#FF6B6B"
                  fontWeight="700"
                  fontSize={isDesktop ? 1.8 : 1.6}
                  margin={isDesktop ? '128px 0 25px 0' : '64px 0 25px 0'}
                  hoverColor={color.white}
                  hoverBackground="#FF6B6B"
                  background="transparent"
                  border="1px solid #FF6B6B"
                  onClick={onModalOpenHandler}
                  ref={beforeRef}
                />
                <Paragraph
                  color="#666"
                  fontSize={isDesktop ? 1.4 : 1.2}
                  fontWeight={700}
                  lineHeight={isDesktop ? 0 : 16}
                  margin={isDesktop ? '0 0 100px 0' : '0 0 50px 0'}
                >
                  탈퇴 시 작성하신 프로젝트 및 포트폴리오는{isDesktop ? null : <br />} 삭제되며
                  복구되지 않습니다.
                </Paragraph>
              </Container>
            </Form>
          );
        }}
      </Formik>
      {isModalOpen ? (
        <Portal id="modal-root">
          <WithdrawalModalDialog
            ref={ref}
            beforeRef={beforeRef}
            setIsModalOpen={setIsModalOpen}
            isModalOpen={isModalOpen}
          />
        </Portal>
      ) : null}
    </StyledPortfolioEditPage>
  );
};

PortfolioEditPage.defaultProps = {};

PortfolioEditPage.propTypes = {};

export default PortfolioEditPage;
