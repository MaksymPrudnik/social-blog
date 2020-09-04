import {
    GET_PROFILE_REQUEST_PENDING,
    GET_PROFILE_REQUEST_SUCCESS,
    GET_PROFILE_REQUEST_FAILED
} from '../constants';

const initialState = {
    isPending: false,
    profile: '',
    error: ''
}

export const getProfileReducer = (state=initialState, action={}) => {
    switch(action.type) {
        case GET_PROFILE_REQUEST_PENDING:
            return Object.assign({}, state, { isPending: true });
        case GET_PROFILE_REQUEST_SUCCESS:
            return Object.assign({}, state, {
                isPending: false, 
                profile: action.payload
            });
        case GET_PROFILE_REQUEST_FAILED:
            return Object.assign({}, state, { 
                isPending: false,  
                error: action.payload
            });
        default:
            return state;
    }
}