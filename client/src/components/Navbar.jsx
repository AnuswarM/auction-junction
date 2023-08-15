import React from "react";
import { Link } from "react-router-dom";
import Logo from "./images/logo-no-background.png";

function Navbar() {
  return (
    <div className="main-navbar">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={Logo} id="main-logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <Link className="nav-link" to="/addproduct">
                Sell Products
              </Link>
              <Link className="nav-link" to="/userproducts">
                Your Products
              </Link>
              <Link className="nav-link" to="/bidandbuy ">
                Bid and Buy
              </Link>
              <Link className="nav-link" to="/bidstatus">
                Bid Status
              </Link>
              <Link className="nav-link" to="/">
                About
              </Link>
              <Link className="nav-link" to="/profile">
                Profile
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
