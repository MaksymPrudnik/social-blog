import { combineReducers } from 'redux';

import { authReducer } from './authReducer';
import { changeCredentialsReducer } from './credentialsReducer';
import { getUserReducer } from './getUserReducer';
import { postListReducer } from './postListReducer';
import { changeInputReducer } from './changeInputReducer';

export const rootReducer = combineReducers({
    auth: authReducer,
    credentials: changeCredentialsReducer,
    currentUser: getUserReducer,
    posts: postListReducer,
    post_comment_input: changeInputReducer,
})