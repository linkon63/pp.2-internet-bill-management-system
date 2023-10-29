import { useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../config/firebase.config";
import "./style.css";
import { useState } from "react";
export const Registrations = () => {
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);
  const onSubmit = async (data) => {
    console.log(data);
    setLoading(true);
    try {
      const docRef = await addDoc(collection(db, "customers"), {
        ...data,
      });
      console.log("Document written with ID: ", docRef.id);
      setLoading(false);
    } catch (e) {
      console.error("Error adding document: ", e);
      setLoading(false);
    }
  };
  return (
    <div className="reg-container">
      <div className="reg-card">
        <div className="reg-header">
          <p>Sing up</p>
        </div>
        <div className="reg-form">
          {loading ? (
            <button type="button" className="bg-indigo-500 ..." disabled>
            <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
              Loading
            </svg>
            Processing...
          </button>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="reg-form">
              <input
                type="email"
                {...register("email", { required: true })}
                placeholder="user@gmail.com"
              />{" "}
              <br />
              <input
                type="text"
                {...register("userName", { required: true })}
                placeholder="your name"
              />
              <input
                type="text"
                {...register("internetID", { required: true })}
                placeholder="internet id"
              />
              <input
                type="password"
                {...register("password", { required: true })}
                placeholder="password"
              />
              <input
                type="text"
                {...register("address", { required: true })}
                placeholder="address"
              />
              <br />
              <button className="reg-btn">Sign up</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
