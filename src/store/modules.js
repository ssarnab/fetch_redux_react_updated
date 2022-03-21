import { combineReducers } from "redux";
import hrmsReducer from "./modules/hrms/hrms";

export default combineReducers({
  hrms: hrmsReducer,
});
