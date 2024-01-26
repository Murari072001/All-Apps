
const initialValue={
    todos:[],
    newtodo:{
        task:'',
        isdone:false,
    },
    isupdate:false,
    updateindex:false

}

let TodoReducer=(state=initialValue,action)=>{
    if(action.type==='updatenewtodo')
    {
        console.log(action);
        return {...state,newtodo:{task:action.payload,isdone:false}}
    }
    if(action.type==='addtodo')
    {
        if(state.newtodo.task)
        return {...state,todos:[...state.todos,state.newtodo]}
    }
    if(action.type === 'delete'){
        var temp = [...state.todos]
        temp.splice(action.index,1)
        return{...state,todos:[...temp]}
    }
    if(action.type==='donetodo'){
        var temp=[...state.todos]
        temp[action.index].isdone=true
        return {...state,todos:[...temp]}
    }
    if(action.type==='undotodo'){
        var temp=[...state.todos]
        temp[action.index].isdone=false
        return {...state,todos:[...temp]}
    }
    if(action.type==='toggleupdate')
    {
        return {...state,isupdate:!state.isupdate,updateindex:action.index}
    }
    if(action.type==='update')
    {
        if(state.todos.length!==0)
        {var temp=[...state.todos]
        temp[state.updateindex].task=state.newtodo.task
        return {...state,todos:[...temp]}}
    }
    return state
}

export default TodoReducer