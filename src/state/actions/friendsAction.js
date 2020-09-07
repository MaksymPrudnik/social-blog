import {
    host,
    FRIEND_REQUEST_PENDING,
    FRIEND_REQUEST_SUCCESS,
    FRIEND_REQUEST_FAILED
} from '../constants';


export const sendFriendRequestAction = (dispatch, token, to) => {
    dispatch({ type: FRIEND_REQUEST_PENDING });
    fetch(`${host}/friend-request/${to}`, {
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
                type: FRIEND_REQUEST_SUCCESS
            })
        } else {
            return Promise.reject('Unable to accept request')
        }
    })
    .catch(err => dispatch({
        type: FRIEND_REQUEST_FAILED,
        payload: String(err)
    }))
}


export const acceptRequestAction = (dispatch, token, from) => {
    dispatch({ type: FRIEND_REQUEST_PENDING });
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
                type: FRIEND_REQUEST_SUCCESS
            })
        } else {
            return Promise.reject('Unable to accept request')
        }
    })
    .catch(err => dispatch({
        type: FRIEND_REQUEST_FAILED,
        payload: String(err)
    }))
}

export const rejectRequestAction = (dispatch, token, from) => {
    dispatch({ type: FRIEND_REQUEST_PENDING });
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
                type: FRIEND_REQUEST_SUCCESS
            })
        } else {
            return Promise.reject('Unable to reject request')
        }
    })
    .catch(err => dispatch({
        type: FRIEND_REQUEST_FAILED,
        payload: String(err)
    }))
}

export const cancelRequestAction = (dispatch, token, to) => {
    dispatch({ type: FRIEND_REQUEST_PENDING });
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
                type: FRIEND_REQUEST_SUCCESS
            })
        } else {
            return Promise.reject('Unable to reject request')
        }
    })
    .catch(err => dispatch({
        type: FRIEND_REQUEST_FAILED,
        payload: String(err)
    }))
}


export const removeFriendAction = (dispatch, token, username) => {
    dispatch({ type: FRIEND_REQUEST_PENDING });
    fetch(`${host}/friend-remove/${username}`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        }
    })
    .then(response => {
        if (response.status === 400 || !response.ok) {
            return Promise.reject('Unable to friend')
        }
        return response.json()
    })
    .then(result => {
        if (result.length === 2) {
            return dispatch({
                type: FRIEND_REQUEST_SUCCESS
            })
        } else {
            return Promise.reject('Unable to accept request')
        }
    })
    .catch(err => dispatch({
        type: FRIEND_REQUEST_FAILED,
        payload: String(err)
    }))
}