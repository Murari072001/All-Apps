const initialValue={
    login:{cart:[]},
    islogin:false,
    isedit:false,
    allproducts:[],
    cart:[],
}

const LoginReducer=(state=initialValue,action)=>{
    
    if(action.type==='loginuser')
    {
        console.log("cart",action.cart);
        return {...state,islogin:!state.islogin,login:action.payload,cart:[...action.cart]}
    }
    if(action.type==='edit')
    {
        return {...state,isedit:true}
    }
    if(action.type==='update')
    {
        return {...state,login:action.payload,isedit:false}
    }
    if(action.type==='getproducts')
    {
        let tempcart=[...state.cart]
        let temp=action.payload.map((a)=>{
            if(tempcart.some(b=>a.id===b.id))
            {
                a.inCart=true
                return a
            }
            else
            {
                a.inCart=false
                return a
            }
        })
        return {...state,allproducts:[...temp]}
    }
    if(action.type==='addtocart')
    {
        let temp=[...state.allproducts]
        temp=temp.map((a)=>{
            if(a.title===action.payload.title)
            {
                a.inCart=true
                return a
            }
            return a
        })
        return {...state,login:{...action.login},cart:[...state.login.cart,{...action.payload}],allproducts:temp}
    }
    if(action.type==="inc")
    {
        return {...state,cart:[...action.payload]}
    }
    if(action.type==="dec")
    {
        return {...state,cart:[...action.payload]}
    }
    if(action.type==="remove")
    {
        let temp=[...state.allproducts]
        temp=temp.map((a)=>{
            if(a.title===action.payload.title)
            {
                a.inCart=false
                return a
            }
            return a
        })
        return {...state,allproducts:[...temp],cart:[...action.cart]}
    }
    return {...state}
}

export default LoginReducer