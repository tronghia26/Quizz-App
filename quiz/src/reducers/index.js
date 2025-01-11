import loginReducer from "./login";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  loginReducer,
  // THêm nhiều reducer vào đây
});

export default allReducers;
