import { connect } from "react-redux";
import React from "react";
import { actupnewtodo,acttogglestatus,actdelete, actadd, acttoggleupdate, actupdate } from "./store/actionCreators";

function Todolist(props) {
    let x = React.useRef(null)
    const handleAddTodo = () => {
        props.add()
        x.current.value = ''
        props.upnewtodo('')
    }
    const handleEdit=(t,i)=>{
        x.current.value=t.task;
        props.upnewtodo(t.task)
        props.toggleupdate(i)
    }
    const handleUpdate=()=>{
        props.update()
        props.toggleupdate(null)
        x.current.value = ''
        props.upnewtodo('')
    }
    console.log(props);
    return (
        <div>
            <input type="text" ref={x} onKeyUp={(e) => { props.upnewtodo(e.target.value )}} />
            {!props.isupdate&&<button disabled={!props.newtodo.task} onClick={() => { handleAddTodo() }}>Add</button>}
            {props.isupdate&&<button disabled={!props.newtodo.task} onClick={() => { handleUpdate() }}>Update</button>}
            <ul>
                {
                    props.todos.map((todo, ind) => {
                        return (
                        <li>
                            <span style={todo.isdone ? { color: 'red', textDecoration: 'line-through' } : { color: 'black' }} >{todo.task}</span>
                            <button onClick={() => { props.togglestatus(ind) }}>{todo.isdone ? "Undo" : 'Done'}</button>
                            {!todo.isdone&&<button onClick={() => {handleEdit(todo,ind)}}>Edit</button>}
                            {todo.isdone&&<button onClick={() => { props.delete(ind)}}>delete</button>}
                        </li>)
                    })
                }
            </ul>
        </div>
    )
}
function mapStateToProps(state){
    return state.todolist
}
function mapDispatchToProps(dispatch){
    return{
        upnewtodo:(e)=>{dispatch(actupnewtodo(e))},
        togglestatus:(ind)=>{dispatch(acttogglestatus(ind))},
        delete:(ind)=>{dispatch(actdelete(ind)) },
        add:()=>{dispatch(actadd())},
        toggleupdate:(i)=>{dispatch(acttoggleupdate(i))},
        update:()=>{dispatch(actupdate)}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Todolist)