import "./style.css";
export const Registrations = () => {
  return (
    <div className="reg-container">
      <div className="reg-card">
        <div className="reg-header">
          <p>Sing up</p>
        </div>
        <div className="reg-form">
          <input type="email" placeholder="user@gmail.com" /> <br />
          <input type="text" placeholder="your name" />
          <input type="text" placeholder="internet id" />
          <input type="password" placeholder="password" />
          <input type="text" placeholder="address" />
          <br />
          <button className="reg-btn">Sign up</button>
        </div>
      </div>
    </div>
  );
};
