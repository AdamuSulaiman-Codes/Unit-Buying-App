import logo from "./assets/logo.png";
import { Link } from "react-router-dom";

const NavBar = () => {
    return ( 
        <>
        <div className="nav-bar">
            <img src={logo} alt="FLARES LOGO" />
            <div className="auth">
                <button className="signin-btn type1">
                    <span className="btn-txt">Sign-In</span>
                </button>
                <button className="login-btn btn"><Link to= "/login">logIn</Link></button>
            </div>
        </div>
        </>
     );
}

export default NavBar;
