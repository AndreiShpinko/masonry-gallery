import { ActionTypes } from "../actions/action-types";

const {
  SET_HOMEPAGE_GALLERY,
  SET_HOMEPAGE_GALLERY_HAS_ERROR,
  SET_HOMEPAGE_SEARCH_VALUE,

  SET_PHOTOPAGE_IMAGE,
  SET_PHOTOPAGE_IMAGES,
} = ActionTypes;

// HomePage

export const setHomePageGallery = (galleryArray) => {
  return {
    type: SET_HOMEPAGE_GALLERY,
    payload: galleryArray,
  };
};

export const setHomePageGalleryHasError = (error) => {
  return {
    type: SET_HOMEPAGE_GALLERY_HAS_ERROR,
    payload: error,
  };
};

export const setHomePageSearchValue = (value) => {
  return {
    type: SET_HOMEPAGE_SEARCH_VALUE,
    payload: value,
  };
};

// PhotoPage

export const setPhotoPageImage = (imageLink) => {
  return {
    type: SET_PHOTOPAGE_IMAGE,
    payload: imageLink,
  };
};

export const setPhotoPageImages = (imagesArray) => {
  return {
    type: SET_PHOTOPAGE_IMAGES,
    payload: imagesArray,
  };
};
