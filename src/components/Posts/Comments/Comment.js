import React from 'react';
import './Comment.css';

import { FaRegWindowClose, FaRegEdit } from 'react-icons/fa';
import { RiCheckboxLine, RiDeleteBinLine } from 'react-icons/ri';

import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCommentAction } from '../../../state/actions/deleteCommentAction';
import { updateCommentAction } from '../../../state/actions/updateCommentAction';
import { useState } from 'react';
import { useFormInput } from '../../../hooks/hooks';

const Comment = ({ comment, postOwner, postId }) => {
    const dispatch = useDispatch();
    const { currentUser } = useSelector(state => state.currentUser);
    const [updatingComment, setUpdatingComment] = useState(false);
    const body = useFormInput(comment.body);
    const token = localStorage.getItem('token');
    const createdAt = new Date(comment.createdAt).toLocaleString();
    return (
        <div className='comment-section'>
            {
                (comment.createdBy === currentUser.username) ? updatingComment 
                ? <div className='post-actions-div'>
                    <RiCheckboxLine 
                    onClick={() => updateCommentAction(dispatch, token, postId, body.value, comment._id, postOwner)}
                    />
                    <FaRegWindowClose onClick={() => setUpdatingComment(false)}/>
                </div>
                : <div className='post-actions-div'>
                    <FaRegEdit onClick={() => setUpdatingComment(true)}/>
                    <RiDeleteBinLine onClick={() => deleteCommentAction(dispatch, token, postId, comment._id, postOwner)}/>
                </div>
                : null
            }
            <span className='comment-author'>
                <Link to={`/user/${comment.createdBy}`}>@{comment.createdBy}</Link>
            </span>
            <span className='comment-date'>{createdAt}</span>
            {
                updatingComment
                ? <textarea { ...body } />
                : <div className='comment-body'>{body.value}</div>
            }
        </div>
    )
}

export default Comment;