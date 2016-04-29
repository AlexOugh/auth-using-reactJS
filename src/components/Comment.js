
import React from 'react';

const Comment = ({ id, author, text }) => (
  <div className="comment">
    <h2 className="commentAuthor">
      {id}. {author}
    </h2>
    {text}
  </div>
);

Comment.propTypes = {
  id: React.PropTypes.string.isRequired,
  author: React.PropTypes.string.isRequired,
  text: React.PropTypes.string.isRequired
};

export default Comment;
