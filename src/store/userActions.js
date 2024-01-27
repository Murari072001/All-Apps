import axios from "axios"
export function addnewuser(values)
{
    console.log("actions::",values)
    return (dispatch)=>{
        axios.post("http://localhost:4000/users",values).then(()=>{dispatch({ type: 'addnewuser', payload: values })})
    }
    // return {type:'addnewuser',payload:values}
}