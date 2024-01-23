import React from "react";
import Header from "./Header";
import { useNavigate,Outlet } from "react-router-dom";

function Products() {
    const Navigate=useNavigate()
    const hardware=()=>{
        Navigate('hardware')
    }
    const software=()=>{
        Navigate('software')
    }
    return (
        <>
            <Header></Header>
            <br />
            <h5 onClick={hardware}>Hardware</h5>&nbsp;&nbsp;
            <h5 onClick={software}>Software</h5>
            <Outlet></Outlet>
        </>
    )
}

export default Products