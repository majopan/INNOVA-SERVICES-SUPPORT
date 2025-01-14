    import React, { useState } from "react";
    import "../../style/Login.css";
    

    const Login = () => {
    const [isActive, setIsActive] = useState(false);

    const handleRegisterClick = () => {
        setIsActive(true);
    };

    const handleLoginClick = () => {
        setIsActive(false);
    };

    return (
        <div className="login-containerr">
        <div className={`containerr ${isActive ? "active" : ""}`} id="containerr">
        <div className="form-containerr sign-up">
            <form>
            <h1>Create Account</h1>
            <span>or use your email for registration</span>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="button">Sign Up</button>
            </form>
        </div>
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
            <div className="toggle-panel toggle-left">
                <h1>Welcome Back!</h1>
                <p>Enter your personal details to use all of the site's features</p>
                <button
                className="hidden"
                id="login"
                onClick={handleLoginClick}
                >
                Sign In
                </button>
            </div>
            <div className="toggle-panel toggle-right">
                <h1>Hello, Friend!</h1>
                <p>Register with your personal details to use all of the site's features</p>
                <button
                className="hidden"
                id="register"
                onClick={handleRegisterClick}
                >
                Sign Up
                </button>
            </div>
            </div>
        </div>
        </div>
        </div>
    );
    };

    export default Login;
