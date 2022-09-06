import { ActionTypes } from "../actions/action-types";

const initialState = { image: false, images: false };

export const photoPageReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PHOTOPAGE_IMAGE:
      return { ...state, image: payload };

    case ActionTypes.SET_PHOTOPAGE_IMAGES:
      return { ...state, images: payload };

    default:
      return state;
  }
};
