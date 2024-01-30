import allproducts from "./allproducts"

const initialValue={
    products:allproducts,
    cartitems:[]
}

let CartReducer=(state=initialValue,action)=>{
    if(action.type==='addtocart')
    {
        console.log(1);
        return {...state,cartitems:[...state.cartitems,action.payload]}
    }
    if(action.type==='remove')
    {
        let temp=[...state.cartitems];
        temp=temp.splice(action.index,1)
        return {...state,cartitems:[...temp]}
    }
    return state
}

export default CartReducer