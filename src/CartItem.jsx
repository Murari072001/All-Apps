function CartItem({ product, index, dec, inc,rem, cart, login }) {
    return (
        <div className="d-flex flex-wrap border border-3 border-dark m-2 rounded rounded-3">
            <div className="w-25 p-2"><img src={product.image} style={{ width: "100%", height: "100%" }} /></div>
            <div className="w-75 p-2">
                <h1>{product.title}</h1>
                <p>{product.description.slice(0, 100)}</p>
                <h6>Price:{product.price}</h6>
                <div className="d-flex flex-wrap ">
                    <button className="btn" onClick={() => { dec(index,cart,login) }}><h4>-</h4></button>
                    <h4 className="align-bottom">{product.cartcount}</h4>
                    <button className="btn" onClick={() => { inc(index,cart,login) }}><h4>+</h4></button>
                    <button className="btn btn-danger" onClick={()=>{rem(product,index,cart,login)}}>Remove</button>
                </div>
            </div>
        </div>
    )
}

export default CartItem