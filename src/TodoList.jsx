import { connect } from "react-redux";
import React from "react";

function Todolist(props) {
    let x = React.useRef(null)
    const handleAddTodo = () => {
        props.dispatch({ type: "addtodo" })
        x.current.value = ''
        props.dispatch({ type: 'newtodo', payload: '' })
    }
    const handleEdit=(t,i)=>{
        x.current.value=t.task;
        props.dispatch({type:'newtodo',payload:t.task})
        props.dispatch({type:'toggleupdate',index:i})
    }
    const handleUpdate=()=>{
        props.dispatch({type:'update'})
        props.dispatch({type:'toggleupdate',index:null})
        x.current.value = ''
        props.dispatch({ type: 'newtodo', payload: '' })
    }
    console.log(props);
    return (
        <div>
            <input type="text" ref={x} onKeyUp={(e) => { props.dispatch({ type: 'newtodo', payload: e.target.value }) }} />
            {!props.todolist.isupdate&&<button disabled={!props.todolist.newtodo.task} onClick={() => { handleAddTodo() }}>Add</button>}
            {props.todolist.isupdate&&<button disabled={!props.todolist.newtodo.task} onClick={() => { handleUpdate() }}>Update</button>}
            <ul>
                {
                    props.todolist.todos.map((todo, ind) => {
                        return (
                        <li>
                            <span style={todo.isdone ? { color: 'red', textDecoration: 'line-through' } : { color: 'black' }} >{todo.task}</span>
                            <button onClick={() => { props.dispatch({ type: 'togglestatus', index: ind }) }}>{todo.isdone ? "Undo" : 'Done'}</button>
                            {!todo.isdone&&<button onClick={() => {handleEdit(todo,ind)}}>Edit</button>}
                            {todo.isdone&&<button onClick={() => { props.dispatch({ type: 'delete', index: ind }) }}>delete</button>}
                        </li>)
                    })
                }
            </ul>
        </div>
    )
}
export default connect(store => store)(Todolist)