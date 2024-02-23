
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { loadStripe } from '@stripe/stripe-js';
import {
  PaymentElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';


const stripePromise = loadStripe('pk_test_51OmsbRA935599EJitdqqCDJJMDpmEtsdZ2gxfYzsrPEw3lUfLkiqiSwJy1AJWLfUB0AQYlEPcSkTbZyIC2j8VbcK00GHNgRxXL');

const options = {
  mode: 'payment',
  amount: 1099,
  currency: 'bdt',
  // Fully customizable with appearance API.
  appearance: {
    /*...*/
  },
};

export default function ClientPayment() {
  return (
    <div className="h-[100vh] bg-white">
      <div className="p-12">
        <h1>Payment Gateway Integration Learning</h1>
        <Elements stripe={stripePromise} options={options}>
          <CheckoutForm />
        </Elements>
      </div>
    </div>
  )
}


const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (elements == null) {
      return;
    }

    // Trigger form validation and wallet collection
    const { error: submitError } = await elements.submit();
    if (submitError) {
      // Show error to your customer
      setErrorMessage(submitError.message);
      return;
    }

    // Create the PaymentIntent and obtain clientSecret from your server endpoint
    const res = await fetch('/create-intent', {
      method: 'POST',
    });

    const { client_secret: clientSecret } = await res.json();

    const { error } = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      clientSecret,
      confirmParams: {
        return_url: 'https://example.com/order/123/complete',
      },
    });

    if (error) {
      // This point will only be reached if there is an immediate error when
      // confirming the payment. Show error to your customer (for example, payment
      // details incomplete)
      setErrorMessage(error.message);
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <button type="submit" disabled={!stripe || !elements}>
        Pay
      </button>
      {/* Show error message to your customers */}
      {errorMessage && <div>{errorMessage}</div>}
    </form>
  );
};


// import { useState } from "react";
// import { addDoc, collection } from "firebase/firestore";
// import { useForm } from "react-hook-form";
// import { db } from "../../config/firebase.config";
// import { Spinner } from "flowbite-react";
// import BlockQuoteVision from "../../shared/BlockQuoteVision";
// import PaymentCard from "./PaymentCard";
// // import { loadStripe } from "@stripe/stripe-js";
// // const stripePromise = loadStripe(
// //   "pk_test_51Ie1JhBHVweerPiKD5ZiauHVxaum4XV1yLjMsUHfkMPf2T7UKNlyHOJ0u0JDpztqmYSfu9R9nRsTA8gydkmksxSr00UdXEF7bv"
// // );

// import { Elements } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';
// import CheckoutForm from "./CheckoutForm";

// // Make sure to call `loadStripe` outside of a component’s render to avoid
// // recreating the `Stripe` object on every render.

// export default function ClientPayment() {

//   const stripePromise = loadStripe('pk_test_51OmsbRA935599EJitdqqCDJJMDpmEtsdZ2gxfYzsrPEw3lUfLkiqiSwJy1AJWLfUB0AQYlEPcSkTbZyIC2j8VbcK00GHNgRxXL');
//   const options = {
//     // passing the client secret obtained from the server
//     clientSecret: 'sk_test_51OmsbRA935599EJi5uME9m9Ftykaeggppkjjn8q0kPqzonxdWgE8YIaozRv9MyMMzE1rF4feTzuZGRLbHWrH8qYT00EwDEi2ED',
//   };

//   // const renderPromise = async () => {
//   //   console.log('stripe promise : ',stripePromise)
//   //   return <Elements stripe={stripePromise} options={options}>
//   //     <CheckoutForm />
//   //   </Elements>
//   // }
//   // const { register, handleSubmit, reset } = useForm();
//   // const [loading, setLoading] = useState(false);
//   // const [showPaymentFrom, setShowPaymentFrom] = useState(false);

//   // const promoCode = sessionStorage.getItem("validUser").slice(0, 8);
//   // const onSubmitClient = async (data) => {
//   //   console.log(data);
//   //   setLoading(true);
//   //   try {
//   //     const docRef = await addDoc(collection(db, "payments"), {
//   //       ...data,
//   //       paymentStatus: true,
//   //       createAt: new Date().toLocaleDateString(),
//   //     });
//   //     console.log("Document written with ID: ", docRef);
//   //     reset();
//   //     setLoading(false);
//   //   } catch (e) {
//   //     console.error("Error adding document: ", e);
//   //     setLoading(false);
//   //   }
//   // };

//   // const handlePaymentShow = () => {
//   //   setShowPaymentFrom(true);
//   //   // window.location.href =
//   // };
//   return (
//     <div className="h-[100vh] bg-white">
//       <div className="p-10">
//         <h1>Payment Gateway Integration Learning</h1>
//         {/* {renderPromise()} */}
//         <Elements stripe={stripePromise} options={options}>
//           <CheckoutForm />
//         </Elements>
//       </div>


//       {/* complains form */}
//       {/* <section className="px-6 dark:bg-white dark:text-black h-4/6 flex items-center justify-center">
//         {loading ? (
//           <Spinner aria-label="Large spinner example" size="lg" />
//         ) : (
//           <div>
//             <BlockQuoteVision
//               content={
//                 "Billing and Payment Center: Seamless Transactions with NetVision"
//               }
//             />
//             <button
//               onClick={() => handlePaymentShow()}
//               className="border bg-green-800 text-white p-4 rounded-3xl"
//             >
//               Payment show
//             </button>
//             <div>{showPaymentFrom && <PaymentCard />}</div>
//           </div>
//         )}
//       </section> */}
//       {/* 
//       <section className="px-2">
//         <form
//           onSubmit={handleSubmit(onSubmitClient)}
//           className="container flex flex-col mx-auto space-y-12 mt-10"
//         >
//           <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-white">
//             <div className="space-y-2 col-span-full lg:col-span-1">
//               <p className="font-medium">Problem Specification</p>
//               <p className="text-xs">
//                 Net vision community really appreciate your feedback and inform
//                 your situation, Please do not feel hesitations to tell your
//                 problem you are facing right now. Soon our community person will
//                 contact with you. Thank you
//               </p>
//             </div>
//             <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
//               <div className="col-span-full sm:col-span-3">
//                 <label className="text-sm">Email</label>
//                 <input
//                   defaultValue={sessionStorage.getItem("email") || ""}
//                   {...register("email", { required: true })}
//                   id="email"
//                   type="email"
//                   placeholder="Email"
//                   className="w-full border-b-2 border-black p-2"
//                 />
//               </div>
//               <div className="col-span-full">
//                 <label className="text-sm">Card Number</label>
//                 <input
//                   {...register("cardNumber", { required: true })}
//                   id="address"
//                   type="number"
//                   placeholder="0004 0005 0000 0006"
//                   className="w-full border-b-2 border-black p-2"
//                 />
//               </div>
//               <div className="col-span-full sm:col-span-2">
//                 <label className="text-sm">Payment</label>
//                 <input
//                   {...register("Payment", { required: false })}
//                   id="payment"
//                   type="number"
//                   placeholder="500 tk"
//                   className="w-full border-b-2 border-black p-2"
//                 />
//               </div>
//               <div className="col-span-full sm:col-span-2">
//                 <label className="text-sm">Date</label>
//                 <input
//                   {...register("date", { required: false })}
//                   id="date"
//                   type="date"
//                   className="w-full border-b-2 border-black p-2"
//                 />
//               </div>
//               <div className="col-span-full sm:col-span-2">
//                 <button
//                   className="login-btn bg-indigo-600 rounded w-100 p-2 mt-6"
//                   type="submit"
//                 >
//                   Submit
//                 </button>
//               </div>
//             </div>
//           </fieldset>
//         </form>
//       </section> */}
//     </div>
//   );
// }
// {
//   /* <form
//               onSubmit={handleSubmit(onSubmitClient)}
//               className="container flex flex-col mx-auto space-y-12 mt-10"
//             >
//               <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-white">
//                 <div className="space-y-2 col-span-full lg:col-span-1">
//                   <p className="font-medium">Problem Specification</p>
//                   <p className="text-xs">
//                     Net vision community really appreciate your feedback and
//                     inform your situation, Please do not feel hesitations to
//                     tell your problem you are facing right now. Soon our
//                     community person will contact with you. Thank you
//                   </p>
//                 </div>
//                 <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
//                   <div className="col-span-full sm:col-span-3">
//                     <label className="text-sm">Email</label>
//                     <input
//                       defaultValue={sessionStorage.getItem("email") || ""}
//                       {...register("email", { required: true })}
//                       id="email"
//                       type="email"
//                       placeholder="Email"
//                       className="w-full border-b-2 border-black p-2"
//                     />
//                   </div>
//                   <div className="col-span-full">
//                     <label className="text-sm">Card Number</label>
//                     <input
//                       {...register("cardNumber", { required: true })}
//                       id="address"
//                       type="number"
//                       placeholder="0004 0005 0000 0006"
//                       className="w-full border-b-2 border-black p-2"
//                     />
//                   </div>
//                   <div className="col-span-full sm:col-span-2">
//                     <label className="text-sm">Payment</label>
//                     <input
//                       {...register("Payment", { required: false })}
//                       id="payment"
//                       type="number"
//                       placeholder="500 tk"
//                       className="w-full border-b-2 border-black p-2"
//                     />
//                   </div>
//                   {/* <div className="col-span-full sm:col-span-2">
//                   <label className="text-sm">Date</label>
//                   <input
//                     {...register("date", { required: false })}
//                     id="date"
//                     type="date"
//                     className="w-full border-b-2 border-black p-2"
//                   />
//                 </div>
//                       <div className="col-span-full sm:col-span-2">
//                         <button
//                           className="login-btn bg-indigo-600 rounded w-100 p-2 mt-6"
//                           type="submit"
//                         >
//                           Submit
//                         </button>
//                       </div>
//                     </div>
//                   </fieldset>
//                 </form> */
// }
