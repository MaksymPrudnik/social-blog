import {
    LOGIN_REQUEST_PENDING,
    LOGIN_REQUEST_SUCCESS,
    LOGIN_REQUEST_FAILED,
    REGISTER_REQUEST_PENDING,
    REGISTER_REQUEST_SUCCESS,
    REGISTER_REQUEST_FAILED
} from '../constants';

const authInitialState = {
    isPending: false,
    jwt: '',
    error: ''    
}

export const authReducer = (state=authInitialState, action={}) => {
    switch(action.type) {
        case LOGIN_REQUEST_PENDING:
            return Object.assign({}, state, { isPending: true });
        case LOGIN_REQUEST_SUCCESS:
            return Object.assign({}, state, {
                jwt: action.payload.token,
                isPending: false,
            });
        case LOGIN_REQUEST_FAILED:
            return Object.assign({}, state, {
                error: action.payload,
                isPending: false,
            });
        case REGISTER_REQUEST_PENDING:
            return Object.assign({}, state, { isPending: true });
        case REGISTER_REQUEST_SUCCESS:
            return Object.assign({}, state, {
                jwt: action.payload.token,
                isPending: false
            });
        case REGISTER_REQUEST_FAILED:
            return Object.assign({}, state, {
                error: action.payload,
                isPending: false
            });
        default:
            return state;
    }
}
