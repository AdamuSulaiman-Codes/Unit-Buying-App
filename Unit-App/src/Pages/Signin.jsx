import React from "react";
import { Link } from "react-router-dom";
import '../login.css';

const SignIn = () => {
    return (
        <div className="form-container">
            <h2>Sign In</h2>
            <form className="form">
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" className="input-field" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" className="input-field" />
                </div>
                <button type="submit" className="submit-btn">Sign In</button>
            </form>
            <p className="signup-link">Don't have an account? <Link to="/signup">Sign Up</Link></p>
        </div>
    );
}

export default SignIn;
