import React from 'react';
import './Comment.css';

import { Link } from 'react-router-dom';

const Comment = ({ comment }) => {
    const createdAt = new Date(comment.createdAt).toLocaleString();
    return (
        <div className='comment-section'>
            <span className='comment-author'>
                <Link to={`/user/${comment.createdBy}`}>@{comment.createdBy}</Link>
            </span>
            <span className='comment-date'>{createdAt}</span>
            <div className='comment-body'>{comment.body}</div>
        </div>
    )
}

export default Comment;