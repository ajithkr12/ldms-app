import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { login } from "../api/dashboardUserServices"; // Import the login function
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent form submission
    try {
      const response = await login(email, password); // Call the login function
      if (response.success) {
        alert("Login successful!");
        const redirectTo = location.state?.from?.pathname || "/dashboard";
        navigate(redirectTo); // Redirect to the intended page or default to /dashboard
      } else {
        setErrorMessage("Invalid email or password");
      }
    } catch (error) {
      setErrorMessage("An error occurred during login. Please try again.");
    }
  };

  return (
    <div className="container-fluid vh-100 d-flex p-0">
      {/* Left Section - Form */}
      <div
        className="col-md-4 d-flex flex-column justify-content-center align-items-center"
        style={{ padding: "48px", backgroundColor: "#FFFFFF" }}
      >
        {/* Logo */}
        <div className="mb-12 text-center">
          <img
            src="assets/images/logo.png"
            alt="Easy Liquid Solutions"
            className="w-100"
          />
        </div>

        {/* Input Fields */}
        <form onSubmit={handleLogin} className="w-100">
          <div className="mb-3">
            <span className="form-label">Email</span>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3 position-relative">
            <span className="form-label">Password</span>
            <input
              type={showPassword ? "text" : "password"}
              className="form-control"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span
              className="position-absolute top-1 end-0 translate-middle-y me-3"
              onClick={() => setShowPassword(!showPassword)}
              style={{ cursor: "pointer" }}
            >
              {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
            </span>
          </div>

          {/* Error Message */}
          {errorMessage && (
            <div className="text-danger mb-3">{errorMessage}</div>
          )}

          {/* Login Button */}
          <button type="submit" className="btn btn-info text-white w-100 mt-3">
            Log in
          </button>
        </form>

        {/* Reset Password */}
        <div className="w-100 text-end text-primary">
          <a href="#">Reset Password?</a>
        </div>

        {/* Sign Up */}
        <p className="mt-3">
          Don't have an account?{" "}
          <a href="#" className="text-primary">
            New Account
          </a>
        </p>
      </div>

      {/* Right Section - Illustration */}
      <div
        className="col-md-8 d-flex justify-content-center align-items-center"
        style={{ backgroundColor: "#F1F4FA" }}
      >
        <img
          src="assets/images/login-bg.png"
          alt="Work Illustration"
          className="w-50"
        />
      </div>
    </div>
  );
};

export default LoginPage;
