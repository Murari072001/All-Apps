import { useNavigate } from "react-router"
import CartItem from "./CartItems";
import { useDispatch, useSelector } from "react-redux";
import BillDesk from "./BillDesk";
import { useUpdateCartMutation } from "../../services/jsonApi";
import { updatecart } from "../loginform/loginSlice";

function Cart() {
    const navi = useNavigate()
    var [updateCartInServer]=useUpdateCartMutation()
    const login = useSelector(state => state.login.loginUser)
    const dispatch=useDispatch()
    function inc(pro,ind)
    {
        let temp = {...pro}
        temp.cartcount=temp.cartcount+1

        let temp2=[...login.cart]
        temp2[ind]={...temp}

        let temp3={...login}
        temp3.cart=[...temp2]
        updateCartInServer(temp3).then(()=>{
            dispatch(updatecart(temp2))
        })
    }

    function dec(pro,ind)
    {
        if(pro.cartcount>1)
        {
            let temp = {...pro}
        temp.cartcount=temp.cartcount-1

        let temp2=[...login.cart]
        temp2[ind]={...temp}
        
        let temp3={...login}
        temp3.cart=[...temp2]
        updateCartInServer(temp3).then(()=>{
            dispatch(updatecart(temp2))
        })
        }
    }
    function rem(ind)
    {
        let temp2=[...login.cart]
        temp2.splice(ind,1)
        
        let temp3={...login}
        temp3.cart=[...temp2]
        updateCartInServer(temp3).then(()=>{
            dispatch(updatecart(temp2))
        })
    }
    return (
        <>
            {
                login.cart.length === 0 &&
                <div className="text-center">
                    <h1 className="display-1 fw-normal ">Oooops</h1>
                    <div className="bi bi-exclamation-circle" style={{ fontSize: "200px" }}></div>
                    <h3>The Cart is Empty </h3>
                    <button className="btn btn-warning" onClick={() => { navi('/dashboard') }}>Shop Now <i className="bi bi-bag"></i></button>
                </div>
            }
            {
                login?.cart?.length > 0 &&
                <div className="cart">
                    <div className="d-flex flex-wrap items">
                        {
                            login.cart.map((product, index) => {
                                return (
                                    <CartItem product={product} index={index} login={login} inc={inc} dec={dec} rem={rem}></CartItem>
                                )
                            })
                        }
                    </div>
                    <div className="billcard"><BillDesk></BillDesk></div>
                </div>
            }
        </>
    )

}

export default Cart


// inc={props.inc} dec={props.dec} rem={props.remove} cart={props.cart} 