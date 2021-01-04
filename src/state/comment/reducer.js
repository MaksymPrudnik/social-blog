import { commentActionTypes } from "./types";

const initialState = {
  commentsByPost: {},
  isLoading: false,
  error: null,
};

export const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case commentActionTypes.LOAD_POST_COMMENTS_LIST:
      return {
        ...state,
        commentsByPost: action.payload,
      };
    case commentActionTypes.ADD_POST_COMMENTS:
      return {
        ...state,
        commentsByPost: {
          ...state.commentsByPost,
          [action.payload.id]: action.payload.comments,
        },
      };
    default:
      return state;
  }
};
