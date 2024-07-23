import React from "react";
import { Link } from "react-router-dom";
import logo from "./assets/logo.png";
import { Button } from "antd";
const NavBar = () => {
    return (
        <div className="nav-bar">
            <img src={logo} alt="FLARES LOGO" />
            <div className="auth">
                {/* Use Link directly without wrapping with <button> */}
                <Link to="/signin" className="link-btn">Sign up</Link>
                <Link to="/login" className="link-btn">Log in</Link>
            </div>
        </div>
    );
}

export default NavBar;
