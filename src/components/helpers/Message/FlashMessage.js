import React from 'react';

import './FlashMessage.css';

const FlashMessage = ({message}) => {
  return (
  <div className='flash-message'>{message}</div>
  )
}

export default FlashMessage;