import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtodo, updatenewtodo , done ,edit,undo,deletetodo,update} from "./todoSlice";

function Todolist() {
    let inp=React.useRef(null)
    var todo = useSelector(state => state.todo)
    var dispatch = useDispatch()
    const handleAdd=()=>{
        dispatch(addtodo())
        inp.current.value=''
    }
    const handleEdit=(a,i)=>{
        dispatch(edit(i))
        console.log(a.task);
        inp.current.value=a.task
    }
    const handleUpdate=()=>{
        dispatch(update())
        inp.current.value=''
    }
    console.log(todo)
    return (
        <div className="border border-3 border-info m-4 p-2">
               <div className="form-floating m-2">
               <input ref={inp} className="form-control" placeholder="enter new todo" type="text" onKeyUp={(e) => { dispatch(updatenewtodo(e.target.value)) }} />
               <label htmlFor="inp">Enter new Todo</label>
                </div>
                {!todo.isupdate&&<button type="submit" className="btn btn-danger m-2" onClick={() => { handleAdd() }}>Add</button>}
                {todo.isupdate&&<button type="submit" className="btn btn-danger m-2" onClick={() => { handleUpdate() }}>Update</button>}
            <div>
                <ul>
                    {
                        todo.todos.map((a,i) => {
                            console.log(todo.todos);
                            return <li key={i}>
                            <div className="d-flex">
                            <h4 className="m-2" style={a.isDone?{color:"red",textDecoration:"line-through"}:{color:"black"}}>{a.task}</h4>
                            {!a.isDone&&<button className="btn btn-success m-2" onClick={()=>{dispatch(done(i))}}>Done</button>}
                            {!a.isDone&&<button className="btn btn-info m-2" onClick={()=>{handleEdit(a,i)}}>Edit</button>}
                            {a.isDone&&<button className="btn btn-warning m-2" onClick={()=>{dispatch(undo(i))}}>Undo</button>}
                            {a.isDone&&<button className="btn btn-danger m-2" onClick={()=>{dispatch(deletetodo(i))}}>Delete</button>}
                            </div>
                            </li>
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Todolist