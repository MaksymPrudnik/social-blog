import {
    GET_USER_REQUEST_PENDING,
    GET_USER_REQUEST_SUCCESS,
    GET_USER_REQUEST_FAILED,
    SIGNOUT_REQUEST_SUCCESS
} from '../constants';

const initialState = {
    isPending: false,
    currentUser: '',
    error: ''
}

export const getUserReducer = (state=initialState, action={}) => {
    switch(action.type) {
        case GET_USER_REQUEST_PENDING:
            return Object.assign({}, state, { isPending: true });
        case GET_USER_REQUEST_SUCCESS:
            return Object.assign({}, state, {
                isPending: false, 
                currentUser: action.payload
            });
        case GET_USER_REQUEST_FAILED:
            return Object.assign({}, state, { 
                isPending: false,  
                error: action.payload
            });
        case SIGNOUT_REQUEST_SUCCESS:
            return Object.assign({}, state, {
                isPending: false,
                currentUser: '',
                error: ''
            })
        default:
            return state;
    }
}