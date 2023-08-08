import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/register.module.css";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [shareDataChecked, setShareDataChecked] = useState(false);

  const [nameError, setNameError] = useState(false);
  const [usernameError, setUsernameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [mobileError, setMobileError] = useState(false);
  const [shareDataError, setShareDataError] = useState(false);

  const handleSignup = () => {
    if (name === "") {
      setNameError(true);
    } else {
      setNameError(false);
    }

    if (username === "") {
      setUsernameError(true);
    } else {
      setUsernameError(false);
    }

    if (email === "") {
      setEmailError(true);
    } else {
      setEmailError(false);
    }

    if (mobile === "") {
      setMobileError(true);
    } else {
      setMobileError(false);
    }

    if (shareDataChecked === false) {
      setShareDataError(true);
    } else {
      setShareDataError(false);
    }

    if (
      name !== "" &&
      username !== "" &&
      email !== "" &&
      mobile !== "" &&
      shareDataChecked === true
    ) {
      const userDetails = { name, username, email, mobile };
      localStorage.setItem("userDetails", JSON.stringify(userDetails));
      setName("");
      setUsername("");
      setEmail("");
      setMobile("");
      setShareDataChecked(false);

      navigate("/select-category");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftGrid}>
        <div>Discover new things on Superapp</div>
      </div>
      <div className={styles.rightGrid}>
        <div>
          <p className={styles.header}>Super App</p>
          <p className={styles.subHeader}>Create your new account</p>
        </div>

        <div className={styles.formContainer}>
          <input
            className={styles.inputField}
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ border: nameError ? "1px solid red" : "none" }}
          />
          {nameError && (
            <p className={styles.paragraphStyles3}>Field is required</p>
          )}
          <input
            className={styles.inputField}
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ border: usernameError ? "1px solid red" : "none" }}
          />
          {usernameError && (
            <p className={styles.paragraphStyles3}>Field is required</p>
          )}
          <input
            className={styles.inputField}
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ border: emailError ? "1px solid red" : "none" }}
          />
          {emailError && (
            <p className={styles.paragraphStyles3}>Field is required</p>
          )}
          <input
            className={styles.inputField}
            type="text"
            placeholder="Mobile"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            style={{ border: mobileError ? "1px solid red" : "none" }}
          />
          {mobileError && (
            <p className={styles.paragraphStyles3}>Field is required</p>
          )}
          <div className={styles.checkboxContainer}>
            <input
              type="checkbox"
              checked={shareDataChecked}
              onChange={(e) => setShareDataChecked(e.target.checked)}
            />
            <p className={styles.paragraphStyles1}>
              Share my registration data with Superapp
            </p>
          </div>
          {shareDataError && (
            <p className={styles.paragraphStyles3}>
              Check this box if you want to proceed
            </p>
          )}

          <button className={styles.signupBtn} onClick={handleSignup}>
            SIGN UP
          </button>

          <p className={styles.paragraphStyles2}>
            By clicking on Sign up. you agree to Superapp{" "}
            <a href="#">Terms and Conditions of Use</a>
          </p>
          <p className={styles.paragraphStyles2}>
            To learn more about how Superapp collects, uses, shares and protects
            your personal data please head Superapp{" "}
            <a href="#">Privacy Policy</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
