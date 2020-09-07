import {
    host,
    UPDATE_POST_REQUEST_PENDING,
    UPDATE_POST_REQUEST_SUCCESS,
    UPDATE_POST_REQUEST_FAILED
} from '../constants';

export const updatePostAction = (dispatch, token, postId, header, body) => {
    dispatch({ type: UPDATE_POST_REQUEST_PENDING});
    fetch(`${host}/modify-post`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        },
        body: JSON.stringify({
            id: postId,
            header, body
        })
    })
    .then(response => {
        if(response.status === 400 || !response.ok) {
            return Promise.reject('Unable to update post')
        }
        return response.json();
    })
    .then(result => dispatch({
        type: UPDATE_POST_REQUEST_SUCCESS,
        payload: result
    }))
    .catch(err => dispatch({
        type: UPDATE_POST_REQUEST_FAILED,
        payload: err
    }))
}