
import { NavLink } from "react-router-dom";
import "../Navbar/Navbar.css";
import logo from "../Assets/logo.png";

const navbar = () => {
  return (
    <div className="Navbar">
      <nav className="navbar">
        <div className="navbar-logo">
          <NavLink to="/" className="navbar-logo-link">
            <img src={logo} alt="logo" /> HomeRental
          </NavLink>
        </div>

        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink exact to="/" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" activeClassName="active">
              Contact
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/About" activeClassName="active">
              About
            </NavLink>
          </li>
        </ul>
        <div className="navbar-auth">
          <li>
            <NavLink to="/Signup"> Registration</NavLink>
          </li>
          <li>
            <NavLink to="/login"> Admin Login</NavLink>
          </li>
        </div>
        <div className="navbar-auth">
          <li>
            <NavLink to="/Signup"> Registration</NavLink>
          </li>
          <li>
            <NavLink to="/user_login"> Customer Login</NavLink>
          </li>
        </div>
      </nav>
    </div>
  );
};
export default navbar;
