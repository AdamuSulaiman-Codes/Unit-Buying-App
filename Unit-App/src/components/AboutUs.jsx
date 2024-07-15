import abtPic from "./assets/abt-pic.jpg"
const AboutUs = () => {
    return ( 
        <>
            <h2>About <span id="abt-txt">Us</span></h2>
            <div className="about-us-container">
                <img src={abtPic} alt="About Us picture" />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius rem minus magni hic eaque nesciunt quis ullam velit excepturi tenetur.</p>
            </div>
        </>
     );
}
 
export default AboutUs;