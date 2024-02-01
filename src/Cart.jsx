import { connect } from "react-redux"
import { useNavigate } from "react-router"
import { actdec, actinc, actremove } from "./store/actions/loginActions";
import CartItem from "./CartItem";
import BillDesk from "./BillDesk";

function Cart(props) {
    console.log(props);
    const navi = useNavigate()
    if (props.cart.length === 0) {
        return (
            <div className="text-center">
                <h1 className="display-1 fw-normal ">Oooops</h1>
                <div className="bi bi-exclamation-circle" style={{fontSize:"200px"}}></div>
                <h3>The Cart is Empty </h3>
                <button className="btn btn-warning" onClick={() => { navi('/dashboard') }}>Shop Now <i className="bi bi-bag"></i></button>
            </div>
        )
    }
    else {
        return (
            <div className="d-flex flex-wrap">
                <div className="d-flex flex-wrap"  style={{ width: "55%" }}>
                    {
                        props.cart.map((product, index) => {
                            return (
                                    <CartItem product={product} index={index} inc={props.inc} dec={props.dec} rem={props.remove} cart={props.cart} login={props.login} ></CartItem>
                            )
                        })
                    }
                </div>
                <div style={{ width: "45%"}} className="position-relative "><BillDesk></BillDesk></div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return state.login
}
function mapDispatchToProps(dispatch) {
    return {
        delfromcart: () => { dispatch() },
        inc: (ind,cart,login) => { dispatch(actinc(ind,cart,login)) },
        dec: (ind,cart,login) => { dispatch(actdec(ind,cart,login)) },
        remove:(pro,ind,cart,login)=>{dispatch(actremove(pro,ind,cart,login))}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart)