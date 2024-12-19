import React, { useState } from 'react';

    function Payment() {
      const [paymentDetails, setPaymentDetails] = useState({
        cardNumber: '',
        expiryDate: '',
        cvv: ''
      });

      const handleChange = (e) => {
        const { name, value } = e.target;
        setPaymentDetails(prevDetails => ({
          ...prevDetails,
          [name]: value
        }));
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        alert('Payment processed successfully!');
      };

      return (
        <form onSubmit={handleSubmit}>
          <h1>Payment</h1>
          <input type="text" name="cardNumber" placeholder="Card Number" value={paymentDetails.cardNumber} onChange={handleChange} required />
          <input type="text" name="expiryDate" placeholder="Expiry Date" value={paymentDetails.expiryDate} onChange={handleChange} required />
          <input type="text" name="cvv" placeholder="CVV" value={paymentDetails.cvv} onChange={handleChange} required />
          <button type="submit">Pay Now</button>
        </form>
      );
    }

    export default Payment;
