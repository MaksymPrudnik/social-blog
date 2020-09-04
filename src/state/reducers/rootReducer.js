import { combineReducers } from 'redux';

import { authReducer } from './authReducer';
import { changeCredentialsReducer } from './credentialsReducer';
import { getUserReducer } from './getUserReducer';
import { postListReducer } from './postListReducer';
import { changeInputReducer } from './changeInputReducer';
import { getProfileReducer } from './getProfileReducer';

export const rootReducer = combineReducers({
    auth: authReducer,
    credentials: changeCredentialsReducer,
    currentUser: getUserReducer,
    user: getProfileReducer,
    posts: postListReducer,
    post_comment_input: changeInputReducer,
})