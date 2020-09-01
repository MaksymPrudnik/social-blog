import React from 'react';
import Comment from './Comment';

const CommentList = () => {
    return (
        <div className='comment-list-section'>
            <Comment />
            <Comment />
            <Comment />
        </div>
    )
}

export default CommentList;