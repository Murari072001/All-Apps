import React from "react";

function Counter({a,btnfn})
{
    
    return(
        <div>
            <h2>Counter: <span>{a}</span></h2>
            <button id="inc" onClick={(e)=>{btnfn(e)}}>inc</button>    
            <button id="dec" onClick={(e)=>{btnfn(e)}}>dec</button> 
        </div>
    )
}

export default Counter