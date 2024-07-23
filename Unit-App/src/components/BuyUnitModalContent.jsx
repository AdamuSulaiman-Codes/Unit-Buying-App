import React, { useState } from "react";
import { PaystackButton } from "react-paystack";
import classes from "./Payment.module.css";
import Modal from "./assets/Modal";
import RandomUnit from "./RandomUnit";

const BuyUnitModalContent = () => {
  const publicKey = "pk_test_d47fbfcc09d34412d21e1df0ffd1d04a00dff789";
  const [email, setEmail] = useState("");
  const [meterNumber, setMeterNumber] = useState(0);
  const [amount, setAmount] = useState(0);
  const [isValid, setIsValid] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const componentProps = {
    email,
    amount: amount * 100, // Paystack accepts amount in kobo
    metadata: {
      email,
      meterNumber,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () => {
      alert("Thanks for doing business with us! Come back soon!!");
      setIsValid(true);
      toggleModal();
    },
    onClose: () => alert("Wait! Don't leave :("),
  };

  return (
    <>
      <div className={classes.form}>
        <p className={classes.title}>Buy Unit</p>
        <p className={classes.message}>Input your details below.</p>
        <label>
          <span>Email</span>
          <input
            className={classes.input}
            type="email"
            placeholder=""
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <span>Meter number</span>
          <input
            className={classes.input}
            type="number"
            placeholder=""
            required
            onChange={(e) => setMeterNumber(e.target.value)}
          />
        </label>
        <label>
          <span>Amount</span>
          <input
            className={classes.input}
            type="number"
            placeholder=""
            required
            onChange={(e) => setAmount(e.target.value)}
          />
        </label>
        <PaystackButton className={classes.paystackButton} {...componentProps}/>
      </div>
      {isModalOpen && (
        <Modal toggleModal={toggleModal}>
          <RandomUnit />
        </Modal>
      )}
    </>
  );
};

export default BuyUnitModalContent;
