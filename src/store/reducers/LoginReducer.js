const initialValue={
    login:{}
}

const LoginReducer=(state=initialValue,action)=>{
    
    if(action.type==='loginuser')
    {
        return {...state,login:action.payload}
    }
    return {...state}
}

export default LoginReducer