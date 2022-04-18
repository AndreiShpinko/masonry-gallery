import { ActionTypes } from "../actions/action-types";

const initialState = { loader: true, photos: [], photo: "", userPhotos: "" };

export const galleryReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_LOADER_STATUS:
      return { ...state, loader: payload };

    case ActionTypes.SET_GALLERY:
      return { ...state, photos: payload };

    case ActionTypes.SET_PHOTO:
      return { ...state, photo: payload };

    case ActionTypes.SET_USER_PHOTOS:
      return { ...state, userPhotos: payload };

    default:
      return state;
  }
};
