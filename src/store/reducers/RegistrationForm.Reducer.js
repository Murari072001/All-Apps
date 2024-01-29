const initialValue={
    users:[],
    checkuser:[]
}

const RegistrationReducer=(state=initialValue,action)=>{
        if(action.type==='addnewuser')
        {
            return {...state,users:[...state.users,action.payload]}
        }
        if(action.type==='checkuser')
        {
            return {...state,checkuser:action.payload}
        }
        return state
}

export default RegistrationReducer