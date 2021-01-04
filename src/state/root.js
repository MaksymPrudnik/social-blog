import { combineReducers } from "redux";

import { getUserReducer } from "./reducers/getUserReducer";
import { postListReducer } from "./reducers/postListReducer";
import { friendsReducer } from "./reducers/friendsReducer";
// new ones
import { authReducer } from "./auth/reducer";
import { postsReducer } from "./post/reducer";
import { profileReducer } from "./profile/reducer";
import { postModalReducer } from "./post-modal/reducer";
import { commentsReducer } from "./comment/reducer";

export const rootReducer = combineReducers({
  currentUser: getUserReducer,
  posts: postListReducer,
  friend: friendsReducer,
  // new ones
  auth: authReducer,
  profile: profileReducer,
  post: postsReducer,
  postModal: postModalReducer,
  comment: commentsReducer,
});
