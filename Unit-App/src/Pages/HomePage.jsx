import { useState } from "react";
import Card from "../components/Card";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import Services from "../components/Services";
import Modal from "../components/assets/Modal";
import AboutUs from "../components/AboutUs";
import BuyUnitModalContent from "../components/BuyUnitModalContent";
import Payment from "../components/Payment";

const HomePage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return ( 
        <>
            
            <NavBar />
            <Hero toggleModal={toggleModal} />
            {isModalOpen && (
                <Modal toggleModal={toggleModal}>
                    <BuyUnitModalContent />
                </Modal>
            )}
            <Services />
            <Card />
            <AboutUs />
            
        </>
    );
};
 
export default HomePage;
