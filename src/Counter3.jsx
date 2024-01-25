import { connect } from "react-redux";
import React from "react";

function Counter3(props)
{
    console.log(props);
    return (<div className="border border-dark border-3 m-3 p-3">
        <h1>Counter 3:{props.counter3.count}</h1>
        <button className="btn btn-secondary m-2" onClick={()=>{props.dispatch({type:"Inc3"})}}>Inc</button>
        <button className="btn btn-secondary m-2" onClick={()=>{props.dispatch({type:"Dec3"})}}>Dec</button>
        <button className="btn btn-secondary m-2" onClick={()=>{props.dispatch({type:"Reset3"})}}>Reset</button>
    </div>)
}

export default connect((store)=>{return store})(Counter3)