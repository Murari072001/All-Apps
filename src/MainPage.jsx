import React from "react";
import { Link } from "react-router-dom";

function MainPage(store)
{
    return (
        <div>
            <Link to='/new-user-registration'>New User</Link> &nbsp;&nbsp;&nbsp;
            <Link to='/login-existing'>Login</Link>
        </div>
    )
}

export default MainPage