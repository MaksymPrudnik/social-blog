import React from 'react';
import { RiSendPlaneLine } from 'react-icons/ri';

import './AddPostField.css';

const AddPostField = () => {
    return (
        <section className='add-post-section'>
            <div className='add-post-author'>
                <span>@maksymprudnik</span>
            </div>
            <div className='add-post-inputs'>
                <input 
                    className='add-post-header' 
                    type="text" 
                    placeholder='Post header' 
                    name='post-header'
                />
                <textarea 
                    className='add-post-body'  
                    placeholder='...' 
                    name='new-post'
                />
            </div>
            <div className='add-post-button'>
                <button><RiSendPlaneLine/></button>
            </div>
        </section>
    )
}

export default AddPostField;