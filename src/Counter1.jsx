import { connect } from "react-redux";
import React from "react";

function Counter1(props)
{
    console.log(props);
    return (<div className="border border-dark border-3 m-3 p-3">
        <h1>Counter 1:{props.counter1.count}</h1>
        <button className="btn btn-secondary m-2" onClick={()=>{props.dispatch({type:"Inc1"})}}>Inc</button>
        <button className="btn btn-secondary m-2" onClick={()=>{props.dispatch({type:"Dec1"})}}>Dec</button>
        <button className="btn btn-secondary m-2" onClick={()=>{props.dispatch({type:"Reset1"})}}>Reset</button>
    </div>)
}

export default connect((store)=>{return store})(Counter1)