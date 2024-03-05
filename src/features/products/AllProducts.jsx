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
    const navi = useNavigate()

    function add(pro, ind) {
        if (login.isLogin) {
            let temp = { ...pro, cartcount: 1 }
            let temp2 = { ...login.loginUser }
            temp2.cart = [...login.loginUser.cart, temp]

            let allpro = [...login.products]
            let prod = { ...allpro[ind] }
            prod.inCart = true
            allpro[ind] = prod

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
                <div id="carouselExampleDark" class="carousel slide" data-bs-ride="true">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="2000">
                            <img src="https://marketplace.canva.com/EAFED0hv9G0/1/0/1600w/canva-blue-pink-modern-special-offer-sale-banner-J5VkNReQ8WA.jpg" height="500px" class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item" data-bs-interval="2000">
                            <img src="https://img.freepik.com/premium-psd/smartphone-sale-banner-template_185005-374.jpg?w=1060" height="500px" class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item" data-bs-interval="2000">
                            <img src="https://i.pinimg.com/736x/f0/f9/e4/f0f9e45724771f16745ad3f6f640d3ce.jpg" height="500px" class="d-block w-100" alt="..."/>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
                <div className="allpro d-flex flex-wrap">
                    {
                        login.products.map((product, index) => {
                            return (
                                <div key={product.id} title={product.title} className="card childpro p-3">
                                    <Product isLogin={login.isLogin} product={product} index={index} add={add} ></Product>
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