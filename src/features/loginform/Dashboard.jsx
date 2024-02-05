import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

function UserDashBoard() {
    const navi = useNavigate()
    // console.log("dash", props);
    return (
        <>
        {
            
            <div className="text-center"><img src="https://i.pinimg.com/originals/c7/e1/b7/c7e1b7b5753737039e1bdbda578132b8.gif"/></div>
        }
            {<div>
                {/* <h1>Welcome:{props.login.gender === 'male' ? 'Mr.' : 'Mrs.'}{props.login.firstname}</h1> */}
                <Outlet></Outlet>
            </div>}
        </>
    )
}

export default UserDashBoard