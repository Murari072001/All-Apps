import { applyMiddleware, combineReducers, createStore } from "redux";
import reducer from "./reducers/AllReducers";
import { thunk } from "redux-thunk";

let store = createStore(reducer,applyMiddleware(thunk))

export default store