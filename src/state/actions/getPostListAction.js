import {
    GET_POSTS_REQUEST_PENDING,
    GET_POSTS_REQUEST_SUCCESS,
    GET_POSTS_REQUEST_FAILED,
} from '../constants';

export const getPostListAction = (dispatch, from) => {
    dispatch({ type: GET_POSTS_REQUEST_PENDING });
    fetch(`http://locahost:3000/posts/${from}`)
    .then(response => {
        if (response.status === 400 || !response.ok) {
            return Promise.reject('Unable to get posts');
        }
        return response.json()
    })
    .then(posts => dispatch({
        type: GET_POSTS_REQUEST_SUCCESS,
        payload: posts
    }))
    .catch(err => dispatch({
        type: GET_POSTS_REQUEST_FAILED,
        payload: String(err)
    }))
}