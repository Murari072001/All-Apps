import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

function UserDashBoard(props) {
    const navi = useNavigate()
    console.log("dash", props);
    return (
        <>
        {
            props.allproducts.length===0 &&
            <div className="text-center"><img src="https://i.pinimg.com/originals/c7/e1/b7/c7e1b7b5753737039e1bdbda578132b8.gif"/></div>
        }
            {props.allproducts.length > 0 && <div>
                <h1>Welcome:{props.login.gender === 'male' ? 'Mr.' : 'Mrs.'}{props.login.firstname}</h1>
                <Outlet></Outlet>
            </div>}
        </>
    )
}
const mapStateToProps = (state) => {
    return state.login
}
function mapDispatchToProps(dispatch) {
    return {
        inc: () => { dispatch({}) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserDashBoard)