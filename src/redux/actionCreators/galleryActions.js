import { ActionTypes } from "../actions/action-types";

const { SET_GALLERY, SET_LOADER_STATUS, SET_PHOTO, SET_USER_PHOTOS } =
  ActionTypes;

export const setGallery = (photosArray) => {
  return {
    type: SET_GALLERY,
    payload: photosArray,
  };
};

export const setLoaderStatus = (status) => {
  return {
    type: SET_LOADER_STATUS,
    payload: status,
  };
};

export const setPhoto = (photo) => {
  return {
    type: SET_PHOTO,
    payload: photo,
  };
};

export const setUserPhotos = (photosArray) => {
  return {
    type: SET_USER_PHOTOS,
    payload: photosArray,
  };
};
