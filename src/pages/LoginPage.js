import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

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
        <div></div>
        {/* Social Login Buttons */}

        {/* <div className="d-flex gap-3 mb-3">
          <button className="btn btn-light border d-flex align-items-center gap-2 px-24">
            <FcGoogle size={20} />
            Google
          </button>
          <button className="btn btn-light border d-flex align-items-center gap-2 px-24">
            <FaFacebookF size={20} style={{ color: "#1877F2" }} />
            Facebook
          </button>
        </div>
        <div className="d-flex align-items-center w-100 my-3">
          <hr className="flex-grow-1 border-secondary" />
          <p className="mx-12 mb-0 text-secondary">Or</p>
          <hr className="flex-grow-1 border-secondary" />
        </div> */}

        {/* Input Fields */}
        <div className="w-100">
          <div className="mb-3">
            <span className="form-label">UserName</span>
            <input
              type="text"
              className="form-control"
              placeholder="Enter UserName"
            />
          </div>
          <div className="mb-3 position-relative">
            <span className="form-label">Password</span>
            <input
              type={showPassword ? "text" : "password"}
              className="form-control"
              placeholder="Enter your password"
            />
            {/* <span
              className="position-absolute top-1 end-0 translate-middle-y me-3"
              onClick={() => setShowPassword(!showPassword)}
              style={{ cursor: "pointer" }}
            >
              {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
            </span> */}
          </div>
        </div>

        {/* Reset Password */}
        <div className="w-100 text-end text-primary">
          <a href="#">Reset Password?</a>
        </div>

        {/* Login Button */}
        <button className="btn btn-info text-white w-100 mt-3">Log in</button>

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
