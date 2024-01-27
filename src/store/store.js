import { combineReducers, createStore } from "redux";
import RegistrationReducer from "./reducers/RegistrationForm.Reducer";

let store = createStore(combineReducers({user:RegistrationReducer}))

export default store