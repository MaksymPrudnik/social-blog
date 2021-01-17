import { combineReducers } from "redux";

import { authReducer } from "./auth/reducer";
import { postsReducer } from "./post/reducer";
import { profileReducer } from "./profile/reducer";
import { postModalReducer } from "./post-modal/reducer";
import { commentsReducer } from "./comment/reducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  post: postsReducer,
  postModal: postModalReducer,
  comment: commentsReducer,
});
