import React from "react";
function InputTodo(props)
        {
            return(
                <div className="border border-success m-3 p-2 d-flex flex-column border-3">
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="input" placeholder="Enter New Todo" />
                        <label for="input">Enter New Todo</label>
                    </div>
                    {!props.isupdate&& <button className="btn btn-primary" onClick={()=>{props.add()}}>Add To List</button>}    
                    {props.isupdate&& <button className="btn btn-primary" onClick={()=>{props.update()}}>Update The List</button>}    
                </div>
            )
        }
        export default InputTodo