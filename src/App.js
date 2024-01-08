import React from "react";
import Counter from "./Counter";

function App() {
  var [a,setA]=React.useState(0)
  function btnfn(e)
  {
    if(e.target.id==='inc')
    {
      setA(a+1)
    }
    if(e.target.id==='dec')
    {
      setA(a-1)
    }
  }
  return (
    <div className="App">
      <Counter a={a} btnfn={btnfn} ></Counter>
    </div>
  );
}

export default App;
