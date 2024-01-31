import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

function UserDashBoard(props)
{
    const navi=useNavigate()
    console.log("dash",props);
    return (
       <div>
         <h1>Welcome:{props.login.gender==='male'?'Mr.':'Mrs.'}{props.login.firstname}</h1>
         <Outlet></Outlet>
       </div>
    )
}
const mapStateToProps=(state)=>{
    return state.login
}
function mapDispatchToProps(dispatch){
    return {
        inc:()=>{dispatch({})}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(UserDashBoard)