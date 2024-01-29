import axios from "axios";

export function checklogin(values,navi)
{
    return (dispatch)=>{
    axios.get(`http://localhost:4000/users/?email=${values.username}&password=${values.password}`).then((res)=>{
        dispatch({type:"loginuser",payload:res.data});
        if(res.data.length!==0)
        {
            navi("/dashboard")
        }
    }).catch(()=>{})}
}