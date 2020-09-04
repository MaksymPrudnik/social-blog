import {
    LOGIN_REQUEST_PENDING,
    LOGIN_REQUEST_SUCCESS,
    LOGIN_REQUEST_FAILED,
    REGISTER_REQUEST_PENDING,
    REGISTER_REQUEST_SUCCESS,
    REGISTER_REQUEST_FAILED,
    SIGNOUT_REQUEST_PENDING,
    SIGNOUT_REQUEST_SUCCESS,
    SIGNOUT_REQUEST_FAILED,
    LOGIN_WITH_TOKEN
} from '../constants';

const authInitialState = {
    isPending: false,
    isLoggedIn: false,
    usedLogout: false,
    jwt: '',
    error: ''
}

export const authReducer = (state=authInitialState, action={}) => {
    switch(action.type) {
        // login
        case LOGIN_REQUEST_PENDING:
            return Object.assign({}, state, { isPending: true });
        case LOGIN_REQUEST_SUCCESS:
            return Object.assign({}, state, {
                jwt: action.payload.token,
                isPending: false,
                isLoggedIn: true,
                usedLogout: false
            });
        case LOGIN_REQUEST_FAILED:
            return Object.assign({}, state, {
                error: action.payload,
                isPending: false,
                isLoggedIn: false,
                usedLogout: false
            });
        // login with token
        case LOGIN_WITH_TOKEN:
            return Object.assign({}, state, {
                isPending: false,
                isLoggedIn: true,
                usedLogout: false,
                jwt: action.payload
            })
        // register
        case REGISTER_REQUEST_PENDING:
            return Object.assign({}, state, { isPending: true });
        case REGISTER_REQUEST_SUCCESS:
            return Object.assign({}, state, {
                jwt: action.payload.token,
                isPending: false,
                isLoggedIn: true,
                usedLogout: false
            });
        case REGISTER_REQUEST_FAILED:
            return Object.assign({}, state, {
                error: action.payload,
                isPending: false,
                isLoggedIn: false,
                usedLogout: false
            });
        // signout
        case SIGNOUT_REQUEST_PENDING:
            return Object.assign({}, state, { isPending: true });
        case SIGNOUT_REQUEST_SUCCESS:
            return Object.assign({}, state, {
                isPending: false,
                isLoggedIn: false,
                usedLogout: true,
                jwt: '',
                error: ''
            })
        case SIGNOUT_REQUEST_FAILED:
            return Object.assign({}, state, {
                isPending: false,
                error: action.payload
            })
        default:
            return state;
    }
}
