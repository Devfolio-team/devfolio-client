import React from 'react';
import styled from 'styled-components';
import { Comments, CommentsForm } from 'components';

const StyledProjectComments = styled.div`
  margin: 80px 0;

  @media (max-width: 768px) {
    padding: 0 30px;
  }
`;

const CommentsList = styled.ul`
  width: 627px;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ProjectComments = () => {
  return (
    <StyledProjectComments>
      <CommentsForm />
      <CommentsList>
        <Comments />
        <Comments />
      </CommentsList>
    </StyledProjectComments>
  );
};

export default ProjectComments;
