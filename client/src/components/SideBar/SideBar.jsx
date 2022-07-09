import { Link } from "react-router-dom";
import React from "react";

function SideBar() {
  return (
    <nav className="sideBar">
      <div className="headerItem">
        <Link to="/games">Games</Link>
      </div>
      <div className="headerItem">
        <Link to="/about">About</Link>
      </div>
      <div className="headerItem">
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default SideBar;
