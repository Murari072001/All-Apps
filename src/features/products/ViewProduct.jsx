import React from "react";
import { useGetProductsByIdQuery } from "../../services/productsApi";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useUpdateCartMutation } from "../../services/jsonApi";
import { addtocart, updatecart } from "../loginform/loginSlice";

function ViewProduct() {
    const pid = useParams()
    let { data, isLoading } = useGetProductsByIdQuery(pid.pid)
    var [updateCartInServer] = useUpdateCartMutation()
    const login = useSelector(state => state.login)
    const dispatch = useDispatch()
    const navi = useNavigate()
    const temp = login.loginUser?.cart?.filter(a => a?.id === data?.id)
    if (login.isLogin && temp.length > 0) {
        data = { ...data, inCart: true, cartcount: temp[0].cartcount }
    }
    else {
        data = { ...data, inCart: false }
    }
    function add() {
        if (login.isLogin) {
            let temp = { ...data, cartcount: 1 }
            let temp2 = { ...login.loginUser }
            temp2.cart = [...login.loginUser.cart, temp]

            let allpro = [...login.products]
            let prod = allpro.map((a) => {
                if (a.id === data.id) {
                    a = { ...a, inCart: true }
                    return a
                }
                return a
            })
            updateCartInServer(temp2).then(() => {
                dispatch(updatecart(temp2.cart))
                dispatch(addtocart(prod))
            })
        }
    }
    console.log(data);
    return (
        <>
            {
                isLoading && <div className="text-center"><img src="https://i.pinimg.com/originals/c7/e1/b7/c7e1b7b5753737039e1bdbda578132b8.gif" /></div>
            }
            {!isLoading &&
                <div className="d-flex flex-wrap">
                    <img src={data.image} style={{ width: "20%" }} alt="" />
                    <div className="w-75">
                        <h1>{data.title}</h1>
                        <h5 className="mt-auto">category : {data.category}</h5>
                        <h5 className="">{data.description}</h5>
                        <div className="d-flex justify-content-between mb-2 ms-0">
                            <span className="btn btn-success w-25">{data.rating.rate}&nbsp;<i className="bi bi-star-fill"></i></span>
                            <h3 className="text-success"><b className="bi bi-currency-rupee"></b>{data.price}</h3>
                        </div>
                        <h5>Available Stock: {data.rating.count}</h5>
                        {!data.inCart && <button className="btn btn-warning" onClick={() => { add() }}>Add to Cart</button>}
                        {data.inCart && <>
                            <button className="btn btn-primary" onClick={() => { navi('/dashboard/cart') }}>Go to Cart<i className="bi bi-cart2"></i></button>
                            {/* <div className="d-flex flex-wrap ">
                                <button className="btn ps-0" onClick={() => { dec(product, index) }}><h4 className="bi bi-dash-square"></h4></button>
                                <h4 className="d-flex align-items-center">{product.cartcount}</h4>
                                <button className="btn" onClick={() => { inc(product, index) }}><h4 className="bi bi-plus-square"></h4></button>
                                <button className="btn btn-danger" onClick={() => { rem(index) }}>Remove</button>
                            </div> */}
                        </>}
                    </div>
                </div>
            }
        </>
    )
}

export default ViewProduct