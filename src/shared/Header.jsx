import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { searchproducts } from "../features/loginform/loginSlice";


function Header() {
    const navi = useNavigate()
    const login = useSelector(state => state.login);
    const dispatch = useDispatch()
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light sticky-top">
                <div className="container-fluid">
                    {login.isLogin && <Link className="navbar-brand" to={`/dashboard`}><img className="logo" src="https://edupoly.in/common/assets/favicon.ico" alt="" /></Link>}
                    {!login.isLogin && <Link className="navbar-brand" to={`/`}><img className="logo" src="https://edupoly.in/common/assets/favicon.ico" alt="" /></Link>}

                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <div className="form-floating search">
                            <input type="search" className="form-control bg-transparent text-light" placeholder="search" id="search" onKeyUp={(e) => { dispatch(searchproducts(e.target.value)) }} />
                            <label htmlFor="search">Search</label>
                        </div>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            {login.isLogin && <li className="nav-item"><Link className="nav-link" to={`/dashboard`}>Home</Link></li>}
                            {!login.isLogin && <li className="nav-item"><Link className="nav-link" to={`/`}>Home</Link></li>}
                            <li className="nav-item"><a className="nav-link" href="#contact">Contact Us</a></li>
                            <li className="nav-item"><a className="nav-link" href="#address">Reach Us</a></li>
                            <li className="nav-item"><a className="nav-link" href="#follow">Follow Us</a></li>
                            {!login.isLogin && <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to={`/login`}>Login</Link>
                            </li>}
                            {!login.isLogin && <li className="nav-item">
                                <Link className="nav-link" to={`/register`}>Register</Link>
                            </li>}
                            {login.isLogin && <li className="nav-item">
                                <a className="nav-link" href={`/login`}>Sign Out</a>
                            </li>}
                            {login.isLogin && <li className="nav-item">
                                <Link className="nav-link" to={`/dashboard/profile`}>Profile</Link>
                            </li>}
                        </ul>
                    </div>
                    <button className="btn cart-btn" onClick={() => { navi(login.isLogin ? "/dashboard/cart" : "/login") }}>
                        <span style={{ fontSize: "30px" }} className="position-relative bi bi-cart3 m-0 p-0">
                            <span style={{ fontSize: "10px" }} className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{login.loginUser?.cart?.length}
                            </span>
                        </span>
                    </button>
                </div>
            </nav>
        </>
    )
}

export default Header