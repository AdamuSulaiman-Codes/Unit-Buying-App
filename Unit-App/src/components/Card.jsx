import React from 'react';
import cardDetails from "./assets/data.jsx";

const Card = () => {
    return ( 
        <>
            <div className="cards">
                {cardDetails.map((cardDetail) => (
                    <div className="card" key={cardDetail.id}>
                        <p>{cardDetail.title}</p>
                        <cardDetail.image /> {/* Render the component */}
                    </div>
                ))}
            </div>
        </>
    );
}

export default Card;
