import { combineReducers } from "redux";
import modalsReducer from "./modalsReducer";
import validationReducer from "./validationReducer";

export default combineReducers({
  modals: modalsReducer,
  validations: validationReducer,
});
