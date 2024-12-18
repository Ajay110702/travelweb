
// import React, { useState } from 'react';
// import '../styles/PaymentPage.css';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const PaymentPage = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     cardNumber: '',
//     expiryDate: '',
//     cvv: '',
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handlePayment = (e) => {
//     e.preventDefault();

//     const { name, cardNumber, expiryDate, cvv } = formData;
//     if (!name || !cardNumber || !expiryDate || !cvv) {
//       toast.error('Please fill out all fields with valid information.', {
//         position: "top-center",
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "colored",
//       });
//       return;
//     }

//     if (cardNumber.length !== 16 || isNaN(cardNumber)) {
//       toast.error('Card number must be 16 digits.', {
//         position: "top-center",
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "colored",
//       });
//       return;
//     }

//     if (cvv.length !== 3 || isNaN(cvv)) {
//       toast.error('CVV must be 3 digits.', {
//         position: "top-center",
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "colored",
//       });
//       return;
//     }

//     toast.success('Payment Successful!', {
//       position: "top-center",
//       autoClose: 3000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: "colored",
//     });
//   };

//   return (
//     <div className="payment-page">
//       <div className="payment-card">
//         <h1 className="payment-title">Payment Details</h1>
//         <p className="payment-description">Securely complete your transaction</p>
//         <form className="payment-form" onSubmit={handlePayment}>
//           <div className="form-group">
//             <label htmlFor="name">Name on Card</label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               placeholder="John Doe"
//               value={formData.name}
//               onChange={handleInputChange}
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="cardNumber">Card Number</label>
//             <input
//               type="text"
//               id="cardNumber"
//               name="cardNumber"
//               placeholder="1234 5678 9012 3456"
//               maxLength="16"
//               value={formData.cardNumber}
//               onChange={handleInputChange}
//               required
//             />
//           </div>

//           <div className="form-row">
//             <div className="form-group half-width">
//               <label htmlFor="expiryDate">Expiration Date</label>
//               <input
//                 type="text"
//                 id="expiryDate"
//                 name="expiryDate"
//                 placeholder="MM/YY"
//                 value={formData.expiryDate}
//                 onChange={handleInputChange}
//                 required
//               />
//             </div>

//             <div className="form-group half-width">
//               <label htmlFor="cvv">CVV</label>
//               <input
//                 type="password"
//                 id="cvv"
//                 name="cvv"
//                 placeholder="123"
//                 maxLength="3"
//                 value={formData.cvv}
//                 onChange={handleInputChange}
//                 required
//               />
//             </div>
//           </div>

//           <button type="submit" className="submit-button">Pay Now</button>
//         </form>
//       </div>
//       <ToastContainer />
//     </div>
//   );
// };

// export default PaymentPage;
