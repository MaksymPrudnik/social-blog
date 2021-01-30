import { combineReducers } from "redux";

import { authReducer } from "./auth/reducer";
import { postsReducer } from "./post/reducer";
import { profileReducer } from "./profile/reducer";
import { postModalReducer } from "./post-modal/reducer";
import { commentsReducer } from "./comment/reducer";
import { settingsReducer } from "./settings/reducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  settings: settingsReducer,
  post: postsReducer,
  postModal: postModalReducer,
  comment: commentsReducer,
});
