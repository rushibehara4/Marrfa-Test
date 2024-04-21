import React from "react";

import "./register.css";

import Swal from "sweetalert2";

import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoIosMail } from "react-icons/io";

class Register extends React.Component {
  state = {
    isTermsChecked: false,
  };

  onSubmitReisterForm = (event) => {
    event.preventDefault();
    Swal.fire("Register", "You Successfully Register", "success");
  };

  onTermsCheck = () => {
    const { isTermsChecked } = this.state;
    this.setState((prevState) => ({
      isTermsChecked: !prevState.isTermsChecked,
    }));
    if (!isTermsChecked) {
      Swal.fire({
        title: "Terms and conditions",
        input: "checkbox",
        inputValue: 1,
        inputPlaceholder: `
          I agree with the terms and conditions
        `,
        confirmButtonText: `
          Continue&nbsp;<i class="fa fa-arrow-right"></i>
        `,
        inputValidator: (result) => {
          return !result && "You need to agree with T&C";
        },
      });
      if (isTermsChecked) {
        Swal.fire("You agreed with T&C :)");
      }
    }
  };

  render() {
    return (
      <div className="register-form-card">
        <h1 className="register-heading">Register</h1>
        <form
          action="submit"
          className="register-form-container"
          onSubmit={this.onSubmitReisterForm}
        >
          <div className="register-input-container">
            <input
              type="text"
              placeholder="Username"
              className="register-input-elemets"
              name="username"
              autoComplete="off"
              required
            />
            <FaUser className="register-email-icon" />
          </div>
          <div className="register-input-container">
            <input
              type="email"
              placeholder="Email"
              className="register-input-elemets"
              name="email"
              autoComplete="off"
              required
            />
            <IoIosMail className="register-email-icon" />
          </div>
          <div className="register-input-container">
            <input
              type="password"
              placeholder="Password"
              className="register-input-elemets"
              name="password"
              required
            />
            <RiLockPasswordFill className="register-password-icon" />
          </div>
          <div className="register-input-container">
            <input
              type="password"
              placeholder="Conform Password"
              className="register-input-elemets"
              name="conformPassword"
              required
            />
            <RiLockPasswordFill className="register-password-icon" />
          </div>
          <div className="term-and-condition-link">
            <input
              type="checkbox"
              id="termLink"
              name="termLink"
              value="termLink"
              onClick={this.onTermsCheck}
            />
            <label htmlFor="termLink" className="terms-label">
              I agree to the term & conditions
            </label>
          </div>
          <button type="submit" className="model-register-button">
            Register
          </button>
          <p className="register-model-description">
            Don't have an account, please{" "}
            <a href="/login" className="register-signin-link">
              SignIn
            </a>
          </p>
        </form>
      </div>
    );
  }
}

export default Register;
