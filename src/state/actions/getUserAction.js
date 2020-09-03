import {
    GET_USER_REQUEST_PENDING,
    GET_USER_REQUEST_SUCCESS,
    GET_USER_REQUEST_FAILED
} from '../constants';

export const getUserAction = (dispatch, username) => {
    dispatch({ type: GET_USER_REQUEST_PENDING});
    fetch(`http://localhost:3000/user/${username}`)
    .then(response => {
        if (response.status === 400 || !response.ok) {
            return Promise.reject('Unable to register');
        }
        return response.json()})
    .then(user => dispatch({
        type: GET_USER_REQUEST_SUCCESS,
        payload: user
    }))
    .catch(err => dispatch({
        type: GET_USER_REQUEST_FAILED,
        payload: String(err)
    }))
}