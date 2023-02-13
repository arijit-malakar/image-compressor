import { combineReducers } from "redux";
import imageReducers from "./imageReducers";

const reducers = combineReducers({
  image: imageReducers,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
