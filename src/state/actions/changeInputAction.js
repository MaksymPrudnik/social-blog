import {
    CHANGE_HEADER,
    CHANGE_BODY
} from '../constants';

export const changeHeaderAction = (text) => ({
    type: CHANGE_HEADER,
    payload: text
});

export const changeBodyAction = (text) => ({
    type: CHANGE_BODY,
    payload: text
});