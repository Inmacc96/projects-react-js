import { combineReducers } from "redux";
import modalsReducer from "./modalsReducer";

export default combineReducers({
  modals: modalsReducer,
});
