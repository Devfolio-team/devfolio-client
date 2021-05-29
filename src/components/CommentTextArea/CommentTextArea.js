import { TextArea } from 'components';
import { default as styled } from 'styled-components';
import { string, number, oneOfType } from 'prop-types';

const StyledCommentTextArea = styled(TextArea)`
  width: ${({ width }) => (typeof width === 'number' ? `${width}px` : width)};
  height: 95px;
  border: 1px solid #eaeaea;

  &[disabled] {
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

function CommentTextArea({ id, width, label, field, onChange, margin, ...restProps }) {
  return (
    <StyledCommentTextArea
      id={id}
      label={label}
      beforeTranslate={2.5}
      afterTranslate={-1}
      beforeMargin={10}
      afterMargin={0}
      width={width}
      field={field}
      onChange={onChange}
      margin={margin}
      {...restProps}
    />
  );
}

CommentTextArea.propTypes = {
  /** textarea와 label을 연결해주는 id를 입력합니다. (필수) */
  id: string.isRequired,
  /** textarea에 대한 label요소의 텍스트를 입력합니다. (필수) */
  label: string.isRequired,
  /** CommentTextArea컴포넌트의 너비를 number나 string값으로 설정합니다. number값은 기본적으로 px단위로 적용됩니다. */
  width: oneOfType([string, number]),
};
export default CommentTextArea;
