import React, { useEffect, useReducer, useRef } from 'react';
import styled from 'styled-components';
import { Comment, CommentsForm } from 'components';
import ajax from 'apis/ajax';
import { number } from 'prop-types';

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

  & > li {
    outline: none;
  }
`;

const initialState = [];

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_COMMENTS':
      return [...state, ...action.payload];
    case 'ADD_COMMENT':
      return [...state, action.payload];
    case 'DELETE_COMMENT':
      return state.map(comment =>
        comment.comment_id === action.payload.commentId ? { ...comment, is_deleted: 1 } : comment
      );
    case 'UPDATE_COMMENT':
      return state.map(comment =>
        comment.comment_id === action.payload.commentId
          ? { ...comment, contents: action.payload.updateComment }
          : comment
      );
    default:
      return state;
  }
};

const ProjectComments = ({ projectId }) => {
  const [commentsData, dispatch] = useReducer(reducer, initialState);

  const commentListRef = useRef();

  useEffect(() => {
    if (projectId) {
      const fetchCommentsData = async () => {
        try {
          const { data } = await ajax.fetchComments(projectId);
          dispatch({
            type: 'FETCH_COMMENTS',
            payload: data.commentsData,
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
      <CommentsForm
        projectId={projectId}
        commentCount={commentsData.length}
        dispatch={dispatch}
        commentListRef={commentListRef}
      />
      <CommentsList ref={commentListRef}>
        {commentsData.map(comment => {
          return comment.parent ? null : (
            <Comment
              key={comment.comment_id}
              data={comment}
              commentsData={commentsData}
              dispatch={dispatch}
              projectId={projectId}
            />
          );
        })}
      </CommentsList>
    </StyledProjectComments>
  );
};

ProjectComments.propTypes = {
  /** 어떤 프로젝트의 댓글인지 판단하여 데이터 베이스에 댓글 데이터를 요청하기 위한 값입니다. */
  projectId: number.isRequired,
};

export default ProjectComments;
