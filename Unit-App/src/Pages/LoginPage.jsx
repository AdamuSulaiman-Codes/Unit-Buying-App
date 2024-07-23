import React from "react";
import { Link } from "react-router-dom";
import '../login.css';
import { Button } from "antd";
const Login = () => {
    return (
        <div className="form-container">
            <h2>Login</h2>
            <form className="form">
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" className="input-field" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" className="input-field" />
                </div>
                <Button type="submit" className="submit-btn">Log In</Button>
            </form>
            <p className="signup-link">Don't have an account? <Link to="/signup">Sign Up</Link></p>
        </div>
    );
}

export default Login;
