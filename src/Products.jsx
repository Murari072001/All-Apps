import { connect } from "react-redux";
import React from "react";
import Product from "./Product";

function Products(props)
{
    console.log(props)
    return(<div>
        <div className="d-flex flex-wrap justify-content-around">
            {
                props.products.map((product,index)=>{
                    return(
                        <Product product={product} index={index} add={props.add}></Product>
                    )
                })
            }
        </div>
    </div>)
}
function mapStateToProps(state)
{
    return state.cart
}
function mapDispatchToProps(dispatch)
{
    return {
        add:(value)=>{dispatch({type:"addtocart",payload:value})}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Products)