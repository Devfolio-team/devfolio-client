import React, { useRef } from 'react';
import styled from 'styled-components';
import { Formik, Form, Field } from 'formik';
import { Container, DND, Input, Heading, Paragraph, Button, ChipInputSearch } from 'components';
import { Editor } from '@toast-ui/react-editor';
import ajax from 'apis/ajax';
import { color } from 'utils';

const StyledPortfolioEditPage = styled.main``;

const PortfolioEditPage = ({ viewport }) => {
  const editorRef = useRef(null);
  const { vw, isDesktop } = viewport;

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
              <Container background="#F19D85" height={isDesktop ? '970px' : '890px'}>
                <Container
                  width={vw >= 1440 ? 1440 : '100%'}
                  padding={isDesktop ? '70px 70px 0 70px' : '40px 30px 30px 30px'}
                  display="flex"
                  flexFlow="column nowrap"
                  alignItems="center"
                  minWidth="320px"
                  textAlign="center"
                >
                  <DND
                    setFieldValue={setFieldValue}
                    errors={errors}
                    profile={true}
                    borderRadius="50%"
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
                  />
                  <Field
                    component={Input}
                    name="userName"
                    id="userName"
                    label="이름"
                    labelFontSize={isDesktop ? 2 : 1.6}
                    inputFontSize={2}
                    width={isDesktop ? 300 : 315}
                    height={42}
                    border="1px solid #EAEAEA"
                    borderRadius={5}
                    margin="10px 0 10px 0"
                    boxShadow="1px 2px 4px rgba(0, 0, 0, 0.1)"
                    beforeTranslate={isDesktop ? 4 : 3.8}
                    afterTranslate={0}
                    beforeMargin={isDesktop ? -240 : -255}
                    afterMargin={isDesktop ? -260 : -275}
                  />
                  <Field
                    component={Input}
                    name="nickname"
                    id="nickname"
                    label="닉네임"
                    labelFontSize={isDesktop ? 2 : 1.6}
                    inputFontSize={2}
                    width={isDesktop ? 300 : 315}
                    height={42}
                    border="1px solid #EAEAEA"
                    borderRadius={5}
                    margin="10px 0 10px 0"
                    boxShadow="1px 2px 4px rgba(0, 0, 0, 0.1)"
                    beforeTranslate={isDesktop ? 4 : 3.8}
                    afterTranslate={0}
                    beforeMargin={isDesktop ? -225 : -240}
                    afterMargin={isDesktop ? -245 : -260}
                  />
                  <Field
                    component={Input}
                    name="githubUrl"
                    id="githubUrl"
                    label="GitHub 주소를 입력하세요"
                    labelFontSize={isDesktop ? 2 : 1.6}
                    inputFontSize={2}
                    width={isDesktop ? 300 : 315}
                    height={42}
                    border="1px solid #EAEAEA"
                    borderRadius={5}
                    margin="10px 0 10px 0"
                    boxShadow="1px 2px 4px rgba(0, 0, 0, 0.1)"
                    beforeTranslate={isDesktop ? 4 : 3.8}
                    afterTranslate={0}
                    beforeMargin={isDesktop ? -55 : -110}
                    afterMargin={isDesktop ? -75 : -130}
                  />
                  <Field
                    component={Input}
                    name="email"
                    id="email"
                    label="이메일을 입력하세요"
                    labelFontSize={isDesktop ? 2 : 1.6}
                    inputFontSize={2}
                    width={isDesktop ? 300 : 315}
                    height={42}
                    border="1px solid #EAEAEA"
                    borderRadius={5}
                    margin="10px 0 10px 0"
                    boxShadow="1px 2px 4px rgba(0, 0, 0, 0.1)"
                    beforeTranslate={isDesktop ? 4 : 3.8}
                    afterTranslate={0}
                    beforeMargin={isDesktop ? -110 : -155}
                    afterMargin={isDesktop ? -130 : -175}
                  />
                  <Field
                    component={Input}
                    name="blogUrl"
                    id="blogUrl"
                    label="블로그 주소를 입력하세요"
                    labelFontSize={isDesktop ? 2 : 1.6}
                    inputFontSize={2}
                    width={isDesktop ? 300 : 315}
                    height={42}
                    border="1px solid #EAEAEA"
                    borderRadius={5}
                    margin="10px 0 0 0"
                    boxShadow="1px 2px 4px rgba(0, 0, 0, 0.1)"
                    beforeTranslate={isDesktop ? 4 : 3.8}
                    afterTranslate={0}
                    beforeMargin={isDesktop ? -70 : -120}
                    afterMargin={isDesktop ? -90 : -140}
                  />
                  <Button
                    children="회원탈퇴"
                    color={color.white}
                    fontWeight="700"
                    fontSize={isDesktop ? 2.4 : 1.6}
                    margin={isDesktop ? '50px 0 15px 0' : '30px 0 15px 0'}
                    hoverColor="#FF6B6B"
                    hoverBackground={color.white}
                    background="#FF6B6B"
                  />
                  <Paragraph
                    color="#666"
                    fontSize={isDesktop ? 1.4 : 1.2}
                    fontWeight={700}
                    lineHeight={isDesktop ? 0 : 16}
                  >
                    탈퇴 시 작성하신 프로젝트 및 포트폴리오는{isDesktop ? null : <br />} 삭제되며
                    복구되지 않습니다.
                  </Paragraph>
                </Container>
              </Container>
              <Container
                padding={isDesktop ? '220px 70px 70px 70px' : '40px 30px'}
                width={vw >= 1440 ? 1440 : '100%'}
                minWidth="320px"
              >
                <Container textAlign={isDesktop ? 'left' : 'center'}>
                  <Heading
                    as="h3"
                    color="#212121"
                    fontSize={isDesktop ? 4 : 3}
                    display="inline-block"
                    lineHeight={isDesktop ? '20px' : '12px'}
                    borderBottom={`${isDesktop ? '14px' : '12px'} solid rgba(66,139,202,0.6)`}
                    margin="0 0 20px 0"
                  >
                    자기 소개
                  </Heading>
                  <Paragraph
                    color="#666"
                    fontSize={isDesktop ? 2.4 : 1.6}
                    fontWeight={600}
                    margin="0 0 60px 0"
                  >
                    포트폴리오에 보여질 자기 소개를 최대한 자세히 적어주세요!
                  </Paragraph>
                  <Editor
                    previewStyle="vertical"
                    height="1000px"
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
                <Container textAlign={isDesktop ? 'left' : 'center'}>
                  <Heading
                    as="h3"
                    color="#212121"
                    fontSize={isDesktop ? 4 : 3}
                    display="inline-block"
                    lineHeight={isDesktop ? '20px' : '12px'}
                    borderBottom={`${isDesktop ? '14px' : '12px'} solid rgba(66,139,202,0.6)`}
                    margin="80px 0 30px 0"
                  >
                    보유 기술 스택
                  </Heading>
                  <ChipInputSearch id="ownTechStacks" setFieldValue={setFieldValue} />
                </Container>
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
                  />
                </Container>
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
