import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

function Header() {
    const navi = useNavigate()
    return (
        <>
            <div className="text-end sticky-top bg-light">
                <button className="btn " onClick={() => { navi('/login') }}>Login</button>
                <button className="btn " onClick={() => { navi('/register') }}>Register</button>
            </div>
            <Outlet></Outlet>
        </>
    )
}

export default Header