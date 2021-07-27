// import React from 'react';


// import { useMemo } from "react";
// import {
//   useStripe,
//   useElements,
//   CardNumberElement,
//   CardCvcElement,
//   CardExpiryElement
// } from "@stripe/react-stripe-js";


// const stripe = useStripe();
//     const elements = useElements();

//     const errorDialogueCleared = () => {
//         setAPIResult(null);
//     }

//     const stripePromise = loadStripe('my_test_key');

//     const baseStripeElementOptions = {
//         style: {
//             base: {
//                 fontFamily: 'Oxanium',
//                 fontSize: '16px',
//                     color: '#000000',
//                     '::placeholder': {
//                     color: '#000000',
//                 },
//             },
//             invalid: {
//                 color: '#9e2146',
//             },
//         }
//     }

//     const handleSubmit = async (event) => {
//         // Block native form submission.
//         event.preventDefault();

//         if (!stripe || !elements) {
//             // Stripe.js has not loaded yet. Make sure to disable
//             // form submission until Stripe.js has loaded.
//             return;
//         }

//         // Get a reference to a mounted CardElement. Elements knows how
//         // to find your CardElement because there can only ever be one of
//         // each type of element.
//         const cardElement = elements.getElement(CardElement);

//         // Use your card Element with other Stripe.js APIs
//         const {error, paymentMethod} = await stripe.createPaymentMethod({
//             type: 'card',
//             card: cardElement,
//         });

//         if (error) {
//             console.log('[error]', error);
//         } else {
//             console.log('[PaymentMethod]', paymentMethod);
//         }
//     };



// const AddStripe = () => {

//     const stripe = useStripe();
//     const elements = useElements();
//     const options = useOptions();
  
//     const handleSubmit = async event => {
//       event.preventDefault();
  
//       if (!stripe || !elements) {
//         // Stripe.js has not loaded yet. Make sure to disable
//         // form submission until Stripe.js has loaded.
//         return;
//       }
  
//       const payload = await stripe.createPaymentMethod({
//         type: "card",
//         card: elements.getElement(CardNumberElement)
//       });
//       console.log("[PaymentMethod]", payload);
//     };
  


//     return (



       
//         <div className='container-fluid'>

//             <div className="mainContentNoSidebar">

                // <TopNavBar displayTimePeriodButton={false} title='Update Account Information' />

                // <BreadcrumbNav menu_items={breadcrumbNav} /> 

//              <div className='contentWrapper'>

//                     <div className='container'>
//                         <h1>Update Account Information</h1>
//                         <form onSubmit={handleSubmit} style={{width: '50%', marginLeft: 'auto', marginRight: 'auto'}}>
//                             <Elements stripe={stripePromise}>
//                                 <CardElement options={baseStripeElementOptions} />
//                             </Elements>

//                             <button className='btn btn-primary'>Submit Payment Details</button>
//                         </form>
//                     </div>



//                 </div>
//             </div>

//             <ErrorDialogue dialogClosed={errorDialogueCleared} api_result={currentError} />
//         </div> 

//     );
// };

// export default AddStripe;