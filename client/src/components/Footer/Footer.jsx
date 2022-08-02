import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../icons/Logo.svg";
import Button from "../Button/Button";
import "./Footer.css";

function Footer() {
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
        <form autoComplete="off">
          <p>
            <input
              type="text"
              placeholder="Enter email to Join our Newsletter"
              name="name"
            />
          </p>
          <Button>Subscribe</Button>
        </form>
      </div>
    </div>
  );
}

export default Footer;
