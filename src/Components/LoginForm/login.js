import "./login.css";

import Swal from "sweetalert2"

import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

const Login = () => {
  const onSubmitLoginform = (event) => {
    event.preventDefault();
    Swal.fire("Success", "Your login has been successfull", "success")
  };
  return (
    <div className="form-card">
      <h1 className="login-heading">Login</h1>
      <p className="login-description">It's safe here feel free to login</p>
      <form
        action="submit"
        className="form-container"
        onSubmit={onSubmitLoginform}
      >
        <div className="input-container">
          <input
            type="email"
            placeholder="Email"
            className="login-input-elemets"
            name="email"
            autoComplete="off"
            required
          />
          <FaUser className="login-email-icon" />
        </div>
        <div className="input-container">
          <input
            type="password"
            placeholder="Password"
            className="login-input-elemets"
            name="password"
            required
          />
          <RiLockPasswordFill className="login-password-icon" />
        </div>
        <div className="login-password-remember-container">
          <div className="remember-me-container">
            <input
              type="checkbox"
              className="remember-me-checkbox"
              id="loginCheckbox"
            />
            <label className="remember-me-label" htmlFor="loginCheckbox">
              Remember me
            </label>
          </div>
          <div className="forgot-password-container">
            <a href="forgot-password" className="forgot-password-element">
              Forgot Password ?
            </a>
          </div>
        </div>
        <button type="submit" className="model-login-button">
          Login
        </button>
        <p className="model-description">
          Don't have an account, please{" "}
          <a href="/register" className="login-signup-link">
            Signup
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;
