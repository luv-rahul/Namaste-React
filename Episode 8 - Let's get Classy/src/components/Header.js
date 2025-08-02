import { LOGO_URL } from "../utils/constant";
import { useState, useEffect } from "react";
import { Link } from "react-router";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <div>
          <Link style={{ textDecoration: "none", color: "black" }} to="/">
            Home
          </Link>
        </div>
        <div>
          <Link style={{ textDecoration: "none", color: "black" }} to="/about">
            About
          </Link>
        </div>
        <div>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/contact"
          >
            Contact
          </Link>
        </div>
        <div>Cart</div>
        <div>
          <button
            className="login-btn"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
