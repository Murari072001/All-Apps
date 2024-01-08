function Todos(props){
    return(
        <div className='m-3 p-1 border border-info border-3 d-flex flex-wrap  justify-content-between position-relative'>
            <h4 className='m-0 ms-2 d-flex align-self-center' style={(props.a.status)?{color:"red",textDecoration:"line-through"}:{color:"black",textDecoration:"none"}}>{props.a.task}</h4>
            <div className="w-50 d-flex flex-wrap justify-content-end">
                {!(props.a.status)&&<><button className="btn w-25 m-1 btn-success" onClick={()=>{props.done(props.i)}}>Done</button>
                                    <button className="btn w-25 m-1 btn-warning" onClick={()=>{props.edit(props.i)}}>Edit</button></>}
                {(props.a.status)&& <><button className="btn w-25 m-1 btn-success" onClick={()=>{props.undo(props.i)}}>Undo</button>
                                    <button className="btn w-25 m-1 btn-danger" onClick={()=>{props.del(props.i)}}>Delete</button></>}    
            </div>
            <button className="btn position-absolute top-0 start-100 translate-middle" onClick={()=>{props.del(props.i)}} ><h6 className="bi bi-x-square-fill text-danger"></h6></button>    
        </div>
    )
}
export default Todos