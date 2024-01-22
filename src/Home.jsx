import React from "react";
import { Link, Outlet } from 'react-router-dom';
import Header from "./Header";

function Home() {
    return (
        <>
            <Header></Header>
            <h1>Welcome To Home</h1>
        </>
    )
}

export default Home