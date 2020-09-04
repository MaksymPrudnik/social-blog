import {
    host,
    LOGIN_REQUEST_PENDING,
    LOGIN_REQUEST_SUCCESS,
    LOGIN_REQUEST_FAILED,
    REGISTER_REQUEST_PENDING,
    REGISTER_REQUEST_SUCCESS,
    REGISTER_REQUEST_FAILED,
    SIGNOUT_REQUEST_PENDING,
    SIGNOUT_REQUEST_SUCCESS,
    SIGNOUT_REQUEST_FAILED,
    LOGIN_WITH_TOKEN
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

export const requestSignoutAction = (dispatch, token) => {
    dispatch({ type: SIGNOUT_REQUEST_PENDING });
    fetch(`${host}/signout`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        }
    })
    .then(response => {
        if (response.status === 400 || !response.ok) {
            return Promise.reject('Unable to signout');
        }
        return response.json()})
    .then(data => {
        if(data.result) {
            return dispatch({ 
                type: SIGNOUT_REQUEST_SUCCESS
            })
        } else {
            return Promise.reject(data);
        }
        })
    .catch((err => dispatch({ 
        type: SIGNOUT_REQUEST_FAILED,
        payload: String(err)
    })))
}

export const loginWithTokenAction = token => ({
    type: LOGIN_WITH_TOKEN,
    payload: token
})