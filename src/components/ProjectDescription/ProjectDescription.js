import { forwardRef } from 'react';
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import axios from 'axios';
const { Container, Heading, Paragraph } = require('components');

// TODO: ref위에서 받아와서 사용
const ProjectDescription = forwardRef((props, ref) => {
  // TODO: axios ajax로 바꾸고 s3 URL 나중에 바꿔주기
  const uploadImage = async blob => {
    try {
      const formData = new FormData();
      formData.append('image', blob);
      const res = await axios.post('http://15.165.145.100:3002/image_upload', formData, {
        headers: {
          'Content-type': 'multipart/form-data',
        },
      });
      return res.data;
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <Container>
      <Heading as="h2" color="#212121" fontSize={1.6} margin="0 0 20px 0">
        프로젝트 설명
      </Heading>
      <Paragraph color="#666" fontSize={1.4} lineHeight={28} margin="0 0 20px 0">
        프로젝트의 전체적인 설명과 주요 기능 혹은 내가 개발한 기능 등을 적어보아요!
      </Paragraph>
      <Editor
        previewStyle="vertical"
        height="600px"
        initialEditType="markdown"
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
  );
});

ProjectDescription.propTypes = {};

export default ProjectDescription;
