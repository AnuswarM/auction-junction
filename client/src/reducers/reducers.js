import { combineReducers } from "redux";
import userReducer from "./userAuthReducer";

const reducers = combineReducers({
  authStatus: userReducer,
});

export default reducers;
