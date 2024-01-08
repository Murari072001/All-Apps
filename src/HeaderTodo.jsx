function HeaderTodo(props)
        {
            return(
                <div className="d-flex flex-wrap justify-content-between m-3 p-3 border border-primary border-3">
                    <h2>To Do App</h2>
                    <div>
                        <button className="btn btn-success rounded-4 m-2" onClick={()=>{props.filteritem('all')}}><h4>All<span></span>{props.mainitem.length}</h4></button>
                        <button className="btn btn-success rounded-4 m-2" onClick={()=>{props.filteritem('complete')}}><h4>Complete<span></span>{props.mainitem.filter((a)=>{return a.status}).length}</h4></button>
                        <button className="btn btn-success rounded-4 m-2" onClick={()=>{props.filteritem('incomplete')}}><h4>Incomplete<span></span>{props.mainitem.filter((a)=>{return !a.status}).length}</h4></button>    
                    </div>    
                </div>
            )
        }
export default HeaderTodo