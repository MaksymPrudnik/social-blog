import {
    ADD_POST_REQUEST_PENDING,
    ADD_POST_REQUEST_SUCCESS,
    ADD_POST_REQUEST_FAILED
} from '../constants';

const initialState = {
    isPending: false,
    newPost: '',
    error: ''
}

export const addNewPostReducer = (state=initialState, action={}) => {
    switch(action.type) {
        case ADD_POST_REQUEST_PENDING:
            return Object.assign({}, state, { isPending: true });
        case ADD_POST_REQUEST_SUCCESS:
            return Object.assign({}, state, { isPending: false, newPost: action.payload });
        case ADD_POST_REQUEST_FAILED:
            return Object.assign({}, state, { isPending: false, error: action.payload });
        default:
            return state;
    }
}