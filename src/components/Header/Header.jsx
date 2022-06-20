import { Link } from "react-router-dom";
import "./Header.css";
import Logo from "../../icons/Logo.svg";
import BurgerMenu from "../../icons/BurgerMenu.svg";

function Header() {
  return (
    <div className="header">
      <Link to="/" className="logo">
        <img height={40} src={Logo} alt="Logo" />
      </Link>
      <div className="headerMid">
        <div className="headerItem">
          <Link to="/games">Games</Link>
        </div>
        <div className="headerItem">
          <Link to="/about">About</Link>
        </div>
        <div className="headerItem">
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className="burgerMenu">
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
