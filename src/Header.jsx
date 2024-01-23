import React from "react";
import { Link, Outlet } from 'react-router-dom';

function Header() {
    return (
        <>
            <div className="App bg-light sticky-top">
                <Link to='/home'>Home</Link> &nbsp;&nbsp;
                <Link to='/countries'>Countries</Link> &nbsp;&nbsp;
                <Link to='/products'>products</Link> &nbsp;&nbsp;
                <Link to='/contact'>Contact Us</Link>&nbsp;&nbsp;
                <Link to='/about'>About Us</Link>
            </div>
        </>
    )
}

export default Header