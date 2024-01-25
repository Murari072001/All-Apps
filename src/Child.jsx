import React from "react";
import { useParams } from "react-router";

function Child(){
    let param=useParams()
    let [student,setStudent]=React.useState(null)
    React.useState(()=>{
        setStudent({...JSON.parse(param.details)})
    })
    return(
    <div className="container d-flex flex-wrap " style={{width:"100%"}}>
    {
        student && 
            <div className="card p-3 border border-dark border-3">
                <h5>Firstname:{student.firstname}</h5>
                <h5>Lastname:{student.lastname}</h5>
                <h5>Email:{student.email}</h5>
                <h5>Age:{student.age}</h5>
            </div>
           
    }
</div>)
}

export default Child