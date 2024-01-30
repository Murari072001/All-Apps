function Product({product,index,add})
{
    return (
    <div className="w-25 card border-4 border-dark m-3 p-3">
        <img src={product.image} style={{width:'35%',height:"150px"}}/>
        <h4>{product.title.slice(0,25)}</h4>
        <p>{product.description.slice(0,100)}</p>
        <b className="mt-auto">Category:{product.category}</b>
        <h5>price:<b><b className="bi bi-currency-rupee m-0"></b>{product.price}</b></h5>
        <button onClick={()=>{add(product)}}>Add To Cart</button>
    </div>
    )
}
export default Product