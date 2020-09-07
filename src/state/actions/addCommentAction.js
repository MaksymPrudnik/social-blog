import {
    host,
    ADD_COMMENT_REQUEST_PENDING,
    ADD_COMMENT_REQUEST_SUCCESS,
    ADD_COMMENT_REQUEST_FAILED
} from '../constants';

export const addCommentAction = (dispatch, token, postOwner, postId, body) => {
    dispatch({ type: ADD_COMMENT_REQUEST_PENDING });
    fetch(`${host}/add-comment/${postId}`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        },
        body: JSON.stringify({
            body,
            postOwner
        })
    })
    .then(response => {
        if (response.status === 400 || !response.ok) {
            Promise.reject('Unable to add comment')
        }
        return response.json()
    })
    .then(result => dispatch({
        type: ADD_COMMENT_REQUEST_SUCCESS,
        payload: result
    }))
    .catch(err => dispatch({
        type: ADD_COMMENT_REQUEST_FAILED,
        payload: err
    }))
}