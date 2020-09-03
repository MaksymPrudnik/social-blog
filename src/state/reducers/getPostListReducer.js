import {
    GET_POSTS_REQUEST_PENDING,
    GET_POSTS_REQUEST_SUCCESS,
    GET_POSTS_REQUEST_FAILED,
} from '../constants';

const initialState = {
    isPending: false,
    posts: [],
    err: ''
}

export const getPostListReducer = (state=initialState, action={}) => {
    switch(action.type) {
        case GET_POSTS_REQUEST_PENDING:
            return Object.assign({}, state, { isPending: true })
        case GET_POSTS_REQUEST_SUCCESS:
            return Object.assign({}, state, { isPending: false, posts: action.payload })
        case GET_POSTS_REQUEST_FAILED:
            return Object.assign({}, state, { isPending: false, error: action.payload })
        default:
            return state;
    }
}