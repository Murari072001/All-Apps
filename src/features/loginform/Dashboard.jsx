import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

function UserDashBoard() {
    const navi = useNavigate()
    const login =useSelector(state=>state.login);
        if(!login.isLogin)
        {
            navi('/login')
        }
    return (
        <>
            {<div>
                <h1 className="ms-5 mt-2">Welcome:{login.loginUser?.gender === 'male' ? 'Mr.' : 'Mrs.'}{login.loginUser?.firstname}</h1>
                <Outlet></Outlet>
            </div>}
        </>
    )
}

export default UserDashBoard