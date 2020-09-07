import React from 'react';
import Comment from './Comment';

const CommentList = ({ comments }) => {
    return (
        <div className='comment-list-section'>
            {
                comments.length ? comments.map((comment, i) => <Comment comment={comment} key={i} />)
                : <h3>There're no comments</h3>
            }
        </div>
    )
}

export default CommentList;