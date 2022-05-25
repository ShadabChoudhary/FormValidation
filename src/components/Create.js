import React, { useState } from "react";
import "./Create.scss";
import image from "../components/images/bg.png";
import { useNavigate } from "react-router-dom";

function Create() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    phoneNumber: "",
    checkBox: "",
  });
  const navigate = useNavigate();

  const handleInputs = async (e) => {
    const { name, value } = e.target;

    setUser({ ...user, [name]: value });
    document.querySelector("span").style.display = "none";
  };

  const errorHandler = (e) => {
    e.preventDefault();

    const isChecked = document.querySelector(".checkbox");

    document.querySelector(".text-danger").style.display = "block";
    if (user.email === "") {
      document.querySelector(".text-danger").innerHTML =
        "*Fill the email Field";
    } else if (!user.email.match(/^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/)) {
      document.querySelector(".text-danger").innerHTML =
        "*Please enter valid Email address";
    } else if (user.password === "") {
      document.querySelector(".text-danger").innerHTML =
        "* fill the password field";
    } else if (user.password.length <= 8) {
      document.querySelector(".text-danger").innerHTML =
        "*Password should be greater than 8 characters";
    } else if (user.confirmPassword === "") {
      document.querySelector(".text-danger").innerHTML =
        "*Please Confirm your password";
    } else if (user.confirmPassword !== user.password) {
      document.querySelector(".text-danger").innerHTML =
        "*Pasword doesn't match";
    } else if (user.name === "") {
      document.querySelector(".text-danger").innerHTML = "*Fill the name Field";
    } else if (user.phoneNumber === "") {
      document.querySelector(".text-danger").innerHTML =
        "*Fill the phone number Field";
    } else if (!user.phoneNumber.match(/^[0-9]{10}$/)) {
      document.querySelector(".text-danger").innerHTML =
        "*Enter a valid mobile number";
    } else if (!isChecked.checked) {
      document.querySelector(".text-danger").innerHTML =
        "*Please agree terms and conditions";
    } else {
      navigate("/home");
    }
  };

  return (
    <div className="main--container">
      <div className="inner__container">
        <div className="left__img">
          <img className="image" src={image} alt="bg" />
        </div>
        <form className="create">
          <h1>Create an account</h1>
          <span className="text-danger"></span>
          <div className="input__control">
            <label className="input__title">Your email address</label>
            <input
              className="input"
              type="email"
              value={user.email}
              onChange={handleInputs}
              name="email"
            />
          </div>

          <div className="input__control">
            <label className="input__title">Your password</label>
            <input
              className="input"
              type="password"
              value={user.password}
              onChange={handleInputs}
              name="password"
            />
          </div>
          <div className="input__control">
            <label className="input__title">Confirm your password</label>
            <input
              className="input"
              type="password"
              value={user.confirmPassword}
              onChange={handleInputs}
              name="confirmPassword"
            />
          </div>
          <div className="input__control">
            <label className="input__title">Your full name</label>
            <input
              className="input"
              type="text"
              value={user.name}
              onChange={handleInputs}
              name="name"
            />
          </div>
          <div className="input__control">
            <label className="input__title">Your phone number</label>
            <input
              className="input"
              type="text"
              value={user.phoneNumber}
              onChange={handleInputs}
              name="phoneNumber"
            />
          </div>
          <div className="checkbox__control">
            <input
              className="checkbox"
              type="checkbox"
              value={user.checkBox}
              onChange={handleInputs}
              name="cheeckBox"
            />
            i read and agree Terms and Conditions
          </div>

          <button className="btn" type="submit" onClick={errorHandler}>
            create account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Create;
