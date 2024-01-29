import { combineReducers } from "redux";
import RegistrationReducer from "./RegistrationForm.Reducer";
import LoginReducer from "./LoginReducer";

const reducer = combineReducers({user:RegistrationReducer,login:LoginReducer})

export default reducer