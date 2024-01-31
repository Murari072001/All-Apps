import axios from "axios";
//login
export function checklogin(values,navi)
{
    return (dispatch)=>{
    axios.get(`http://localhost:4000/users/?email=${values.username}&password=${values.password}`).then((res)=>{
        if(res.data.length!==0)
        {
            axios.get("https://fakestoreapi.com/products").then((resallpro)=>{
                let temp={...res.data[0]}
                dispatch({type:"loginuser",payload:temp,cart:temp.cart})
                dispatch({type:"getproducts",payload:resallpro.data})
        })
            navi("/dashboard")
        }
    }).catch(()=>{})}
}
//logout
export function actsignout(navi)
{
    return (dispatch)=>{
        dispatch({type:'loginuser',payload:null,cart:[]})
        navi('/login')
    }
}
//profile edit
export function actedit()
{
    return (dispatch)=>{
        dispatch({type:'edit'})
    }
}
//profile update
export function actupdate(values,value)
{
    return (dispatch)=>{
        axios.put(`http://localhost:4000/users/${value.id}`,values).then((res)=>{}).catch((err)=>{})
        dispatch({type:'update',payload:values})
    }
}
//gets products

export function actgetproducts()
{
    return (dispatch)=>{
        axios.get("https://fakestoreapi.com/products").then((res)=>{dispatch({type:"getproducts",payload:res.data})})
    }
}
//add to cart
export function actaddtocart(pro,ind,login)
{
    return (dispatch)=>{
        pro={...pro,cartcount:1}
        axios.put(`http://localhost:4000/users/${login.id}`,{...login,cart:[...login.cart,pro]}).then((res)=>{dispatch({type:"addtocart",payload:pro,login:res.data})}).catch((err)=>{})
        
    }
}
//inc item in cart
export function actinc(ind,cart,login)
{
    return (dispatch)=>{
        cart[ind].cartcount+=1
        axios.put(`http://localhost:4000/users/${login.id}`,{...login,cart:[...login.cart]}).then((res)=>{dispatch({type:"inc",payload:cart})}).catch((err)=>{})
    }
}
//dec item in cart
export function actdec(ind,cart,login)
{
    return (dispatch)=>{
        if(cart[ind].cartcount>1)
        {
            cart[ind].cartcount-=1
        axios.put(`http://localhost:4000/users/${login.id}`,{...login,cart:[...login.cart]}).then((res)=>{dispatch({type:"inc",payload:cart})}).catch((err)=>{})
    }
    }
}
//remove item from from
export function actremove(pro,ind,cart,login)
{
    return (dispatch)=>{
        cart.splice(ind,1)
        axios.put(`http://localhost:4000/users/${login.id}`,{...login,cart:[...cart]}).then((res)=>{
            dispatch({type:"remove",payload:pro,cart:cart})}).catch((err)=>{})
    }
}