

import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/PaymentPage.css'

const stripePromise = loadStripe('pk_test_51Q5SxnLAKWnNOXZfnKlSKMoV4c7sAyVr385hLMC7U78sc8cD11gLPdsHRL0slKCuXh0WLRdGgLom0EAkNTTXfARd00wZsZJJaW'); // Replace with your Stripe publishable key

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handlePayment = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

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
        return;
      }

      toast.success('Payment Successful !! Your Tour Is Booked Now..', {
        position: 'top-center',
        autoClose: 3000,
        theme: 'colored',
      });

      console.log('Payment successful:', paymentMethod);
    } catch (error) {
      toast.error(`Error: ${error.message}`, {
        position: 'top-center',
        autoClose: 3000,
        theme: 'colored',
      });
    }
  };

  return (
    <form onSubmit={handlePayment} className="payment-form">
      <h2>Or pay with card</h2>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="example@example.com"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="card-element">Card information</label>
        <CardElement id="card-element" className="card-input" />
      </div>

      <div className="form-group">
        <label htmlFor="cardholder-name">Cardholder name</label>
        <input
          type="text"
          id="cardholder-name"
          name="cardholder-name"
          placeholder="Full name on card"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="country">Country or region</label>
        <select id="country" name="country" required>
          <option value="">Select your country</option>
          <option value="IN">India</option>
          <option value="US">United States</option>
          <option value="GB">United Kingdom</option>
          {/* Add more countries as needed */}
        </select>
      </div>

      <button type="submit" className="submit-button">
        Proceed to Payment
      </button>

      <ToastContainer />
    </form>
  );
};

const PaymentPage = () => (
  <Elements stripe={stripePromise}>
    <div className="payment-page">
      <h1>Payment Gateway</h1>
      <p>Securely complete your payment using Stripe</p>
      <PaymentForm />
    </div>
  </Elements>
);

export default PaymentPage;
