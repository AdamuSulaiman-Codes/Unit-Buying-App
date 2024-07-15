import HeroIcon from "./HeroIcon";

const Hero = ({ toggleModal }) => {
    return ( 
        <>
            <div className="hero">
                <div className="hero-h1-btn">
                    <h1 id="hero-h1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, tempora.</h1>
                    <button className="buy-units-btn" onClick={toggleModal}>Buy Unit</button>
                </div>
                <HeroIcon/>
                <div className="space"></div>
            </div>
        </>
     );
}
 
export default Hero;
