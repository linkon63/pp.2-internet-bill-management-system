import { useForm } from "react-hook-form";
import "./style.css";
import { Link, Navigate } from "react-router-dom";
export const SignInPage = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <p>Sign In</p>
        </div>
        <div className="login-form">
          <form onSubmit={handleSubmit(onSubmit)} className="login-form">
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
        </div>
      </div>
    </div>
  );
};
