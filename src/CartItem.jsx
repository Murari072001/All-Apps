function CartItem({ product, index, dec, inc,rem, cart, login }) {
    return (
        <div className="d-flex flex-wrap w-100 border border-2 border-dark m-2 rounded rounded-3">
            <div className="p-2" style={{width:"20%"}}><img src={product.image} style={{ width: "100%", height: "100px" }} /></div>
            <div className="p-2" style={{width:"80%"}}>
                <h6 className="mb-0">{product.title}</h6>
                <p className="mb-0 text-truncate">{product.description}</p>
                <h6 className="mb-0">Price:{product.price}</h6>
                <div className="d-flex flex-wrap ">
                    <button className="btn ps-0" onClick={() => { dec(index,cart,login) }}><h4 className="bi bi-dash-square"></h4></button>
                    <h4 className="d-flex align-items-center">{product.cartcount}</h4>
                    <button className="btn" onClick={() => { inc(index,cart,login) }}><h4 className="bi bi-plus-square"></h4></button>
                    <button className="btn btn-danger" onClick={()=>{rem(product,index,cart,login)}}>Remove</button>
                </div>
            </div>
        </div>
    )
}

export default CartItem