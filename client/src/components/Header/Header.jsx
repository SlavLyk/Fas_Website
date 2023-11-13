import { Link } from "react-router-dom";
import "./Header.css";
import Logo from "../../icons/Logo.svg";
import BurgerMenu from "../../icons/BurgerMenu.svg";
import React, { useState } from "react";

function Header({ active = "" }) {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <div className="header">
      <div className={click ? "logoContainerActive" : "logoContainer"}>
        <div className={active === "Home" ? "logoActive" : "logo"}>
          <div
            className="selector"
            style={{
              display: active === "Home" ? "display" : "none",
            }}
          ></div>
          <Link to="/">
            <img height={35} src={Logo} alt="Logo" className="fas-logo" />
          </Link>
        </div>
      </div>

      <div className={click ? "headerMidActive" : "headerMid"}>
        <div className={active === "Games" ? "headerItemActive" : "headerItem"}>
          <div
            className="selector"
            style={{
              display: active === "Games" ? "block" : "none",
            }}
          ></div>
          <Link to="/games">Games</Link>
        </div>

        <div className={active === "About" ? "headerItemActive" : "headerItem"}>
          <div
            className="selector"
            style={{
              display: active === "About" ? "block" : "none",
            }}
          ></div>
          <Link to="/about">About us</Link>
        </div>

        <div
          className={active === "Contact" ? "headerItemActive" : "headerItem"}
        >
          <div
            className="selector"
            style={{
              display: active === "Contact" ? "block" : "none",
            }}
          ></div>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className="burgerMenu" onClick={handleClick}>
        <img
          className="burgerIcon"
          height={20}
          width={34}
          src={BurgerMenu}
          alt="Logo"
        />
      </div>
    </div>
  );
}

export default Header;
