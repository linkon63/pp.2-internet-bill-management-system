import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { db } from "../../config/firebase.config";

export default function ClientComplains() {
  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false);

  const promoCode = sessionStorage.getItem("validUser").slice(0, 8);
  const onSubmitClient = async (data) => {
    console.log(data);
    setLoading(true);
    try {
      const docRef = await addDoc(collection(db, "complains"), {
        ...data,
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
      {/* offers section */}
      <div className="p-6 py-8  text-black">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <h2 className="text-center text-6xl tracki font-bold">
              Up to
              <br className="sm:hidden" />
              50% Off
            </h2>
            <div className="space-x-2 text-center py-2 lg:py-0">
              <span>
                For the new customer reference using your promo code :{" "}
              </span>
              <span className="font-bold text-lg">{promoCode}</span>
            </div>
            <a
              href="#"
              rel="noreferrer noopener"
              className="px-10 mt-4 lg:mt-0 py-3 rounded-md border block dark:bg-indigo-600 dark:text-white dark:border-gray-400"
            >
              Call us
            </a>
          </div>
        </div>
      </div>
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
            className="container flex flex-col mx-auto space-y-12"
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
                  <label className="text-sm">First name</label>
                  <input
                    {...register("firstName", { required: true })}
                    id="firstname"
                    type="text"
                    placeholder="First name"
                    className="w-full border-b-2 border-black p-2"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label className="text-sm">Last name</label>
                  <input
                    {...register("lastName", { required: false })}
                    id="lastname"
                    type="text"
                    placeholder="Last name"
                    className="w-full border-b-2 border-black p-2"
                  />
                </div>
                <div className="col-span-2 ">
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
                <div className="col-span-2">
                  <label className="text-sm">Address</label>
                  <input
                    {...register("address", { required: true })}
                    id="address"
                    type="text"
                    placeholder=""
                    className="w-full border-b-2 border-black p-2"
                  />
                </div>
                <div className="col-span-1 sm:col-span-2">
                  <label className="text-sm">City</label>
                  <input
                    {...register("city", { required: false })}
                    id="city"
                    type="text"
                    placeholder=""
                    className="w-full border-b-2 border-black p-2"
                  />
                </div>
                <div className="col-span-full">
                  <label className="text-sm">Descriptions</label>
                  <input
                    {...register("description", { required: true })}
                    type="text"
                    placeholder=""
                    className="w-full border-b-2 border-black p-2"
                  />
                </div>
                <button
                  className="login-btn bg-indigo-600 rounded col-span-full"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </fieldset>
          </form>
        )}
      </section>
    </div>
  );
}
