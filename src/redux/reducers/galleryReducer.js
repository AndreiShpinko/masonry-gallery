import { ActionTypes } from "../actions/action-types";

const initialState = { photos: null, photo: null, userPhotos: null };

export const galleryReducer = (state = initialState, { type, payload }) => {
  switch (type) {
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
