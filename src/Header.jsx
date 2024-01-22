import React from "react";
import { Link, Outlet } from 'react-router-dom';

function Header() {
    return (
        <>
            <div className="App">
                <Link to='/home'>Home</Link> &nbsp;&nbsp;
                <Link to='/products'>products</Link> &nbsp;&nbsp;
                <Link to='/contact'>Contact Us</Link>&nbsp;&nbsp;
                <Link to='/about'>About Us</Link>
            </div>
        </>
    )
}

export default Header