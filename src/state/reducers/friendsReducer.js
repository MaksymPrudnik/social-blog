import {
    FRIEND_REQUEST_PENDING,
    FRIEND_REQUEST_SUCCESS,
    FRIEND_REQUEST_FAILED
} from '../constants';

const initialState = {
    isPending: false,
    isSuccess: false,
    error: ''
}

export const friendsReducer = (state=initialState, action={}) => {
    switch(action.type) {
        case FRIEND_REQUEST_PENDING:
            return Object.assign({}, state, { isPending: true });
        case FRIEND_REQUEST_SUCCESS:
            return Object.assign({}, state, { isPending: false, isSuccess: true });
        case FRIEND_REQUEST_FAILED:
            return Object.assign({}, state, { isPending: false, error: action.payload });
        default:
            return state;
    }
}