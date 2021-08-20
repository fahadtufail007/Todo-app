import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import todo from "./todoReducer";

export default combineReducers({
  todo,
  router: routerReducer,
});
