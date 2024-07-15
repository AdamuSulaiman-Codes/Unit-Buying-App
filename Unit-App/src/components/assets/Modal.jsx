import { useEffect } from "react";
const Modal = ({ toggleModal, children }) => {
    useEffect(() => {
        // Add the class to disable scrolling when the modal is open
        document.body.classList.add('no-scroll');
        
        // Clean up function to remove the class when the modal is closed
        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, []);
    return (  
        <>
            <div className="modal">
                <div className="overlay" onClick={toggleModal}></div>
                <div className="modal-content">
                    {children}
                    <button onClick={toggleModal} className="close-modal">Close</button>
                </div>
            </div>
        </>
    );
}
 
export default Modal;
