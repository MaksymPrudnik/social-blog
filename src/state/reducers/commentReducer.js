import {
    ADD_COMMENT_REQUEST_PENDING,
    ADD_COMMENT_REQUEST_SUCCESS,
    ADD_COMMENT_REQUEST_FAILED
} from '../constants';

const initialState = {
    isPending: false,
    updatedPost: '',
    error: ''
}

export const commentReducer = (state=initialState, action={}) => {
    switch(action.type) {
        case ADD_COMMENT_REQUEST_PENDING:
            return Object.assign({}, state, { isPending: true });
        case ADD_COMMENT_REQUEST_SUCCESS:
            return Object.assign({}, state, { isPending: false, updatedPost: action.payload });
        case ADD_COMMENT_REQUEST_FAILED:
            return Object.assign({}, state, { isPending: false, error: action.payload });
        default:
            return state;
    }
}