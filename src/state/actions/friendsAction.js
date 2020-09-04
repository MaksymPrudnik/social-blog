import {
    host,
    ACCEPT_REQUEST_PENDING,
    ACCEPT_REQUEST_SUCCESS,
    ACCEPT_REQUEST_FAILED,
    REJECT_REQUEST_PENDING,
    REJECT_REQUEST_SUCCESS,
    REJECT_REQUEST_FAILED,
    CANCEL_REQUEST_PENDING,
    CANCEL_REQUEST_SUCCESS,
    CANCEL_REQUEST_FAILED,
    REMOVE_FRIEND_REQUEST_PENDING,
    REMOVE_FRIEND_REQUEST_SUCCESS,
    REMOVE_FRIEND_REQUEST_FAILED
} from '../constants';

export const acceptRequestAction = (dispatch, token, from) => {
    dispatch({ type: ACCEPT_REQUEST_PENDING });
    fetch(`${host}/accept-request/${from}`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        }
    })
    .then(response => {
        if (response.status === 400 || !response.ok) {
            return Promise.reject('Unable to accept request')
        }
        return response.json()
    })
    .then(result => {
        if (result.length === 2) {
            return dispatch({
                type: ACCEPT_REQUEST_SUCCESS
            })
        } else {
            return Promise.reject('Unable to accept request')
        }
    })
    .catch(err => dispatch({
        type: ACCEPT_REQUEST_FAILED,
        payload: String(err)
    }))
}

export const rejectRequestAction = (dispatch, token, from) => {
    dispatch({ type: REJECT_REQUEST_PENDING });
    fetch(`${host}/reject-request/${from}`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        }
    })
    .then(response => {
        if (response.status === 400 || !response.ok) {
            return Promise.reject('Unable to reject request')
        }
        return response.json()
    })
    .then(result => {
        if (result.length === 2) {
            return dispatch({
                type: REJECT_REQUEST_SUCCESS
            })
        } else {
            return Promise.reject('Unable to reject request')
        }
    })
    .catch(err => dispatch({
        type: REJECT_REQUEST_FAILED,
        payload: String(err)
    }))
}

export const cancelRequestAction = (dispatch, token, to) => {
    dispatch({ type: CANCEL_REQUEST_PENDING });
    fetch(`${host}/cancel-request/${to}`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        }
    })
    .then(response => {
        if (response.status === 400 || !response.ok) {
            return Promise.reject('Unable to reject request')
        }
        return response.json()
    })
    .then(result => {
        if (result.length === 2) {
            return dispatch({
                type: CANCEL_REQUEST_SUCCESS
            })
        } else {
            return Promise.reject('Unable to reject request')
        }
    })
    .catch(err => dispatch({
        type: CANCEL_REQUEST_FAILED,
        payload: String(err)
    }))
}


export const removeFriendAction = (dispatch, token, username) => {
    dispatch({ type: REMOVE_FRIEND_REQUEST_PENDING });
    fetch(`${host}/friend-remove/${username}`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        }
    })
    .then(response => {
        if (response.status === 400 || !response.ok) {
            return Promise.reject('Unable to remove friend')
        }
        return response.json()
    })
    .then(result => {
        if (result.length === 2) {
            return dispatch({
                type: REMOVE_FRIEND_REQUEST_SUCCESS
            })
        } else {
            return Promise.reject('Unable to accept request')
        }
    })
    .catch(err => dispatch({
        type: REMOVE_FRIEND_REQUEST_FAILED,
        payload: String(err)
    }))
}