import React from 'react';
import jwt from 'jsonwebtoken';
import { RiSendPlaneLine } from 'react-icons/ri';

import './AddCommentField.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeBodyAction } from '../../../state/actions/changeInputAction';
import { addCommentAction } from '../../../state/actions/addCommentAction';
import Loader from '../../helpers/Loader/Loader';

const AddCommentField = ({ postOwner, postId }) => {
    const dispatch = useDispatch();
    const { body } = useSelector(state => state.post_comment_input);
    const { isPending } = useSelector(state => state.comment);
    const token = window.localStorage.getItem('token');
    const username = jwt.verify(token, process.env.REACT_APP_JWT_SECRET || 'jwt_secret_string').username;
    return (
        <div>
            {
                isPending ? <Loader size='3rem'/>
                : <div className='add-comment-section' style={{width: '100%'}}>
                    <span>@{username}</span>
                    <textarea 
                        className='add-comment-input' 
                        placeholder='Enter your comment' 
                        name='new-comment'
                        onChange={(event) => dispatch(changeBodyAction(event.target.value))}
                    />
                    <button 
                        className='add-comment-button'
                        onClick={() => addCommentAction(dispatch, token, postOwner, postId, body)}
                    ><RiSendPlaneLine/></button>
                </div>
            }
        </div>
    )
}

export default AddCommentField;