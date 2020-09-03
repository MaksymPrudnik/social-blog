import {
    LOGIN_REQUEST_PENDING,
    LOGIN_REQUEST_SUCCESS,
    LOGIN_REQUEST_FAILED,
    REGISTER_REQUEST_PENDING,
    REGISTER_REQUEST_SUCCESS,
    REGISTER_REQUEST_FAILED,
    host
} from '../constants';

export const requestLoginAction = (dispatch, email, password) => {
    dispatch({ type: LOGIN_REQUEST_PENDING });
    fetch(`${host}/signin`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password
        })
    })
    .then(response => {
        if (response.status === 400 || !response.ok) {
            return Promise.reject('Unable to register');
        }
        return response.json()})
    .then(data => dispatch({ 
        type: LOGIN_REQUEST_SUCCESS,
        payload: data
    }))
    .catch((err => dispatch({ 
        type: LOGIN_REQUEST_FAILED,
        payload: String(err)
    })))
}

export const requestRegisterAction = (dispatch, username, email, password) => {
    dispatch({ type: REGISTER_REQUEST_PENDING });
    fetch(`${host}/register`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username,
            email,
            password
        })
    })
    .then(response => {
        if (response.status === 400 || !response.ok) {
            return Promise.reject('Unable to register');
        }
        return response.json()})
    .then(data => dispatch({ 
        type: REGISTER_REQUEST_SUCCESS,
        payload: data
    }))
    .catch((err => dispatch({ 
        type: REGISTER_REQUEST_FAILED,
        payload: String(err)
    })))
}