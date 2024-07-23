import HeroIcon from "./HeroIcon";
import { Button } from "antd";

const Hero = ({ toggleModal }) => {
    return ( 
        <>
            <div className="hero">
                <div className="hero-h1-btn">
                    <h1 id="hero-h1">Easily Manage Your Electricity Units and Payments</h1>
                    <button className="buy-units-btn" onClick={toggleModal}>Buy Unit</button>
                </div>
                <HeroIcon/>
                <div className="space"></div>
            </div>
        </>
     );
}
 
export default Hero;
