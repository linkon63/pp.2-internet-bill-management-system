import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../config/firebase.config";
import "./style.css";
export const SignInPage = () => {
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onLoginCustomer = async (data) => {
    setLoading(true);
    console.log(data);

    const q = query(
      collection(db, "customers"),
      where("email", "==", data.email),
      where("password", "==", data.password)
    );
    const querySnapshot = await getDocs(q);
    let loginFlag = false;
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
      loginFlag = true;
      sessionStorage.setItem("validUser", doc.id);
      sessionStorage.setItem("email", doc.data().email);
      sessionStorage.setItem("password", doc.data().password);
    });
    if (loginFlag === true) {
      navigate("/home");
    } else {
      navigate("/sign-up");
    }
    setLoading(false);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <p>Sign In</p>
        </div>
        <div className="login-form">
          {loading ? (
            <button type="button" className="bg-indigo-500 ..." disabled>
              <svg
                className="animate-spin h-5 w-5 mr-3 ..."
                viewBox="0 0 24 24"
              >
                Loading
              </svg>
              Processing...
            </button>
          ) : (
            <form
              onSubmit={handleSubmit(onLoginCustomer)}
              className="login-form"
            >
              <input
                type="email"
                {...register("email", { required: true })}
                placeholder="user@gmail.com"
              />
              <br />
              <input
                type="password"
                {...register("password", { required: true })}
                placeholder="password"
              />
              <br />
              <p className="forget-password">Forget password ?</p>
              <button className="login-btn bg-indigo-600" type="submit">
                Login
              </button>
              <button className="auth-log">Google</button>
              <button className="auth-log">Facebook</button>
              <button className="auth-log">
                <Link to="/sign-up">Create an account</Link>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
