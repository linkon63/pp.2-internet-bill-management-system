import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { useForm } from "react-hook-form";
import { db } from "../../config/firebase.config";

export default function ClientPayment() {
  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false);

  const promoCode = sessionStorage.getItem("validUser").slice(0, 8);
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
    <div className="h-[100vh] bg-white">



      {/* complains form */}
      <section className="p-6 dark:bg-white dark:text-black h-4/6 flex items-center justify-center">
        {loading ? (
          <button type="button" className="bg-indigo-500 ..." disabled>
            <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
              Loading
            </svg>
            Processing...
          </button>
        ) : (
          <form
            onSubmit={handleSubmit(onSubmitClient)}
            className="container flex flex-col mx-auto space-y-12 mt-10"
          >
            <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-white">
              <div className="space-y-2 col-span-full lg:col-span-1">
                <p className="font-medium">Problem Specification</p>
                <p className="text-xs">
                  Net vision community really appreciate your feedback and
                  inform your situation, Please do not feel hesitations to tell
                  your problem you are facing right now. Soon our community
                  person will contact with you. Thank you
                </p>
              </div>
              <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                <div className="col-span-full sm:col-span-3">
                  <label className="text-sm">Email</label>
                  <input
                    defaultValue={sessionStorage.getItem("email") || ""}
                    {...register("email", { required: true })}
                    id="email"
                    type="email"
                    placeholder="Email"
                    className="w-full border-b-2 border-black p-2"
                  />
                </div>
                <div className="col-span-full">
                  <label className="text-sm">Card Number</label>
                  <input
                    {...register("cardNumber", { required: true })}
                    id="address"
                    type="number"
                    placeholder="0004 0005 0000 0006"
                    className="w-full border-b-2 border-black p-2"
                  />
                </div>
                <div className="col-span-full sm:col-span-2">
                  <label className="text-sm">Payment</label>
                  <input
                    {...register("Payment", { required: false })}
                    id="payment"
                    type="number"
                    placeholder="500 tk"
                    className="w-full border-b-2 border-black p-2"
                  />
                </div>
                {/* <div className="col-span-full sm:col-span-2">
                  <label className="text-sm">Date</label>
                  <input
                    {...register("date", { required: false })}
                    id="date"
                    type="date"
                    className="w-full border-b-2 border-black p-2"
                  />
                </div> */}
                <div className="col-span-full sm:col-span-2">
                  <button
                    className="login-btn bg-indigo-600 rounded"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </fieldset>
          </form>
        )}
      </section>
    </div>
  );
}
