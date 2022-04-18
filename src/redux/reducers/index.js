import { combineReducers } from "redux";
import { galleryReducer } from "./galleryReducer";

const reducers = combineReducers({
  gallery: galleryReducer,
});

export default reducers;
