import { combineReducers } from "redux";

import { getUserReducer } from "./reducers/getUserReducer";
import { postListReducer } from "./reducers/postListReducer";
import { friendsReducer } from "./reducers/friendsReducer";
import { commentReducer } from "./reducers/commentReducer";
// new ones with sagas
import { authReducer } from "./auth/reducer";
import { postsReducer } from "./post/reducer";
import { profileReducer } from "./profile/reducer";

export const rootReducer = combineReducers({
  currentUser: getUserReducer,
  posts: postListReducer,
  friend: friendsReducer,
  comment: commentReducer,
  // new ones with sagas
  auth: authReducer,
  profile: profileReducer,
  post: postsReducer,
});
