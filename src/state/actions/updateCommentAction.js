import {
    host,
    UPDATE_COMMENT_REQUEST_PENDING,
    UPDATE_COMMENT_REQUEST_SUCCESS,
    UPDATE_COMMENT_REQUEST_FAILED
} from '../constants';

export const updateCommentAction = (dispatch, token, postId, body, commentId, postOwner) => {
    dispatch({ type: UPDATE_COMMENT_REQUEST_PENDING });
    fetch(`${host}/edit-comment/${postId}`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        },
        body: JSON.stringify({
            id: commentId,
            postOwner, body
        })
    })
    .then(response => {
        if(response.status === 400 || !response.ok) {
            return Promise.reject('Unable to update comment')
        }
        return response.json()
    })
    .then(result => dispatch({
        type: UPDATE_COMMENT_REQUEST_SUCCESS,
        payload: result
    }))
    .catch(err => dispatch({
        type: UPDATE_COMMENT_REQUEST_FAILED,
        payload: err
    }))
}