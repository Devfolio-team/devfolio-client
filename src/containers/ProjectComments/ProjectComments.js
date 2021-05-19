import React, { useEffect, useReducer } from 'react';
import styled from 'styled-components';
import { Comments, CommentsForm } from 'components';
import ajax from 'apis/ajax';

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

const initialState = [];

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_COMMENTS':
      return [...state, ...action.comments];
    default:
      return state;
  }
};

const ProjectComments = ({ projectId }) => {
  const [commentsData, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (projectId) {
      const fetchCommentsData = async () => {
        try {
          const { data } = await ajax.fetchComments(projectId);
          dispatch({
            type: 'FETCH_COMMENTS',
            comments: data.commentsData,
          });
        } catch (error) {
          throw new Error(error);
        }
      };

      fetchCommentsData();
    }
  }, [projectId]);

  return (
    <StyledProjectComments>
      <CommentsForm projectId={projectId} commentCount={commentsData.length} />
      <CommentsList>
        {commentsData.map(comment => {
          return comment.parent ? null : (
            <Comments key={comment.comment_id} data={comment} commentsData={commentsData} />
          );
        })}
      </CommentsList>
    </StyledProjectComments>
  );
};

export default ProjectComments;
