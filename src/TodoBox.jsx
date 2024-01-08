import React from "react";
import Todos from "./Todos";
function TodoBox(props)
        {
            return(
                <div className="m-3 p-2 border border-danger border-3">
                    <h3>To Do List</h3>
                    {
                        props.item.map((a,i)=>{
                            return (
                                <Todos a={a} i={i} done={props.done} edit={props.edit} undo={props.undo} del={props.del} />
                            )
                        })
                    }    
                </div>
            )
        }
export default TodoBox