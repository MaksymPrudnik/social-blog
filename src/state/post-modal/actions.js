import { postModalActionTypes } from "./types";

export const openCreatePostModal = () => ({
  type: postModalActionTypes.OPEN_MODAL,
});

export const closeCreatePostModal = () => ({
  type: postModalActionTypes.CLOSE_MODAL,
});
