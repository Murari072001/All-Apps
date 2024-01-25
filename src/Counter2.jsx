import { connect } from "react-redux";
import React from "react";

function Counter2(props)
{
    console.log(props);
    return (<div  className="border border-dark border-3 m-3 p-3">
        <h1>Counter 2:{props.counter2.count}</h1>
        <button className="btn btn-secondary m-2" onClick={()=>{props.dispatch({type:"Inc2"})}}>Inc</button>
        <button className="btn btn-secondary m-2" onClick={()=>{props.dispatch({type:"Dec2"})}}>Dec</button>
        <button className="btn btn-secondary m-2" onClick={()=>{props.dispatch({type:"Reset2"})}}>Reset</button>
    </div>)
}

export default connect((store)=>{return store})(Counter2)