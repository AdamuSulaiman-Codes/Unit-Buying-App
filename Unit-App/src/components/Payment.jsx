import React, { useState } from "react";
import { PaystackButton } from "react-paystack";
import classes from "./Payment.module.css";

const Payment = () => {
  const publicKey = "pk_test_d47fbfcc09d34412d21e1df0ffd1d04a00dff789";
  const [amount, setAmount] = useState(0);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () =>
      alert("Thanks for doing business with us! Come back soon!!"),
    onClose: () => alert("Wait! Don't leave :("),
  };

  return (
    <div className={classes.App}>
      <div className={classes.container}>
        <div className={classes.item}>
          <img className={classes.itemImage} />
          <div className={classes.itemDetails}>
            <p>Dancing Shoes</p>
            <p>{amount}</p>
          </div>
        </div>
        <div className={classes.checkout}>
          <form className={classes.checkoutForm}>
            <div className={classes.checkoutField}>
              <label>Name</label>
              <input
                type="text"
                id="name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className={classes.checkoutField}>
              <label>Email</label>
              <input
                type="text"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={classes.checkoutField}>
              <label>Phone</label>
              <input
                type="text"
                id="phone"
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className={classes.checkoutField}>
              <label>Phone</label>
              <input
                type="number"
                id="amount"
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
          </form>
          <PaystackButton className={classes.paystackButton} {...componentProps} />
        </div>
      </div>
    </div>
  );
};

export default Payment;
