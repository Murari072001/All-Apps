import { useEffect } from "react"
import { connect } from "react-redux"
import { actgetproducts,actaddtocart } from "./store/actions/loginActions"
import Product from "./Product"

function Products(props)
{
    // useEffect(()=>{
    //     props.getproducts()
    // },[props.islogin])
    console.log(props);
    return(
            <div className="d-flex flex-wrap justify-content-around">
                {
                    props.allproducts.map((product,index)=>{
                        return (
                            <Product product={product} index={index} add={props.add} login={props.login}></Product>
                        )
                    })
                
                }
            </div>
    )
}
function mapStateToProps(state)
{
    return state.login
}
function mapDispatchToProps(dispatch)
{
    return {
        getproducts:()=>{dispatch(actgetproducts())},
        add:(pro,ind,login)=>{dispatch(actaddtocart(pro,ind,login))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Products)