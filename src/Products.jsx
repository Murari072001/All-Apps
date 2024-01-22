import React from "react";
import { Outlet, Link } from "react-router-dom";
import Header from "./Header";

function Products() {
    return (
        <>
            <Header></Header>
            <br />
            <Link to='hardware'>Hardware</Link>&nbsp;&nbsp;
            <Link to='software'>Software</Link>
            <Outlet></Outlet>
        </>
    )
}

export default Products