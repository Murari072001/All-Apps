import axios from "axios";

export function checklogin(values,navi)
{
    return (dispatch)=>{
    axios.get(`http://localhost:4000/users/?email=${values.username}&password=${values.password}`).then((res)=>{
        if(res.data.length!==0)
        {
            let temp={...res.data[0]}
            dispatch({type:"loginuser",payload:temp});
            navi("/dashboard")
        }
    }).catch(()=>{})}
}

export function actsignout(navi)
{
    return (dispatch)=>{
        dispatch({type:'loginuser',payload:null})
        navi('/')
    }
}


export function actedit()
{
    return (dispatch)=>{
        dispatch({type:'edit'})
    }
}

export function actupdate(values,value)
{
    console.log('action',value,values);
    return (dispatch)=>{
        axios.put(`http://localhost:4000/users/${value.id}`,values).then((res)=>{console.log(res)}).catch((err)=>{console.log(err);})
        dispatch({type:'update',payload:values})
    }
}