import axios from "axios"
export function addnewuser(values)
{
    console.log("actions::",values)
    return (dispatch)=>{
        axios.post("http://localhost:4000/users",values).then(()=>{dispatch({ type: 'addnewuser', payload: values })})
    }
    // return {type:'addnewuser',payload:values}
}

export function actcheckuser(value)
{
    return (dispatch)=>{
        axios.get(`http://localhost:4000/users/?email=${value}`).then((res)=>{
            console.log('act::',res);
            dispatch({type:'checkuser',payload:res.data})
        }).catch((err)=>{console.log(err)})
    }
}