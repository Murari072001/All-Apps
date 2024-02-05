import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";


function Header() {
    const navi = useNavigate()
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
                <div className="container-fluid">
                    <Link className="navbar-brand" to={`/`}>Home</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to={`/login`}>Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={`/register`}>Register</Link>
                            </li>
                            {<li className="nav-item">
                                <Link className="nav-link" to={`/register`}>Register</Link>
                            </li>}
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    More
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#contact">Contact Us</a></li>
                                    <li><a className="dropdown-item" href="#address">Address</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#follow">Follow Us</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* <div className="text-end sticky-top bg-light">
                <button className="btn " onClick={() => { navi(props.login.islogin?"/dashboard":"/login") }}>Home</button>
                <button className="btn ">Careers</button>
                <button className="btn ">About Us</button>
                <button className="btn ">Contact Us</button>
                {!props.login.islogin && <button className="btn " onClick={() => { navi('/login') }}>Login</button>}
                {!props.login.islogin && <button className="btn " onClick={() => { navi('/register') }}>Register</button>}
                {props.login.islogin && <button className="btn " onClick={() => { navi('/dashboard/profile') }}>Profile<i className="person-circle"></i></button>}
                {props.login.islogin && <button className="btn " onClick={() => { props.rem(navi) }}>Sign Out</button>}
                <button className="btn " onClick={() => { navi(props.login.islogin?"/dashboard/cart":"/login") }}>
                <span style={{fontSize:"30px"}} className="position-relative bi bi-cart3 m-0 p-0">
                    <span style={{fontSize:"10px"}} className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{props.login.cart.length}
                </span>
                </span>
                </button>

            </div> */}
        </>
    )
}

export default Header