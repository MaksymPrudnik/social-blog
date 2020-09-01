import React from 'react';
import './Comment.css';

import { Link } from 'react-router-dom';

const Comment = () => {
    const commentData = {
        createdBy: 'maksymprudnik',
        createdAt: '01-09-20 03:01 AM',
        body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est, sunt in.'
    }
    return (
        <div className='comment-section'>
            <span className='comment-author'>
                <Link to={`/user/${commentData.createdBy}`}>@{commentData.createdBy}</Link>
            </span>
            <span className='comment-date'>{commentData.createdAt}</span>
            <div className='comment-body'>{commentData.body}</div>
        </div>
    )
}

export default Comment;