const initialvalue={
    allPro:[],
    selected:[],
}
let productReducer=(state=initialvalue,action)=>{
    if(state==="getPro")
    {
        return {...state,allPro:[...action.payload]}
    }
    if(state==="selected")
    {
        return {...state,selected:[...action.payload]}
    }
    return state
}
export default productReducer