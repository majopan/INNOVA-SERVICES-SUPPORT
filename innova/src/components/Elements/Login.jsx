import React, { useState } from "react";
import "../../style/Login.css";

const Login = () => {
  const [isActive] = useState(false);

  return (
    <div className="login-containerr">
      <div className={`containerr ${isActive ? "active" : ""}`} id="containerr">
        <div className="form-containerr sign-in">
          <form>
            <h1>Sign In</h1>
            <span>or use your email and password</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a href=" #">Forget Your Password?</a>
            <button type="button">Sign In</button>
          </form>
        </div>
        <div className="toggle-containerr">
          <div className="toggle">
            <div className="toggle-panel toggle-right">
              <h1>Welcome Back!</h1>
              <p>Log in with your personal details to use all the features of the site</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
