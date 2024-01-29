const initialValue={
    login:{},
    islogin:false,
    isedit:false
}

const LoginReducer=(state=initialValue,action)=>{
    
    if(action.type==='loginuser')
    {
        return {...state,islogin:!state.islogin,login:action.payload}
    }
    if(action.type==='edit')
    {
        return {...state,isedit:true}
    }
    if(action.type==='update')
    {
        return {...state,login:action.payload,isedit:false}
    }
    return {...state}
}

export default LoginReducer