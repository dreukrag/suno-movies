import { combineReducers } from "redux";
import MovieReducer from "./MovieReducer";

const RootReducer = combineReducers({
  movies: MovieReducer,
});

export default RootReducer;
