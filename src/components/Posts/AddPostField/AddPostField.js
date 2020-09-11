import React from 'react';
import './AddPostField.css';

import { RiSendPlaneLine } from 'react-icons/ri';
import Loader from '../../helpers/Loader/Loader';

import { useDispatch, useSelector } from 'react-redux';
import { addNewPostAction } from '../../../state/actions/addNewPostAction';
import { useFormInput } from '../../../hooks/hooks';

const AddPostField = () => {
    const dispatch = useDispatch();
    const header = useFormInput('');
    const body = useFormInput('');
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
                        { ...header }
                    />
                    <textarea 
                        className='add-post-body'  
                        placeholder='...' 
                        name='new-post'
                        { ...body }
                    />
                </div>
            }
            <div className='add-post-button'>
                {
                    !isPending &&
                    <button onClick={() => {
                            header.handleClear();
                            body.handleClear();
                            addNewPostAction(dispatch, token, header.value, body.value)
                        }}>
                    <RiSendPlaneLine/></button>
                }
            </div>
        </section>
    )
}

export default AddPostField;