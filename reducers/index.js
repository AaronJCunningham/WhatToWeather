import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import weatherReducer from "./weatherReducer";
import locationReducer from "./locationReducer";

const rootReducer = combineReducers({
  count: counterReducer,
  weather: weatherReducer,
  location: locationReducer,
});

export default rootReducer;
