import React from "react";
import { connect } from "react-redux";

function Cart(props)
{
    console.log('cart',props);
    return(
        <div>
            {  
                 
            }
        </div>
    )
}
function mapStateToProps(state)
{
    return state.cart
}
function mapDispatchToProps(dispatch)
{
    return {
        rem:(index)=>{dispatch({type:"remove",payload:index})}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart)