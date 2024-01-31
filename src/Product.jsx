import React from "react"
import { useNavigate } from "react-router"

function Product({product,index,add,login})
{
    const navi=useNavigate()
    return(
        <div key={product.id} title={product.title} className="card childpro m-3 p-3">
            <img className="ms-auto me-auto" src={product.image} style={{width:"25%",height:"100px"}} />
            <h6 className="mt-2"><b>{product.title}</b></h6>
            <b className="mt-auto">category : {product.category}</b>
            <p className="text-truncate">{product.description}</p>
            <div className="d-flex justify-content-between mb-2 ms-0">
            <span className="btn btn-success w-25">{product.rating.rate}&nbsp;<i className="bi bi-star-fill"></i></span>
            <h3 className="text-success"><b className="bi bi-currency-rupee"></b>{product.price}</h3>
            </div>
           {!product.inCart&& <button className="btn btn-warning" onClick={()=>{add(product,index,login)}}>Add to Cart</button>}
           {product.inCart&& <button className="btn btn-primary" onClick={()=>{navi('/dashboard/cart')}}>Go to Cart<i className="bi bi-cart2"></i></button>}
        </div>
    )
}
export default Product