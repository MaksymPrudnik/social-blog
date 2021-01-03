import { postModalActionTypes } from "./types";

const initialState = {
  isOpen: false,
};

export const postModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case postModalActionTypes.OPEN_MODAL:
      return {
        ...state,
        isOpen: true,
      };
    case postModalActionTypes.CLOSE_MODAL:
      return {
        ...state,
        isOpen: false,
      };
    default:
      return state;
  }
};
