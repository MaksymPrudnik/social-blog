import {
    host,
    DELETE_COMMENT_REQUEST_PENDING,
    DELETE_COMMENT_REQUEST_SUCCESS,
    DELETE_COMMENT_REQUEST_FAILED
} from '../constants';

export const deleteCommentAction = (dispatch, token, postId, commentId, postOwner) => {
    dispatch({ type: DELETE_COMMENT_REQUEST_PENDING });
    fetch(`${host}/delete-comment/${postId}`, {
        method: 'delete',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        },
        body: JSON.stringify({
            id: commentId,
            postOwner
        })
    })
    .then(response => {
        if(response.status === 400 || !response.ok) {
            Promise.reject('Unable to delete comment');
        }
        return response.json();
    })
    .then(result => dispatch({
        type: DELETE_COMMENT_REQUEST_SUCCESS,
        payload: result
    }))
    .catch(err => dispatch({
        type: DELETE_COMMENT_REQUEST_FAILED,
        payload: err
    }))
}