const initialvalue={
    count:100
}

let CounterReducer3=(state=initialvalue,action)=>{
    console.clear()
    console.log(state,action)
    if(action.type==='Inc3')
    {
        return {...state,count:state.count+10}
    }
    if(action.type==='Dec3')
    {
        return {...state,count:state.count-10}
    }
    if(action.type==='Reset3')
    {
        return {...state,count:initialvalue.count}
    }
    return state
}

export default CounterReducer3