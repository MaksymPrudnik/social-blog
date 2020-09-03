import { CHANGE_USERNAME, CHANGE_EMAIL, CHANGE_PASSWORD } from '../constants';

const initialState = {
    username: '',
    email: '',
    password: ''
}

export const changeCredentialsReducer = (state=initialState, action={}) => {
    switch(action.type) {
        case CHANGE_USERNAME:
            return Object.assign({}, state, {username: action.payload});
        case CHANGE_EMAIL:
            return Object.assign({}, state, {email: action.payload});
        case CHANGE_PASSWORD:
            return Object.assign({}, state, {password: action.payload});
        default:
            return state;
    }
}