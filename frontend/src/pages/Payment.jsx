

import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/PaymentPage.css';


const stripePromise = loadStripe('pk_test_51Q5SxnLAKWnNOXZfnKlSKMoV4c7sAyVr385hLMC7U78sc8cD11gLPdsHRL0slKCuXh0WLRdGgLom0EAkNTTXfARd00wZsZJJaW');
 // Replace with your Stripe publishable key

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    setLoading(true);
    try {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
      });

      if (error) {
        toast.error(`Payment failed: ${error.message}`, {
          position: 'top-center',
          autoClose: 3000,
          theme: 'colored',
        });
        setLoading(false);
        return;
      }

      // Simulate a successful payment for demonstration
      toast.success('Payment Successful !! Congratulations Your Tour is booked now..', {
        position: 'top-center',
        autoClose: 3000,
        theme: 'colored',
      });

      console.log('PaymentMethod:', paymentMethod);
      setLoading(false);
    } catch (err) {
      toast.error(`Payment failed: ${err.message}`, {
        position: 'top-center',
        autoClose: 3000,
        theme: 'colored',
      });
      setLoading(false);
    }
  };

  return (
    <div className="payment-page">
      <div className="payment-card">
        <h1 className="payment-title">Payment Details</h1>
        <p className="payment-description">Securely complete your transaction using Stripe</p>
        <form onSubmit={handleSubmit} className="payment-form">
          <div className="form-group">
            <label htmlFor="card-element">Card Details</label>
            <CardElement id="card-element" className="card-input" />
          </div>
          <button type="submit" className="submit-button" disabled={!stripe || loading}>
            {loading ? 'Processing...' : 'Pay Now'}
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

const PaymentPage = () => (
  <Elements stripe={stripePromise}>
    <PaymentForm />
  </Elements>
);

export default PaymentPage;
