import React, { useEffect } from "react";
import { useGetProductsQuery } from "../../services/productsApi";
import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";
import { useUpdateCartMutation } from "../../services/jsonApi";
import { addtocart, getallproducts, searchproducts, updatecart } from "../loginform/loginSlice";
import { useNavigate } from "react-router-dom";

function AllProducts() {
    var { data, isLoading } = useGetProductsQuery()
    var [updateCartInServer] = useUpdateCartMutation()
    var login = useSelector(state => state.login)
    var dispatch = useDispatch()
    const navi=useNavigate()

    function add(pro, ind) {
        if (login.isLogin) {
            let temp = { ...pro, cartcount: 1 }
            let temp2 = { ...login.loginUser }
            temp2.cart = [...login.loginUser.cart, temp]

            let allpro=[...login.products]
            let prod={...allpro[ind]}
            prod.inCart=true
            allpro[ind]=prod

            updateCartInServer(temp2).then(() => {
                dispatch(updatecart(temp2.cart))
                dispatch(addtocart(allpro))
            })
        }
    }

    useEffect(() => {
        dispatch(getallproducts(data))
    }, [data])

    return (
        <>
            {

                isLoading && <div className="text-center"><img src="https://i.pinimg.com/originals/c7/e1/b7/c7e1b7b5753737039e1bdbda578132b8.gif" /></div>
            }
            {data && <>
                
                <div className="allpro d-flex flex-wrap justify-content-around">
                    {
                        login.products.map((product, index) => {
                            return (
                                <div key={product.id} title={product.title} className="card childpro m-3 p-3">
                                    <Product product={product} index={index} add={add} ></Product>
                                </div>
                            )
                        })

                    }
                </div>
            </>
            }
        </>
    )
}

export default AllProducts


//  onKeyUp={(e) => { props.searchproducts(e.target.value, props.allproducts) }}
// add={props.add} login={props.login}