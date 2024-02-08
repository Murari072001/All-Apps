import React from "react"
import { useNavigate } from "react-router"

function Product({ product, index, add }) {
    const navi = useNavigate()
    return (
        <>
            <div className="card-body" onClick={()=>{navi(`/dashboard/${product.id}`)}}>
                <div className="text-center">            
                    <img className="ms-auto me-auto" src={product.image} style={{ width: "25%", height: "100px" }} />
                </div>
                <h6 className="mt-2 mb-auto"><b>{product.title}</b></h6>
                <b className="mt-auto">category : {product.category}</b>
                <p className="text-truncate">{product.description}</p>
                <div className="d-flex justify-content-between mb-2 ms-0">
                    <span className="btn btn-success w-25">{product.rating.rate}&nbsp;<i className="bi bi-star-fill"></i></span>
                    <h3 className="text-success"><b className="bi bi-currency-rupee"></b>{product.price}</h3>
                </div>
            </div>
            <div className="card-footer">
                {!product.inCart && <button className="btn btn-warning w-100" onClick={() => { add(product, index) }}>Add to Cart</button>}
                {product.inCart && <button className="btn btn-primary w-100" onClick={() => { navi('/dashboard/cart') }}>Go to Cart<i className="bi bi-cart2"></i></button>}
            </div>
        </>
    )
}
export default Product