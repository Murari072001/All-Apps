import React from "react";

function Todo({todo,handleEdit, ind,props}) {
    return (
        <div>
            <span style={todo.isdone ? { color: 'red', textDecoration: 'line-through' } : { color: 'black' }} >{todo.task}</span>
            <button onClick={() => { props.togglestatus(ind) }}>{todo.isdone ? "Undo" : 'Done'}</button>
            {!todo.isdone && <button onClick={() => { handleEdit(todo, ind) }}>Edit</button>}
            {todo.isdone && <button onClick={() => { props.delete(ind) }}>delete</button>}
        </div>
    )
}
export default Todo   
