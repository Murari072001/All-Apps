const initialValue={
    users:[]   
}

const RegistrationReducer=(state=initialValue,action)=>{
        if(action.type==='addnewuser')
        {
            return {...state,users:[...state.users,action.payload]}
        }
}

export default RegistrationReducer