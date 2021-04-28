import { forwardRef } from 'react';
import { Container, Heading, Paragraph, ChipInputSearch, Button } from 'components';
import { Editor } from '@toast-ui/react-editor';
import { color } from 'utils';
import useDetectViewport from 'hooks/useDetectViewport';
import ajax from 'apis/ajax';

const PortfolioEditContents = forwardRef(({ setFieldValue }, ref) => {
  const { isDesktop, vw } = useDetectViewport();

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

  return (
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
          lineHeight={isDesktop ? 0 : 22}
        >
          포트폴리오에 보여질 자기 소개를 {isDesktop ? null : <br />}최대한 자세히 적어주세요!
        </Paragraph>
        <Editor
          previewStyle="vertical"
          height={isDesktop ? '1000px' : '450px'}
          initialEditType="wysiwyg"
          useCommandShortcut={true}
          ref={ref}
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
        <ChipInputSearch id="ownTechStacks" setFieldValue={setFieldValue} profile={true} />
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
  );
});

export default PortfolioEditContents;
