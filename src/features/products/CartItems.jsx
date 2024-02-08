import { useNavigate } from "react-router-dom";

function CartItem({ product, index, dec, inc, rem,}) {
    const navi=useNavigate()
    return (
        <div className="d-flex child-cart flex-wrap w-100 border border-2 border-dark m-2 rounded rounded-3">
            <div className="p-2" style={{width:"20%"}} onClick={()=>{navi(`/dashboard/${product.id}`)}}><img src={product.image} style={{ width: "100%", height: "100px" }} /></div>
            <div className="p-2" style={{width:"80%"}}>
                <div onClick={()=>{navi(`/dashboard/${product.id}`)}}>
                <h6 className="mb-0">{product.title}</h6>
                <p className="mb-0 text-truncate">{product.description}</p>
                <h6 className="mb-0">Price:{product.price}</h6>
                </div>
                <div className="d-flex flex-wrap ">
                    <button className="btn ps-0" onClick={() => { dec(product,index) }}><h4 className="bi bi-dash-square"></h4></button>
                    <h4 className="d-flex align-items-center">{product.cartcount}</h4>
                    <button className="btn" onClick={() => { inc(product,index) }}><h4 className="bi bi-plus-square"></h4></button>
                    <button className="btn btn-danger" onClick={()=>{rem(index)}}>Remove</button>
                </div>
            </div>
        </div>
    )
}

export default CartItem