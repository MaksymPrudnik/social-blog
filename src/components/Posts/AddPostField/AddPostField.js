import React from 'react';
import './AddPostField.css';

import { RiSendPlaneLine } from 'react-icons/ri';
import Loader from '../../helpers/Loader/Loader';

import { useDispatch, useSelector } from 'react-redux';
import { changeHeaderAction, changeBodyAction } from '../../../state/actions/changeInputAction';
import { addNewPostAction } from '../../../state/actions/addNewPostAction';

const AddPostField = () => {
    const dispatch = useDispatch();
    const { header, body } = useSelector(state => state.post_comment_input);
    const token = window.localStorage.getItem('token');
    const { isPending } = useSelector(state => state.posts)
    return (
        <section className='add-post-section'>
            {
                isPending
                ? <Loader size='4rem' /> 
                : <div className='add-post-inputs'>
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
            }
            <div className='add-post-button'>
                {
                    isPending ? <Loader size='2.5rem' /> 
                    : <button onClick={() => {
                            dispatch(changeHeaderAction(''))
                            dispatch(changeBodyAction(''))
                            addNewPostAction(dispatch, token, header, body)
                        }}>
                    <RiSendPlaneLine/></button>
                }
            </div>
        </section>
    )
}

export default AddPostField;