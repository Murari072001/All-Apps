import { connect } from "react-redux";
import React from "react";

function Todolist(props)
{
    let inp=React.useRef()
    const handleAdd = ()=>{
        props.dispatch({type:'addtodo'})
        inp.current.value=""
        props.dispatch({type:'updatenewtodo',payload:''})
    }
    console.log(props)
    return(<div>
        <h1>TodoList</h1>
        <input type="text" ref={inp} onKeyUp={(e)=>{props.dispatch({type:'updatenewtodo',payload:e.target.value})}} />
        <button onClick={()=>{handleAdd()}}>Add</button>
        <ul>
            {props.todolist.todos.map((todo,i)=>{
            return(
            <li  style={todo.isdone?{color:'red',textDecoration:"line-through"}:{color:'black'}} >{todo.task}
            {!todo.isdone&&<button onClick={()=>{props.dispatch({type:'donetodo',index:i})}}>Done</button>}
            {todo.isdone&&<button onClick={()=>{props.dispatch({type:'undotodo',index:i})}}>Undo</button>}
            <button onClick={()=>{props.dispatch({type:'delete',index:i})}}>Delete</button>
            </li>)})}
        </ul>
    </div>)
}

export default connect((store)=>{return store}) (Todolist)