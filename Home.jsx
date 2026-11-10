import React from "react";
import "./Home.css";

function Home() {
  // Array containing 5 objects with at least 5 key-value pairs each
  const usersList = [
    { id: 1, name: "Rajeshwaran", email: "Rajeshg@gmail.com", age: 28, city: "madurai", role: "Frontend Developer" },
    { id: 2, name: "yogeshwaran", email: "yogesh@gmail.com", age: 24, city: "chennai", role: "UI/UX Designer" },
    { id: 3, name: "Thandeeswaran", email: "thandeesh@gmail.com", age: 30, city: "coimbatore", role: "Backend Developer" },
    { id: 4, name: "vigneshwaran", email: "vignesh@gmail.com", age: 26, city: "tirunelveli", role: "QA Engineer" },
    { id: 5, name: "guhaneshwaran", email: "guhan@gmail.com", age: 32, city: "banglore", role: "Project Manager" },
  ];

  return (
    <div className="welcome-container">
      <h2 className="welcome-text">🎉 Welcome Back, User!</h2>
      <p className="subtitle">Here is the directory of team members rendered dynamically using the map() method.</p>

      {/* List Rendering using card layout */}
      <div className="card-grid">
        {usersList.map((user) => (
          <div key={user.id} className="card">
            <div className="avatar">{user.name.charAt(0)}</div>
            <h3 className="card-title">{user.name}</h3>
            <p className="card-text"><strong>Email:</strong> {user.email}</p>
            <p className="card-text"><strong>Age:</strong> {user.age}</p>
            <p className="card-text"><strong>City:</strong> {user.city}</p>
            <span className="badge">{user.role}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;