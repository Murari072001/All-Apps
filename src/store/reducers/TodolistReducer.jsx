
const initialValue = {
    todos: [],
    newtodo: {
        task: '',
        isdone: false,
    },
    isupdate:false,
    updateindex:null
}

let TodoReducer = (state = initialValue, action) => {

    if (action.type === 'newtodo') {
        return { ...state, newtodo: { task: action.payload, isdone: false } }
    }
    if (action.type === 'addtodo') {
        // if (state.newtodo.task) 
         return { ...state, todos: [...state.todos, state.newtodo] } 
    }
    if (action.type === 'delete') {
        let temp = [...state.todos]
        temp.splice(action.index, 1)
        return { ...state, todos: [...temp] }

        // state.todos.splice(action.index,1)
        // return {...state,todos:[...state.todos]}
    }
    if (action.type === 'togglestatus') {
        let temp = [...state.todos]
        temp[action.index].isdone = !temp[action.index].isdone
        return { ...state, todos: [...temp] }
    }
    if(action.type==='toggleupdate')
    {
        return {...state,isupdate:!state.isupdate,updateindex:action.index}
    }
    if(action.type==='update')
    {
        console.log(state.newtodo);
        let temp=[...state.todos]
        temp[state.updateindex].task=state.newtodo.task;
        return{...state,todos:[...temp]}
    }
    return state
}

export default TodoReducer