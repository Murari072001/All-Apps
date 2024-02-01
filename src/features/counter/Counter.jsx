import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "./counterSlice";

function Counter() {
    var count = useSelector(state => state.count)
    var dispatch = useDispatch()
    console.log(count);
    return (
        <div className="border border-2 border-danger m-4 p-2">
            <h1 className="m-2">Count:{count.count}</h1>
            <button className="btn btn-success m-2" onClick={()=>{dispatch(increment())}}>Inc</button>
            <button className="btn btn-success m-2" onClick={()=>{dispatch(decrement())}}>Dec</button>
            <button className="btn btn-success m-2" onClick={()=>{dispatch(reset())}}>Reset</button>
        </div>
    )
}

export default Counter