
const initialValue={
    todos:[],
    newtodo:{
        task:'',
        isdone:false,
    }
}

let TodoReducer=(state=initialValue,action)=>{
    if(action.type==='updatenewtodo')
    {
        return {...state,newtodo:{task:action.payload,isdone:false}}
    }
    if(action.type==='addtodo')
    {
        return {...state,todos:[...state.todos,state.newtodo]}
    }
    if(action.type === 'delete'){
        var temp = [...state.todos]
        temp.splice(action.index,1)
        return{...state,todos:[...temp]}
    }
    if(action.type==='donetodo'){
        var temp=[...state.todos]
        temp[action.index].isdone=!temp[action.index].isdone
        return {...state,todos:[...temp]}
    }
    if(action.type==='undotodo'){
        var temp=[...state.todos]
        temp[action.index].isdone=!temp[action.index].isdone
        return {...state,todos:[...temp]}
    }
    return state
}

export default TodoReducer