import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Formik, Form } from 'formik';
import { PortfolioEditProfile, PortfolioEditContents } from 'containers';
import { useSelector, useDispatch } from 'react-redux';
import { editAccountMiddleware } from 'store/modules/auth/authMiddleware';
import { useHistory } from 'react-router-dom';
import scrollToTop from 'utils/scrollToTop';
import { portfolioValidationSchema, color } from 'utils';
import { Container, Button } from 'components';

const StyledPortfolioEditPage = styled.main``;

const PortfolioEditPage = () => {
  const editorRef = useRef(null);
  const authState = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const history = useHistory();

  const getContents = () => {
    return editorRef.current.getInstance().getHtml();
  };

  const scrollToErrors = errors => {
    const errorKeys = Object.keys(errors);
    if (errorKeys.length > 0) {
      document.getElementById(errorKeys[0]).focus();
    }
  };

  useEffect(() => {
    scrollToTop();
    editorRef.current.getInstance().setHtml(authState.currentUser.introduce);
  }, [authState.currentUser.introduce]);

  return (
    <StyledPortfolioEditPage>
      <Formik
        initialValues={{
          name: authState.currentUser.name,
          nickname: authState.currentUser.nickname,
          githubUrl: authState.currentUser.github_url || '',
          email: authState.currentUser.email,
          blogUrl: authState.currentUser.blog_url || '',
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
          const editedInfo = { ...values, introduce: getContents() };
          dispatch(editAccountMiddleware(authState.currentUser.user_id, editedInfo));
          history.push(`/portfolio/${authState.currentUser.user_id}`);
        }}
      >
        {({ errors, setFieldValue }) => {
          return (
            <Form>
              <PortfolioEditProfile errors={errors} setFieldValue={setFieldValue} />
              <PortfolioEditContents ref={editorRef} setFieldValue={setFieldValue} />
              <Container display="flex" justifyContent="center">
                <Button
                  type="submit"
                  children="저장"
                  color={color.mainColor}
                  fontWeight="700"
                  margin="100px 0 0 0"
                  hoverColor={color.white}
                  hoverBackground={color.mainColor}
                  border={`1px solid ${color.mainColor}`}
                  onClick={() => {
                    scrollToErrors(errors);
                  }}
                />
              </Container>
            </Form>
          );
        }}
      </Formik>
    </StyledPortfolioEditPage>
  );
};

PortfolioEditPage.defaultProps = {};

PortfolioEditPage.propTypes = {};

export default PortfolioEditPage;
