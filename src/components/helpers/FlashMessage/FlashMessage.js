import React from 'react';

import './FlashMessage.css';

const FlashMessage = ({message, color}) => {
  return (
  <div className='flash-message' style={{backgroundColor: color}}>{message}</div>
  )
}

export default FlashMessage;