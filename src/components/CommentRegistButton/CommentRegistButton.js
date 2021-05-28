import React from 'react';
import styled from 'styled-components';
import { func, bool } from 'prop-types';

const StyledCommentRegistButton = styled.button`
  width: 99px;
  height: 32px;
  background: #428bca;
  color: #ffffff;
  font-size: 1.4rem;
  font-weight: 700;
  border-radius: 5px;
  &[disabled] {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

const CommentRegistButton = ({ onClick, disabled, ...restProps }) => {
  return <StyledCommentRegistButton onClick={onClick} disabled={disabled} {...restProps} />;
};

CommentRegistButton.propTypes = {
  /** 버튼이 클릭됐을때 발생 할  이벤트 핸들러를 전달해줍니다. */
  onClick: func,
  /** 상태나 값에 따라 버튼을 활성화, 비활성화 시키기 위해 boolean값을 전달해줍니다. */
  disabled: bool,
};

export default CommentRegistButton;
