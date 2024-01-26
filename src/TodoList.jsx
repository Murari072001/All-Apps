import { connect } from "react-redux";
import React from "react";

function Todolist(props) {
    let inp = React.useRef()
    const handleAdd = () => {
        props.add()
        props.updatenewtodo(inp.current.value = "")
    }
    const handleEdit=(todo,i)=>{
        props.toggleupdate(i)
        props.updatenewtodo(inp.current.value = todo.task)
    }
    const handleUpdate=()=>{
        props.update()
        props.toggleupdate(null)
        props.updatenewtodo(inp.current.value = "")
    }
    console.log(props)
    return (<div className="container border border-3 border-dark">
        <h1 className="m-3 p-3 border border-3 border-dark">TodoList</h1>
        <div className="m-3 p-3 border border-3 border-dark">
            <div className="form-floating">
            <input type="text" className="form-control" id="input" placeholder="Todo" ref={inp} onKeyUp={(e) => { props.updatenewtodo(e.target.value) }} />
            <label for="input">Enter New Todo</label>
            </div>
             <br/>
            {!props.isupdate&&<button className="btn w-100 btn-warning " onClick={() => { handleAdd() }}>Add</button>}
            {props.isupdate&&<button className="btn w-100 btn-warning " onClick={() => { handleUpdate() }}>Update</button>}
            <ul className="mt-3">
                {props.todos.map((todo, i) => {
                    return (
                        <li className="m-2 p-2" style={todo.isdone ? { color: 'red', textDecoration: "line-through" } : { color: 'black' }} >{todo.task}
                            {!todo.isdone && <button className="btn btn-success ms-2" onClick={() => { props.done(i) }}>Done</button>}
                            {todo.isdone && <button className="btn btn-warning ms-2" onClick={() => { props.undo(i) }}>Undo</button>}
                            <button className="btn btn-danger ms-2" onClick={() => {handleEdit(todo,i)}}>Edit</button>
                            <button className="btn btn-danger ms-2" onClick={() => { props.delete(i) }}>Delete</button>
                        </li>)
                })}
            </ul>
        </div>
    </div>)
}
function mapStateToProps(state) {
    return state.todolist
}

function mapDispatchToProps(dispatch) {
    return {
        updatenewtodo: (value) => { dispatch({ type: 'updatenewtodo', payload: value }) },
        add: () => { dispatch({ type: 'addtodo' }) },
        done: (i) => { dispatch({ type: 'donetodo', index: i }) },
        undo: (i) => { dispatch({ type: 'undotodo', index: i }) },
        delete: (i) => { dispatch({ type: 'delete', index: i }) },
        edit:()=>{dispatch({type:"edit"})},
        toggleupdate:(i)=>{dispatch({type:'toggleupdate',index:i})},
        update:()=>{dispatch({type:'update'})}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Todolist)