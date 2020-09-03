import {
    CHANGE_HEADER,
    CHANGE_BODY
} from '../constants';

const initialState = {
    header: '',
    body: ''
}

export const changeInputReducer = (state=initialState, action={}) => {
    switch(action.type) {
        case CHANGE_HEADER:
            return Object.assign({}, state, { header: action.payload });
        case CHANGE_BODY:
            return Object.assign({}, state, { body: action.payload });
        default:
            return state;
    }
}