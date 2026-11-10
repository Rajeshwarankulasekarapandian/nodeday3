import React from "react";
import "./Header.css";

function Header({ isLoggedIn, onToggleAuth }) {
  return (
    <header className="app-header">
      <h1 className="app-title">Task 3: List & Conditional Rendering</h1>
      <button 
        onClick={onToggleAuth} 
        className={isLoggedIn ? "logout-btn" : "login-btn"}
      >
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </header>
  );
}

export default Header;