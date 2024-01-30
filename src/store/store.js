import { createStore, combineReducers } from "redux";
import CartReducer from "./reducers/CartReducer";

let store=new createStore(combineReducers({
    cart:CartReducer
}))

export default store