import { useEffect } from "react"
import { connect } from "react-redux"
import { actgetproducts,actaddtocart, actsearch } from "./store/actions/loginActions"
import Product from "./Product"

function Products(props)
{
    // useEffect(()=>{
    //     props.getproducts()
    // },[props.islogin])
    console.log(props);
    return(
            <>
           <div className="form-floating search">
           <input type="search" className="form-control" placeholder="search" id="search" onKeyUp={(e)=>{props.searchproducts(e.target.value,props.allproducts)}} />
           <label htmlFor="search">Search</label>
           </div>
            <div className="d-flex flex-wrap justify-content-around">
                {
                    props.searchedproducts.map((product,index)=>{
                        return (
                            <Product product={product} index={index} add={props.add} login={props.login}></Product>
                        )
                    })
                
                }
            </div>
            </>
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
        add:(pro,ind,login)=>{dispatch(actaddtocart(pro,ind,login))},
        searchproducts:(value,allpro)=>{dispatch(actsearch(value,allpro))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Products)