import React from 'react';
import './AddCommentField.css';

import { useDispatch, useSelector } from 'react-redux';
import { addCommentAction } from '../../../state/actions/addCommentAction';
import { useFormInput } from '../../../hooks/hooks';
import Loader from '../../helpers/Loader/Loader';
import { RiSendPlaneLine } from 'react-icons/ri';

const AddCommentField = ({ postOwner, postId }) => {
    const dispatch = useDispatch();
    const { isPending } = useSelector(state => state.comment);
    const { username } = useSelector(state => state.currentUser.currentUser)
    const body = useFormInput('');
    const token = window.localStorage.getItem('token');
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
                        { ...body }
                    />
                    <button 
                        className='add-comment-button'
                        onClick={() => {
                            body.handleClear()
                            addCommentAction(dispatch, token, postOwner, postId, body.value)
                        }}
                    ><RiSendPlaneLine/></button>
                </div>
            }
        </div>
    )
}

export default AddCommentField;