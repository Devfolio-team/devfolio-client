import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Formik, Form } from 'formik';
import { PortfolioEditProfile, PortfolioEditContents } from 'containers';
import { useSelector } from 'react-redux';

const StyledPortfolioEditPage = styled.main``;

const PortfolioEditPage = () => {
  const editorRef = useRef(null);
  const authState = useSelector(state => state.auth);

  // 나중에 데이터베이스 연동할때 사용
  // const getContents = () => {
  //   return editorRef.current.getInstance().getHtml();
  // };

  useEffect(() => {
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
        onSubmit={values => {
          console.log(values);
        }}
      >
        {({ errors, setFieldValue }) => {
          return (
            <Form>
              <PortfolioEditProfile errors={errors} setFieldValue={setFieldValue} />
              <PortfolioEditContents ref={editorRef} setFieldValue={setFieldValue} />
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
