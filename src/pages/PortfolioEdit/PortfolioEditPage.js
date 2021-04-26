import React, { createRef } from 'react';
import styled from 'styled-components';
import { Formik, Form, Field } from 'formik';
import { Container, DND, Input, Heading, Paragraph, Button, ChipInputSearch } from 'components';
import { Editor } from '@toast-ui/react-editor';
import ajax from 'apis/ajax';
import { color } from 'utils';

const StyledPortfolioEditPage = styled.main``;

const PortfolioEditPage = () => {
  const editorRef = createRef(null);

  const uploadImage = async blob => {
    try {
      const formData = new FormData();
      formData.append('image', blob);
      const res = await ajax.postImage(formData);
      return res.data;
    } catch (error) {
      throw new Error(error);
    }
  };

  const getContents = () => {
    return editorRef.current.getInstance().getHtml();
  };

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
          console.log(values);
        }}
      >
        {({ values, errors, setFieldValue }) => {
          return (
            <Form>
              <Container background="#F19D85" height="970px">
                <DND setFieldValue={setFieldValue} errors={errors} />
                <Field
                  component={Input}
                  name="userName"
                  id="userName"
                  label="이름"
                  labelFontSize={2}
                  inputFontSize={2}
                  width="100%"
                  height={42}
                  border="1px solid #EAEAEA"
                  borderRadius={5}
                  margin="10px 0 10px 0"
                  boxShadow="1px 2px 4px rgba(0, 0, 0, 0.1)"
                  beforeTranslate={4}
                  afterTranslate={0}
                  beforeMargin={12}
                  afterMargin={0}
                />
                <Field
                  component={Input}
                  name="nickname"
                  id="nickname"
                  label="닉네임"
                  labelFontSize={2}
                  inputFontSize={2}
                  width="100%"
                  height={42}
                  border="1px solid #EAEAEA"
                  borderRadius={5}
                  margin="10px 0 10px 0"
                  boxShadow="1px 2px 4px rgba(0, 0, 0, 0.1)"
                  beforeTranslate={4}
                  afterTranslate={0}
                  beforeMargin={12}
                  afterMargin={0}
                />
                <Field
                  component={Input}
                  name="githubUrl"
                  id="githubUrl"
                  label="GitHub 주소를 입력하세요"
                  labelFontSize={2}
                  inputFontSize={2}
                  width="100%"
                  height={42}
                  border="1px solid #EAEAEA"
                  borderRadius={5}
                  margin="10px 0 10px 0"
                  boxShadow="1px 2px 4px rgba(0, 0, 0, 0.1)"
                  beforeTranslate={4}
                  afterTranslate={0}
                  beforeMargin={12}
                  afterMargin={0}
                />
                <Field
                  component={Input}
                  name="email"
                  id="email"
                  label="이메일을 입력하세요"
                  labelFontSize={2}
                  inputFontSize={2}
                  width="100%"
                  height={42}
                  border="1px solid #EAEAEA"
                  borderRadius={5}
                  margin="10px 0 10px 0"
                  boxShadow="1px 2px 4px rgba(0, 0, 0, 0.1)"
                  beforeTranslate={4}
                  afterTranslate={0}
                  beforeMargin={12}
                  afterMargin={0}
                />
                <Field
                  component={Input}
                  name="blogUrl"
                  id="blogUrl"
                  label="블로그 주소를 입력하세요"
                  labelFontSize={2}
                  inputFontSize={2}
                  width="100%"
                  height={42}
                  border="1px solid #EAEAEA"
                  borderRadius={5}
                  margin="10px 0 0 0"
                  boxShadow="1px 2px 4px rgba(0, 0, 0, 0.1)"
                  beforeTranslate={4}
                  afterTranslate={0}
                  beforeMargin={12}
                  afterMargin={0}
                />
              </Container>
              <Container>
                <Heading
                  as="h3"
                  color="#212121"
                  fontSize={4}
                  display="inline-block"
                  lineHeight="20px"
                  borderBottom="14px solid rgba(66,139,202,0.6)"
                >
                  자기 소개
                </Heading>
                <Paragraph color="#666" fontSize={2.4} fontWeight={600}>
                  포트폴리오에 보여질 자기 소개를 최대한 자세히 적어주세요!
                </Paragraph>
                <Editor
                  previewStyle="vertical"
                  height="500px"
                  initialEditType="wysiwyg"
                  useCommandShortcut={true}
                  ref={editorRef}
                  hooks={{
                    addImageBlobHook: async (blob, callback) => {
                      try {
                        const { src, alt } = await uploadImage(blob);
                        callback(src, alt);
                        return false;
                      } catch (error) {
                        throw new Error(error);
                      }
                    },
                  }}
                />
              </Container>
              <Container>
                <Heading
                  as="h3"
                  color="#212121"
                  fontSize={4}
                  display="inline-block"
                  lineHeight="20px"
                  borderBottom="14px solid rgba(66,139,202,0.6)"
                >
                  보유 기술 스택
                </Heading>
                <ChipInputSearch id="ownTechStacks" setFieldValue={setFieldValue} />
              </Container>
              <Button
                type="submit"
                children="저장"
                color={color.mainColor}
                fontWeight="700"
                margin="0 0 0 30px"
                hoverColor={color.white}
                hoverBackground={color.mainColor}
                border={`1px solid ${color.mainColor}`}
              />
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
