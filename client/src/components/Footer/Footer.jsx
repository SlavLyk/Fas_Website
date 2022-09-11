import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../icons/Logo.svg";
import Checkmark from "../../icons/checkmark.svg";

import Button from "../Button/Button";
import "./Footer.css";

import { useState } from "react";

function Footer(props) {
  const [newsletterState, setNewsletterState] = useState({
    email: "",
  });

  const [error, setError] = useState("");
  const [success, setSucess] = useState("");

  const ERROR = {
    email: "Please enter a valid email address.",
  };

  const SUCCESS = {
    email: "Thank you for subscribing to our Newsletter!",
  };

  const formValidator = () => {
    //regex for email (checks that email name is any word with a . and 2-4 letter domain following it. )
    const validEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    // 2. Check correct email
    if (newsletterState.email.match(validEmail) == null) {
      setError(ERROR.email);
      return false;
    }
    //3. Pass if no errors
    setSucess(SUCCESS.email);
    return true;
  };

  function handleStateChange(e) {
    setNewsletterState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  const handleSubmit = async (e) => {
    //prevents the page from refreshing upon submit

    e.preventDefault();
    if (formValidator() === true) {
      alert("Thank you for subscribing to our Newsletter!");
      setNewsletterState({
        email: "",
      });
      // clearing from previous error
      setError("");
      const response = await fetch(
        "https://floating-axe-website.herokuapp.com/signup",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ newsletterState }),
        }
      ).then(() => {
        setNewsletterState({
          email: "",
        });
      });
    } else {
      setNewsletterState({
        email: "",
      });
    }
  };

  const setPlaceholder = (value) => {
    if (
      error === ERROR.email &&
      value === "Enter email to Join our Newsletter"
    ) {
      return error;
    } else {
      return "Enter email to Join our Newsletter";
    }
  };

  const setInputStyle = (value) => {
    if (
      error === ERROR.email &&
      value === "Enter email to Join our Newsletter"
    ) {
      return { borderColor: "#cd3838" };
    } else {
      return {};
    }
  };

  return (
    <div className="footer">
      <div className="fasContainer">
        <div className="fas">
          <img height={40} src={Logo} alt="Logo" className="checkmark" />
        </div>
        <div className="fasTextContainer">
          <p className="fasText">Floating Axe Studios</p>
        </div>
      </div>
      <div className="footerItem">
        <Link className="a-link" to="/privacy">
          Privacy & Policy
        </Link>
      </div>
      <div className="footerItem">
        <Link className="a-link" to="/terms">
          Terms & Conditions
        </Link>
      </div>
      <div className="footerItem">
        <Link className="a-link" to="/cookies">
          Cookies
        </Link>
      </div>
      <div className="newsletter">
        <form
          autoComplete="off"
          method="POST"
          action="/signup"
          id="newsLetterForm"
          onSubmit={handleSubmit}
        >
          <p>
            <input
              type="text"
              placeholder={setPlaceholder("Enter email to Join our Newsletter")}
              onChange={handleStateChange}
              name="email"
              id="email"
              value={newsletterState.email}
              style={setInputStyle("Enter email to Join our Newsletter")}
            />
          </p>
          <button type="submit">
            <img
              height={13}
              src={Checkmark}
              alt="Checkmark"
              className="checkmark"
            />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Footer;
