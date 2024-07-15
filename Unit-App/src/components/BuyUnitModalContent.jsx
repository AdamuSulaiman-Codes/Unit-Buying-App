const BuyUnitModalContent = () => {
    return ( 
        <form className="form">
            <p className="title">Buy Unit</p>
            <p className="message">Input your details below.</p>
                <label>
                    <input className="input" type="email" placeholder="" required />
                    <span>Email</span>
                </label>

                <label>
                    <input className="input" type="number" placeholder="" required />
                    <span>Meter number</span>
                </label>
                <label>
                    <input className="input" type="number" placeholder="" required />
                    <span>Amount</span>
                </label>
             <button className="submit">Submit</button>
        </form>
     );
}
 
export default BuyUnitModalContent;