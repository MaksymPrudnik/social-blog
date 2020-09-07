import {
    host,
    DELETE_POST_REQUEST_PENDING,
    DELETE_POST_REQUEST_SUCCESS,
    DELETE_POST_REQUEST_FAILED
} from '../constants';

export const deletePostAction = (dispatch, token, id) => {
    dispatch({ type: DELETE_POST_REQUEST_PENDING });
    fetch(`${host}/delete-post/${id}`, {
        method: 'delete',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        }
    })
    .then(response => {
        if (response.status === 400 || !response.ok) {
            return Promise.reject('Unable to delete post')
        }
        return response.json()
    })
    .then(result => {
        if (result.result && result.count) {
            return dispatch({
                type: DELETE_POST_REQUEST_SUCCESS,
                payload: id
            })
        }
    })
    .catch(err => dispatch({
        type: DELETE_POST_REQUEST_FAILED,
        payload: err
    }))
}