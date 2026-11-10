import React from "react";
import "./Login.css";

function Login({ onLogin }) {
  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Please Log In</h2>
        <p className="login-subtext">Access your dashboard by clicking the button below.</p>
        <button onClick={onLogin} className="primary-btn">
          Log In Now
        </button>
      </div>
    </div>
  );
}

export default Login;