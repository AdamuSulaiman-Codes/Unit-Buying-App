import abtPic from "./assets/abt-pic.jpg"
const AboutUs = () => {
    return ( 
        <>
            <h2>About <span id="abt-txt">Us</span></h2>
            <div className="about-us-container">
                <img src={abtPic} alt="About Us picture" />
                <p>We are dedicated to providing a seamless and user-friendly experience for managing your electricity units and payments. Our platform aims to simplify the process and ensure transparency and ease for all users. Learn more about our mission and how we can assist you in managing your energy needs effectively.</p>
            </div>
        </>
     );
}
 
export default AboutUs;