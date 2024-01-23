import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
    const Navigate=useNavigate()
    const contact=()=>
    {
      Navigate("/contact")  
    }
    const home=()=>{
        Navigate('/home')
    }
    const countries=()=>{
        Navigate('/countries')
    }
    const products=()=>{
        Navigate('/products')
    }
    const about=()=>{
        Navigate('/about')
    }
    return (
        <>
           
            <div className="App bg-light sticky-top d-flex">
                <h5 onClick={home}>Home</h5> &nbsp;&nbsp;
                <h5 onClick={countries}>Countries</h5> &nbsp;&nbsp;
                <h5 onClick={products}>products</h5> &nbsp;&nbsp;
                <h5 onClick={contact}>Contact Us</h5>&nbsp;&nbsp;
                <h5 onClick={about}>About Us</h5>
            </div>
        </>
    )
}

export default Header