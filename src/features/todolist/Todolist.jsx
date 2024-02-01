import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtodo, updatenewtodo } from "./todoSlice";

function Todolist() {
    var todo = useSelector(state => state.todo)
    var dispatch = useDispatch()
    return (
        <div className="border border-3 border-info m-4 p-2">
            <form >
                <input type="text" onKeyUp={(e) => { dispatch(updatenewtodo(e.target.value)) }} />
                <button type="submit" className="btn btn-danger" onClick={() => { dispatch(addtodo()) }}>Add</button>
            </form>
            <div>
                <ul>
                    {
                        todo.todos.map((a) => {
                            return <div>
                                <li>{a}</li>
                                <button>Done</button>
                                <button>Edit</button>
                                <button>Undo</button>
                                <button>Delete</button>
                            </div>
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Todolist