import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="container footer">
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center pb-3 mb-3">
          <li className="nav-item">
            <Link to="#" className="nav-link px-2 text-muted">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="#" className="nav-link px-2 text-muted">
              Features
            </Link>
          </li>
          <li className="nav-item">
            <Link to="#" className="nav-link px-2 text-muted">
              Pricing
            </Link>
          </li>
          <li className="nav-item">
            <Link to="#" className="nav-link px-2 text-muted">
              FAQs
            </Link>
          </li>
          <li className="nav-item">
            <Link to="#" className="nav-link px-2 text-muted">
              About
            </Link>
          </li>
        </ul>
        <hr />
        <p className="text-center text-muted copyright-text">
          &copy; Copyright 2023 Auction Junction. All rights Reserved.
        </p>
      </footer>
    </div>
  );
}

export default Footer;
