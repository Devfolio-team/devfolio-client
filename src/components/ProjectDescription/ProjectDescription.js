import { forwardRef } from 'react';
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import ajax from 'apis/ajax';
import { Container, Heading, Paragraph } from 'components';
import styled, { css } from 'styled-components';

const StyledContainer = styled(Container)`
  grid-row: 6 /7;
  grid-column: span 2;
  ${({ vw }) => css`
    margin: ${vw >= 1280 ? 0 : '0 auto 60px auto'};
    width: ${vw >= 1280 ? '100%' : '80%'};
  `}
`;

const ProjectDescription = forwardRef(({ vw }, ref) => {
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
    <StyledContainer vw={vw}>
      <Heading as="h3" color="#212121" fontSize={1.6} margin="0 0 20px 0">
        프로젝트 설명
      </Heading>
      <Paragraph color="#666" fontSize={1.4} lineHeight={28} margin="0 0 20px 0">
        프로젝트의 전체적인 설명과 주요 기능 혹은 내가 개발한 기능 등을 적어보아요!
      </Paragraph>
      <Editor
        previewStyle="vertical"
        height={vw >= 768 ? '500px' : '300px'}
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
    </StyledContainer>
  );
});

ProjectDescription.propTypes = {};

export default ProjectDescription;
