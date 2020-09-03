import {
    ADD_POST_REQUEST_PENDING,
    ADD_POST_REQUEST_SUCCESS,
    ADD_POST_REQUEST_FAILED,
    host
} from '../constants';

export const addNewPostAction = (dispatch, token, header, body) => {
    dispatch({ type: ADD_POST_REQUEST_PENDING });
    fetch(`${host}/create-post`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        },
        body: JSON.stringify({
            header, body
        })
    })
    .then(response => {
        if (!response.ok || response.status === 400) {
            return Promise.reject('Unable to get post');
        }
        return response.json()
    })
    .then(post => dispatch({
        type: ADD_POST_REQUEST_SUCCESS,
        payload: post
    }))
    .catch(err => dispatch({
        type: ADD_POST_REQUEST_FAILED,
        payload: err
    }))
}