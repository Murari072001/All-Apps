import React from "react";
import { connect } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { actsignout } from "./store/loginActions";


function Header(props) {
    console.log('head',props);
    const navi = useNavigate()
    return (
        <>
            <div className="text-end sticky-top bg-light">
                <button className="btn ">Home</button>
                <button className="btn ">Careers</button>
                <button className="btn ">About Us</button>
                <button className="btn ">Contact Us</button>
                {!props.login.islogin&&<button className="btn " onClick={() => { navi('/') }}>Login</button>}
                {!props.login.islogin&&<button className="btn " onClick={() => { navi('/register') }}>Register</button>}
                {props.login.islogin&&<button className="btn " onClick={() => { props.rem(navi) }}>Sign Out</button>}
            </div>
            <Outlet></Outlet>
        </>
    )
}
function mapStateToProps(state)
{
    return state
}
function mapDispatchToProps(dispatch)
{
    return {
        rem:(navi)=>{dispatch(actsignout(navi))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header)