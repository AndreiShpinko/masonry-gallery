import { ActionTypes } from "../actions/action-types";

const initialState = { gallery: false, error: false, searchValue: false };

export const homePageReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_HOMEPAGE_GALLERY:
      return { ...state, gallery: payload };

    case ActionTypes.SET_HOMEPAGE_GALLERY_HAS_ERROR:
      return { ...state, error: payload };

    case ActionTypes.SET_HOMEPAGE_SEARCH_VALUE:
      return { ...state, searchValue: payload };

    default:
      return state;
  }
};
