import { combineReducers } from "redux";
import modalsReducer from "./modalsReducer";
import validationReducer from "./validationReducer";
import tweetsReducer from "./tweetsReducer";

export default combineReducers({
  modals: modalsReducer,
  validations: validationReducer,
  tweets: tweetsReducer,
});
