import { createStore, combineReducers } from "redux";
import TodoReducer from "./reducers/TodolistReducer";

let store=new createStore(combineReducers({
    todolist:TodoReducer
}))

export default store