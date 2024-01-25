const initialvalue={
    count:0
}

let CounterReducer1=(state=initialvalue,action)=>{
    // console.clear()
    // console.log(state,action)
    if(action.type==='Inc1')
    {
        return {...state,count:state.count+1}
    }
    if(action.type==='Dec1')
    {
        return {...state,count:state.count-1}
    }
    if(action.type==='Reset1')
    {
        return {...state,count:initialvalue.count}
    }
    return state
}

export default CounterReducer1