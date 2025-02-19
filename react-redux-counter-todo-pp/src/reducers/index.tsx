import { combineReducers } from "redux";
import todos from './todos';
import counter from './counter';
import posts from "./post";


const rootReducer = combineReducers({
  todos,
  counter,
  posts
})

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;