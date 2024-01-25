const initialvalue={
    count:10
}

let CounterReducer2=(state=initialvalue,action)=>{
    console.clear()
    console.log(state,action)
    if(action.type==='Inc2')
    {
        return {...state,count:state.count+5}
    }
    if(action.type==='Dec2')
    {
        return {...state,count:state.count-5}
    }
    if(action.type==='Reset2')
    {
        return {...state,count:initialvalue.count}
    }
    return state
}

export default CounterReducer2