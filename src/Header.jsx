import React from "react";
import { connect } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { actsignout } from "./store/actions/loginActions";


function Header(props) {
    const navi = useNavigate()
    return (
        <>
            <div className="text-end sticky-top bg-light">
                <button className="btn " onClick={() => { navi('/dashboard') }}>Home</button>
                <button className="btn ">Careers</button>
                <button className="btn ">About Us</button>
                <button className="btn ">Contact Us</button>
                {!props.login.islogin && <button className="btn " onClick={() => { navi('/login') }}>Login</button>}
                {!props.login.islogin && <button className="btn " onClick={() => { navi('/register') }}>Register</button>}
                {props.login.islogin && <button className="btn " onClick={() => { navi('/dashboard/profile') }}>Profile<i className="person-circle"></i></button>}
                {props.login.islogin && <button className="btn " onClick={() => { props.rem(navi) }}>Sign Out</button>}
                <button className="btn " onClick={() => { navi("/dashboard/cart") }}>
                <span style={{fontSize:"30px"}} className="position-relative bi bi-cart3 m-0 p-0">
                    <span style={{fontSize:"10px"}} className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{props.login.cart.length}
                </span>
                </span>
                </button>

            </div>
            <Outlet></Outlet>
        </>
    )
}
function mapStateToProps(state) {
    return state
}
function mapDispatchToProps(dispatch) {
    return {
        rem: (navi) => { dispatch(actsignout(navi)) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)