import { CHANGE_USERNAME, CHANGE_EMAIL, CHANGE_PASSWORD } from '../constants';

export const setUsernameAction = (username) => ({
    type: CHANGE_USERNAME,
    payload: username
})
export const setEmailAction = (email) => ({
    type: CHANGE_EMAIL,
    payload: email
})
export const setPasswordAction = (password) => ({
    type: CHANGE_PASSWORD,
    payload: password
})