import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { requestSignoutAction } from '../../../state/actions/authActions';

const Logout = () => {

    const dispatch = useDispatch();
    const token = localStorage.getItem('token');

    useEffect(() => {
        requestSignoutAction(dispatch, token)

        return localStorage.removeItem('token');
    })
    
    return <Redirect to='/'/>
}

export default Logout;