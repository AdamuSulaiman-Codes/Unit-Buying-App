import React from "react";
import classes from "./Payment.module.css";

const generateRandomNumber = () => {
  return Math.floor(Math.random() * 10000000000).toString().padStart(10, '0');
};

const RandomUnit = () => {
  const randomNumber = generateRandomNumber();

  return (
    <div className={classes.modalContent}>
      <p>Payment Successful!</p>
      <p>Your unit number: {randomNumber}</p>
      <button
        className={classes.closeButton}
        onClick={() => window.location.reload()} // Close modal and reload page
      >
        Close
      </button>
    </div>
  );
};

export default RandomUnit;
