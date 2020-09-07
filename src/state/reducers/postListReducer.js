import {
    GET_POSTS_REQUEST_PENDING,
    GET_POSTS_REQUEST_SUCCESS,
    GET_POSTS_REQUEST_FAILED,
    ADD_POST_REQUEST_PENDING,
    ADD_POST_REQUEST_SUCCESS,
    ADD_POST_REQUEST_FAILED,
    UPDATE_POST_REQUEST_PENDING,
    UPDATE_POST_REQUEST_SUCCESS,
    UPDATE_POST_REQUEST_FAILED,
    DELETE_POST_REQUEST_PENDING,
    DELETE_POST_REQUEST_SUCCESS,
    DELETE_POST_REQUEST_FAILED
} from '../constants';

const initialState = {
    isPending: false,
    posts: [],
    error: ''
}

export const postListReducer = (state=initialState, action={}) => {
    switch(action.type) {
        //get list from server
        case GET_POSTS_REQUEST_PENDING:
            return Object.assign({}, state, { isPending: true })
        case GET_POSTS_REQUEST_SUCCESS:
            return Object.assign({}, state, { isPending: false, posts: action.payload })
        case GET_POSTS_REQUEST_FAILED:
            return Object.assign({}, state, { isPending: false, error: action.payload })
        // adding post
        case ADD_POST_REQUEST_PENDING:
            return Object.assign({}, state, { isPending: true });
        case ADD_POST_REQUEST_SUCCESS:
            return Object.assign({}, state, { isPending: false, posts: state.posts.concat(action.payload) });
        case ADD_POST_REQUEST_FAILED:
            return Object.assign({}, state, { isPending: false, error: action.payload });
        //update post
        case UPDATE_POST_REQUEST_PENDING:
            return Object.assign({}, state, { isPending: true })
        case UPDATE_POST_REQUEST_SUCCESS:
            return Object.assign({}, state, { 
                isPending: false, 
                posts: state.posts.map((post, i) => {
                    if (post._id === action.payload._id) {
                        return action.payload;
                    }
                    return post;
                })})
        case UPDATE_POST_REQUEST_FAILED:
            return Object.assign({}, state, { isPending: false, error: action.payload })
        case DELETE_POST_REQUEST_PENDING:
            return Object.assign({}, state, { isPending: true })
        case DELETE_POST_REQUEST_SUCCESS:
            return Object.assign({}, state, { 
                isPending: false, 
                posts: state.posts.filter(post => post._id !== action.payload)
            })
        case DELETE_POST_REQUEST_FAILED:
            return Object.assign({}, state, { isPending: false, error: action.payload })
        default:
            return state;
    }
}