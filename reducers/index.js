import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import fetchPosts from "./postsReducer";

const rootReducer = combineReducers({
  count: counterReducer,
  posts: fetchPosts,
});

export default rootReducer;
