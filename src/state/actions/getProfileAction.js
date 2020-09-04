import {
    GET_PROFILE_REQUEST_PENDING,
    GET_PROFILE_REQUEST_SUCCESS,
    GET_PROFILE_REQUEST_FAILED,
    host
} from '../constants';

export const getProfileAction = (dispatch, username) => {
    dispatch({ type: GET_PROFILE_REQUEST_PENDING});
    fetch(`${host}/user/${username}`)
    .then(response => {
        console.log(response);
        if (response.status === 400 || !response.ok) {
            return Promise.reject('Unable to get profile');
        }
        return response.json()})
    .then(profile => dispatch({
        type: GET_PROFILE_REQUEST_SUCCESS,
        payload: profile
    }))
    .catch(err => dispatch({
        type: GET_PROFILE_REQUEST_FAILED,
        payload: String(err)
    }))
}