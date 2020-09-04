import {
    ACCEPT_REQUEST_PENDING,
    ACCEPT_REQUEST_SUCCESS,
    ACCEPT_REQUEST_FAILED,
    REJECT_REQUEST_PENDING,
    REJECT_REQUEST_SUCCESS,
    REJECT_REQUEST_FAILED,
    CANCEL_REQUEST_PENDING,
    CANCEL_REQUEST_SUCCESS,
    CANCEL_REQUEST_FAILED,
    REMOVE_FRIEND_REQUEST_PENDING,
    REMOVE_FRIEND_REQUEST_SUCCESS,
    REMOVE_FRIEND_REQUEST_FAILED
} from '../constants';

const initialState = {
    isPending: false,
    isSuccess: false,
    error: ''
}

export const friendsReducer = (state=initialState, action={}) => {
    switch(action.type) {
        case ACCEPT_REQUEST_PENDING || REJECT_REQUEST_PENDING || REMOVE_FRIEND_REQUEST_PENDING || CANCEL_REQUEST_PENDING:
            return Object.assign({}, state, { isPending: true });
        case ACCEPT_REQUEST_SUCCESS || REJECT_REQUEST_SUCCESS || REMOVE_FRIEND_REQUEST_SUCCESS || CANCEL_REQUEST_SUCCESS:
            return Object.assign({}, state, { isPending: false, isSuccess: true });
        case ACCEPT_REQUEST_FAILED || REJECT_REQUEST_FAILED || REMOVE_FRIEND_REQUEST_FAILED || CANCEL_REQUEST_FAILED:
            return Object.assign({}, state, { isPending: false, error: action.payload });
        default:
            return state;
    }
}