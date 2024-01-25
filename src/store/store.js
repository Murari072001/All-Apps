import { combineReducers, createStore } from "redux";
import CounterReducer1 from "./reducers/counterreducer1";
import CounterReducer2 from "./reducers/counterreducer2";
import CounterReducer3 from "./reducers/counterreducer3";

let store = createStore(combineReducers({counter1:CounterReducer1,counter2:CounterReducer2,counter3:CounterReducer3}))

export default store