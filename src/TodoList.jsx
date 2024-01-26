import { connect } from "react-redux";
import React from "react";

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
        upnewtodo:(e)=>{dispatch({ type: 'newtodo', payload: e}) },
        togglestatus:(ind)=>{dispatch({ type: 'togglestatus', index: ind })},
        delete:(ind)=>{dispatch({ type: 'delete', index: ind }) },
        add:()=>{dispatch({ type: "addtodo" })},
        toggleupdate:(i)=>{dispatch({type:'toggleupdate',index:i})},
        update:()=>{dispatch({type:'update'})}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Todolist)