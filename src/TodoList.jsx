import { connect } from "react-redux";
import React from "react";

function Todolist(props)
{
    let inp=React.useRef()
    const handleAdd = ()=>{
        props.add()
        inp.current.value=""
        props.update('')
    }
    console.log(props)
    return(<div>
        <h1>TodoList</h1>
        <input type="text" ref={inp} onKeyUp={(e)=>{props.update(e.target.value)}} />
        <button onClick={()=>{handleAdd()}}>Add</button>
        <ul>
            {props.todos.map((todo,i)=>{
            return(
            <li>{todo.task}
            <button onClick={()=>{props.delete(i)}}>Delete</button>
            </li>)})}
        </ul>
    </div>)
}

function MapStateToProps(state){
    return state.todolist
}
function MapDispatchToProps(dispatch){
    return{
        update:(e)=>{
            dispatch({type:'updatenewtodo',payload:e})
        },
        add:()=>{
            dispatch({type:'addtodo'})
        },
        delete:(i)=>{
            dispatch({type:'delete',index:i})
        }
        
    }
}

export default connect(MapStateToProps, MapDispatchToProps) (Todolist)