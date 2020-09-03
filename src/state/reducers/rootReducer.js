import { combineReducers } from 'redux';

import { authLoginReducer, authRegisterReducer } from './authReducer';
import { changeCredentialsReducer } from './credentialsReducer';
import { getUserReducer } from './getUserReducer';
import { getPostListReducer } from './getPostListReducer';

export const rootReducer = combineReducers({
    authLogin: authLoginReducer,
    authRegister: authRegisterReducer,
    credentials: changeCredentialsReducer,
    currentUser: getUserReducer,
    posts: getPostListReducer
})