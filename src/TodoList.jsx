import { connect } from "react-redux";
import React from "react";
import { actupnewtodo,acttogglestatus,actdelete, actadd, acttoggleupdate, actupdate, actfill } from "./store/actionCreators";
import Todo from "./Todo";

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

    function filterStatus(e=''){
        console.log(props);
        let temp = [...props.todos]
        temp = temp.filter((todo)=>{
            if(e==='com'){
                return (
                    todo.isdone
                )
            }
            if(e==='incp'){
                return(!todo.isdone)
            }
            return(true)
        })
        console.log(temp);
        props.fillarr(temp)
    }
    // console.clear()
    console.log(props);
    return (
        <div>
            <input type="text" ref={x} onKeyUp={(e) => { props.upnewtodo(e.target.value )}} />
            {!props.isupdate&&<button disabled={!props.newtodo.task} onClick={() => { handleAddTodo() }}>Add</button>}
            {props.isupdate&&<button disabled={!props.newtodo.task} onClick={() => { handleUpdate() }}>Update</button>}
            <div>
                <input type="radio" onChange={(e)=>{filterStatus(e.target.id)}} name="status" id="all" /><label for="all">All</label>
                <input type="radio" onChange={(e)=>{filterStatus(e.target.id)}} name="status" id="com" /><label htmlFor="com">Complete</label>
                <input type="radio" onChange={(e)=>{filterStatus(e.target.id)}} name="status" id="incp" /><label htmlFor="incp">Incomplete</label>
            </div>
            <ul>
                {
                    props.filteredarr.map((todo, ind) => {
                        return (
                        <li>
                            <Todo todo={todo} handleEdit={handleEdit} props={props} ind={ind}></Todo>
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
        update:()=>{dispatch(actupdate())},
        fillarr:(arr)=>{dispatch(actfill(arr))}

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Todolist)