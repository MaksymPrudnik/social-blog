import { combineReducers } from 'redux';

import { authReducer } from './authReducer';
import { getUserReducer } from './getUserReducer';
import { postListReducer } from './postListReducer';
import { getProfileReducer } from './getProfileReducer';
import { friendsReducer } from './friendsReducer';
import { commentReducer } from './commentReducer';

export const rootReducer = combineReducers({
    auth: authReducer,
    currentUser: getUserReducer,
    profile: getProfileReducer,
    posts: postListReducer,
    friend: friendsReducer,
    comment: commentReducer
})