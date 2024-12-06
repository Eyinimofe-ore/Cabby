import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./LoginSignup.css";
import { HiOutlineMail } from "react-icons/hi";
import { FaRegUser } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaEye } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import login_pic from ".././Assets/Images/account-login-protection-8876027-7271014.png";

function LoginSignup() {
  const location = useLocation();
  const navigate = useNavigate();
  const initialAction = location.state?.action === "login" ? "Login" : "Sign Up";
  const [action, setAction] = useState(initialAction);
  const [type, setType] = useState("password");

  return (
    <div className="login-body">
      <div className="login-container">
        {/* Back Arrow */}
        <div className="back-arrow" onClick={() => navigate(-1)}>
          <FaArrowLeft size={20} />
          <span>Back</span>
        </div>

        <div className="img-container">
          <img src={login_pic} alt="image" className="pic" />
        </div>
        <div className="sign-container">
          <h1>{action}</h1>
          <div className="input_text">
            {action === "Login" ? null : (
              <div className="inputs">
                <HiOutlineMail id="icon" />
                <input type="text" placeholder="Email" />
              </div>
            )}
            <div className="inputs">
              <FaRegUser id="icon" />
              <input type="text" placeholder="Username" />
            </div>
            <div className="inputs">
              <RiLockPasswordLine id="icon" />
              <input type={type} placeholder="Password" />
              {type === "password" ? (
                <FaEyeSlash id="icon" onClick={() => setType("text")} />
              ) : (
                <FaEye id="icon" onClick={() => setType("password")} />
              )}
            </div>
          </div>
          <div className="info">
            {action === "Login" ? null : (
              <div className="remember">
                <input type="checkbox" id="check" />
                <label htmlFor="check">Remember me</label>
              </div>
            )}
            {action === "Login" ? null : <a href="#">Forgot password?</a>}
          </div>
          {action === "Login" ? (
            <button id="sign_button">Login</button>
          ) : (
            <button id="sign_button">Sign Up</button>
          )}
          {action === "Login" ? (
            <p>
              Don't have an account?{" "}
              <button id="btn" onClick={() => setAction("Sign Up")}>
                Sign Up
              </button>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <button id="btn" onClick={() => setAction("Login")}>
                Login
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;
