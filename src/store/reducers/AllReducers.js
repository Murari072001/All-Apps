import { combineReducers } from "redux";
import RegistrationReducer from "./RegistrationForm.Reducer";
import LoginForm from "../../LoginForm";

const reducer = combineReducers({user:RegistrationReducer,login:LoginForm})

export default reducer