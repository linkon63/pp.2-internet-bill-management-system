import "./style.css";
export const SignInPage = () => {
  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <p>Sign In</p>
        </div>
        <div className="login-form">
          <input type="email" placeholder="user@gmail.com" /> <br />
          <input type="password" placeholder="password" />
          <br />
          <p className="forget-password">Forget password ?</p>
          <button className="login-btn">Login</button>
          <button className="auth-log">Google</button>
          <button className="auth-log">Facebook</button>
        </div>
      </div>
    </div>
  );
};
