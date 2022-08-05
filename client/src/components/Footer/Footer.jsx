import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../icons/Logo.svg";
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
    alert("Thank you for subscribing to our newsletter!");
    setNewsletterState({
      email: "",
    });
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
    ).then(() => {
      alert("yes");
    });
  };

  const resetFields = () => {
    document.getElementById("newsLetterForm").reset();
  };

  const handleSubmit2 = (e) => {
    e.preventDefault();
    console.log({ newsletterState });
    alert("Thank you for subscribing to our newsletter!");
    document.getElementById("newsLetterForm").reset();
  };

  return (
    <div className="footer">
      <div className="fasContainer">
        <div className="fas">
          <img height={40} src={Logo} alt="Logo" />
        </div>
        <div className="fasTextContainer">
          <p className="fasText">Floating Axe Studios</p>
        </div>
      </div>
      <div className="footerItem">
        <Link to="/privacy">
          Privacy <br /> & Policy
        </Link>
      </div>
      <div className="footerItem">
        <Link to="/terms">
          Terms <br /> & Conditions
        </Link>
      </div>
      <div className="footerItem">
        <Link to="/location">
          Our <br /> Location
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
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  );
}

export default Footer;
