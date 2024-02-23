import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { loadStripe } from '@stripe/stripe-js';
import {
  PaymentElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import { useForm } from 'react-hook-form';

const CheckoutForm = ({ }) => {
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
      <button className='btn bg-blue-400 w-full p-4 mt-5 text-white font-bold rounded-md' type="submit" disabled={!stripe || !elements}>
        Pay
      </button>
      {/* Show error message to your customers */}
      {errorMessage && <div>{errorMessage}</div>}
    </form>
  );
};

const stripePromise = loadStripe('pk_test_51OmsbRA935599EJitdqqCDJJMDpmEtsdZ2gxfYzsrPEw3lUfLkiqiSwJy1AJWLfUB0AQYlEPcSkTbZyIC2j8VbcK00GHNgRxXL');

const options = {
  mode: 'payment',
  amount: 1099,
  currency: 'usd',
  // Fully customizable with appearance API.
  appearance: {
    /*...*/
  },
};

export default function ClientPayment() {
  const user = JSON.parse(sessionStorage.getItem('user'));
  const [paymentShow, setPaymentShow] = useState(false)
  const { register, handleSubmit, reset } = useForm({

  });

  const onSubmitClient = async (data) => {
    console.log(data);
    setLoading(true);
    try {
      const docRef = await addDoc(collection(db, "payments"), {
        ...data,
        paymentStatus: true,
        createAt: new Date().toLocaleDateString(),
      });
      console.log("Document written with ID: ", docRef);
      reset();
      setLoading(false);
    } catch (e) {
      console.error("Error adding document: ", e);
      setLoading(false);
    }
  };

  return (
    <div className='bg-white p-10 h-[100vh]'>
      <h1>Your Bill Payment should be here</h1>
      <div
        className="container flex flex-col mx-auto space-y-12 mt-10"
      >
        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-white">
          <div className="space-y-2 col-span-full lg:col-span-1">
            <p className="font-medium">Problem Specification</p>
            <p className="text-xs">
              Net vision community really appreciate your feedback and inform
              your situation, Please do not feel hesitations to tell your
              problem you are facing right now. Soon our community person will
              contact with you. Thank you
            </p>
          </div>
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className='col-span-full'>

              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">Email</label>
                <input
                  defaultValue={sessionStorage.getItem("email") || ""}
                  id="email"
                  type="email"
                  placeholder="Email"
                  className="w-full border-b-2 border-black p-2"
                  readOnly
                />
              </div>
              <div className="col-span-full sm:col-span-2 mb-4">
                <label className="text-sm">Payment</label>
                <input
                  defaultValue={user.cost || 500}
                  id="payment"
                  type="number"
                  placeholder="500 tk"
                  className="w-full border-b-2 border-black p-2"
                />
              </div>
              <Elements stripe={stripePromise} options={options}>
                <CheckoutForm />
              </Elements>
            </div>

          </div>
        </fieldset>
      </div>

    </div>
  )
}
