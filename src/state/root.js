import { combineReducers } from "redux";

import { authReducer } from "./auth/reducer";
import { getUserReducer } from "./reducers/getUserReducer";
import { postListReducer } from "./reducers/postListReducer";
import { getProfileReducer } from "./reducers/getProfileReducer";
import { friendsReducer } from "./reducers/friendsReducer";
import { commentReducer } from "./reducers/commentReducer";
// new ones with sagas
import { postsReducer } from "./post/reducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  currentUser: getUserReducer,
  profile: getProfileReducer,
  posts: postListReducer,
  friend: friendsReducer,
  comment: commentReducer,
  post: postsReducer,
});
