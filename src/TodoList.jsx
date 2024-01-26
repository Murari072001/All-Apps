import { connect } from "react-redux";
import React from "react";
import { func } from "prop-types";

function Todolist(props) {
    let inp = React.useRef()
    const handleAdd = () => {
        props.add()
        props.update(inp.current.value = "")
    }
    console.log(props)
    return (<div className="container border border-3 border-dark">
        <h1 className="m-3 p-3 border border-3 border-dark">TodoList</h1>
        <div className="m-3 p-3 border border-3 border-dark">
            <input type="text" ref={inp} onKeyUp={(e) => { props.update(e.target.value) }} />
            <button onClick={() => { handleAdd() }}>Add</button>
            <ul className="mt-3">
                {props.todos.map((todo, i) => {
                    return (
                        <li className="m-2 p-2" style={todo.isdone ? { color: 'red', textDecoration: "line-through",backgroundColor:"green" } : { color: 'black' }} >{todo.task}
                            {!todo.isdone && <button className="btn btn-success ms-2" onClick={() => { props.done(i) }}>Done</button>}
                            {todo.isdone && <button className="btn btn-warning ms-2" onClick={() => { props.undo(i) }}>Undo</button>}
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
        update: (value) => { dispatch({ type: 'updatenewtodo', payload: value }) },
        add: () => { dispatch({ type: 'addtodo' }) },
        done: (i) => { dispatch({ type: 'donetodo', index: i }) },
        undo: (i) => { dispatch({ type: 'undotodo', index: i }) },
        delete: (i) => { dispatch({ type: 'delete', index: i }) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Todolist)