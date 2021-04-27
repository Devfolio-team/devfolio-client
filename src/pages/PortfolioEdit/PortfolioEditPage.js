import React, { useRef } from 'react';
import styled from 'styled-components';
import { Formik, Form } from 'formik';
import { PortfolioEditProfile, PortfolioEditContents } from 'containers';

const StyledPortfolioEditPage = styled.main``;

const PortfolioEditPage = () => {
  const editorRef = useRef(null);

  // 나중에 데이터베이스 연동할때 사용
  // const getContents = () => {
  //   return editorRef.current.getInstance().getHtml();
  // };

  return (
    <StyledPortfolioEditPage>
      <Formik
        initialValues={{
          userName: '',
          nickname: '',
          githubUrl: '',
          email: '',
          blogUrl: '',
          techStacks: [],
          thumbnail: null,
        }}
        onSubmit={values => {
          // console.log(values);
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
