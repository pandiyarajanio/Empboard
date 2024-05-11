import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ logged }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigator = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login logic here, for demonstration just console logging email and password
    console.log("Email:", email);
    console.log("Password:", password);

    // Check if email and password match admin credentials
    if (email === "admin@admin.com" && password === "admin123") {
      // Assuming login is successful, setting islogin to true
      logged(true);
      // Navigate to AllEmployees page
      navigator('/employees')
    } else {
      // Handle invalid login credentials
      alert("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title mb-4">Login</h5>
              <form onSubmit={handleLogin}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
