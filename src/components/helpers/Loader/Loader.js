import React from 'react';
import './Loader.css'

const Loader = ({ size }) => {
    return <div className='loader' style={{height: size, width: size}}></div>
}

export default Loader;