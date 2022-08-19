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

  function handleStateChange(e) {
    setNewsletterState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  const handleSubmit = async (e) => {
    if (newsletterState.email) {
      alert("Thank you for subscribing to our Newsletter!");
    } else {
      alert("Please enter a valid email.");
    }
    setNewsletterState({
      email: "",
    });
    //prevents the page from refreshing upon submit
    e.preventDefault();
    const response = await fetch(
      "https://floating-axe-website.herokuapp.com/signup",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newsletterState }),
      }
    );
  };

  // const resetFields = () => {
  //   document.getElementById("newsLetterForm").reset();
  // };

  // const handleSubmit2 = (e) => {
  //   e.preventDefault();
  //   console.log({ newsletterState });
  //   alert("Thank you for subscribing to our newsletter!");
  //   document.getElementById("newsLetterForm").reset();
  // };

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
        <Link className="a-link" to="/location">
          Our Location
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
              placeholder="Enter email to Join our Newsletter"
              onChange={handleStateChange}
              name="email"
              id="email"
              value={newsletterState.email}
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
