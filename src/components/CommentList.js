
import React from 'react';
import Comment from './Comment';

const CommentList = (commentList) => {
  const commentNodes = commentList.data
    .map((comment) =>
      <Comment author={comment.author} key={comment.id} id={comment.id} text={comment.text} />
    );
  return (
    <div className="commentList">
      {commentNodes}
    </div>
  );
};

export default CommentList;
