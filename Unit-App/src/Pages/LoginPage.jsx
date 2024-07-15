import React from 'react';
import '../login.css';

const LoginPage = () => {
    return (
        <div className="log-con">
            <img src="" alt="" />
            <div className="login-form">
                <div className="container">
                    <div className="title">
                        Welcome back to <span className="highlight">App</span>
                    </div>
                    <div className="subtitle">Log in to your account</div>
                    <form className="form">
                        <div className="form-group">
                            <label htmlFor="email" className="label">Email</label>
                            <input type="text" id="email" className="input" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password" className="label">Password</label>
                            <input type="password" id="password" className="input" />
                        </div>
                        <div>
                            <a className="forgot-password" href="#">Forgot your password?</a>
                        </div>
                        <button type="submit" className="submit-btn">Submit</button>
                    </form>
                    <div className="signup-prompt">
                        Don’t have an account yet? <a className="signup-link" href="#">Sign up for free!</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
