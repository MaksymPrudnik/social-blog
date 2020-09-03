import React from 'react';
import { RiSendPlaneLine } from 'react-icons/ri';

import './AddPostField.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeHeaderAction, changeBodyAction } from '../../../state/actions/changeInputAction';
import { addNewPostAction } from '../../../state/actions/addNewPostAction';
import Loader from '../../helpers/Loader/Loader';

const AddPostField = () => {
    const dispatch = useDispatch();
    const { isPending } = useSelector(state => state.posts);
    const { header, body } = useSelector(state => state.post_comment_input);
    const token = window.localStorage.getItem('token');
    const { username } = useSelector(state => state.currentUser.currentUser)
    return (
        <section className='add-post-section'>
            <div className='add-post-author'>
                <span>@{username}</span>
            </div>
            <div className='add-post-inputs'>
                <input 
                    className='add-post-header' 
                    type="text" 
                    placeholder='Post header' 
                    name='post-header'
                    onChange={(event) => dispatch(changeHeaderAction(event.target.value))}
                />
                <textarea 
                    className='add-post-body'  
                    placeholder='...' 
                    name='new-post'
                    onChange={(event) => dispatch(changeBodyAction(event.target.value))}
                />
            </div>
            <div className='add-post-button'>
                <button onClick={() => addNewPostAction(dispatch, token, header, body)}>
                    <RiSendPlaneLine/>
                </button>
            </div>
            { isPending && <Loader size='3rem' />}
        </section>
    )
}

export default AddPostField;