import { combineReducers } from "redux";
import { homePageReducer } from "./homePageReducer";
import { photoPageReducer } from "./photoPageReducer";

const reducers = combineReducers({
  home: homePageReducer,
  photo: photoPageReducer,
});

export default reducers;
