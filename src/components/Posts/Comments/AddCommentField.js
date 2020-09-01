import React from 'react';
import { RiSendPlaneLine } from 'react-icons/ri';

import './AddCommentField.css';

const AddCommentField = () => {
    return (
        <div className='add-comment-section'>
            <span>@maksymprudnik</span>
            <textarea 
                className='add-comment-input' 
                placeholder='Enter your comment' 
                name='new-comment'
            />
            <button className='add-comment-button'><RiSendPlaneLine/></button>
        </div>
    )
}

export default AddCommentField;