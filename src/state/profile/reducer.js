import { profileActionTypes } from "./types";
import { postActionTypes } from "../post/types";

const initialState = {
  profile: null,
  isProfileLoading: false,
  isPostsLoading: false,
  isFriendsLoading: false,
  posts: null,
  friends: null,
  postComments: null,
  error: null,
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case profileActionTypes.GET_PROFILE_START:
      return {
        ...state,
        isProfileLoading: true,
      };
    case profileActionTypes.GET_PROFILE_SUCCESS:
      return {
        ...state,
        isProfileLoading: false,
        error: null,
        profile: action.payload,
      };
    case profileActionTypes.GET_PROFILE_POSTS_START:
      return {
        ...state,
        isPostsLoading: true,
      };
    case profileActionTypes.GET_PROFILE_POSTS_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isPostsLoading: false,
      };
    case postActionTypes.ADD_POST_TO_LIST:
      if (
        Array.isArray(state.posts) &&
        action.payload.author === state.profile.id
      ) {
        return {
          ...state,
          posts: [action.payload, ...state.posts],
        };
      }
      return {
        ...state,
      };
    case postActionTypes.LIKE_POST_SUCCESS:
      if (
        Array.isArray(state.posts) &&
        action.payload.post.author.id === state.profile.id
      ) {
        const { post } = action.payload;
        return {
          ...state,
          posts: state.posts.map((item) => (item.id === post.id ? post : item)),
        };
      }
      return {
        ...state,
      };
    case profileActionTypes.GET_FRIEND_LIST_START:
      return {
        ...state,
        isFriendsLoading: true,
      };
    case profileActionTypes.GET_FRIEND_LIST_SUCCESS:
      return {
        ...state,
        isFriendsLoading: false,
        friends: action.payload.rows,
        profile: {
          ...state.profile,
          friends: action.payload.ids,
        },
      };
    case profileActionTypes.CLEAR_PROFILE_DATA:
      return {
        ...state,
        ...initialState,
      };
    case profileActionTypes.PROFILE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
