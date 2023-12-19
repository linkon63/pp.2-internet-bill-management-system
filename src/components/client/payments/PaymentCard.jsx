import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useEffect, useState } from "react";

// let stripePromise = undefined;
// try {
//   const stripePromise = loadStripe(
//     "pk_test_51Ie1JhBHVweerPiKD5ZiauHVxaum4XV1yLjMsUHfkMPf2T7UKNlyHOJ0u0JDpztqmYSfu9R9nRsTA8gydkmksxSr00UdXEF7bv"
//   );
// } catch (error) {
//   console.log(error);
// }
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
export default function PaymentCard() {
  const [stripePromise, setStripePromise] = useState(() =>
    loadStripe(
      "pk_test_51Ie1JhBHVweerPiKD5ZiauHVxaum4XV1yLjMsUHfkMPf2T7UKNlyHOJ0u0JDpztqmYSfu9R9nRsTA8gydkmksxSr00UdXEF7bv"
    )
  );

  //   const [stripePromise, setStripePromise] = useState(null);
  const options = {
    // passing the client secret obtained from the server
    clientSecret:
      "sk_test_51Ie1JhBHVweerPiK6OwuH7Le6GhqvqT902IKfI31hUySxJe9VIKrea23SBrYdndy2Btyx539mTZqHlEUJ02MttrN00pUQ5cz5F",
  };
  //   useEffect(() => {
  //     stripePromiseResolver();
  //   }, []);
  //   const stripePromiseResolver = async () => {
  //     setStripePromise(
  //       await loadStripe(
  //         "pk_test_51Ie1JhBHVweerPiKD5ZiauHVxaum4XV1yLjMsUHfkMPf2T7UKNlyHOJ0u0JDpztqmYSfu9R9nRsTA8gydkmksxSr00UdXEF7bv"
  //       )
  //     );
  //   };
  return (
    <div>
      <div className="product">
        {/* <img
          src="https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress"
          alt="laptop"
          style={{ width: "100%", height: "auto" }}
        /> */}
        <div>
          <Elements stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        </div>
      </div>
    </div>
  );
}
