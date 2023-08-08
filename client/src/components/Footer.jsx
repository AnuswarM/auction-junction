import React from "react";

function Footer() {
  return (
    <div className="container footer">
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center pb-3 mb-3">
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-muted">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-muted">
              Features
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-muted">
              Pricing
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-muted">
              FAQs
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-muted">
              About
            </a>
          </li>
        </ul>
        <hr/>
        <p className="text-center text-muted copyright-text">&copy; Copyright 2023 Auction Junction. All rights Reserved.</p>
      </footer>
    </div>
  );
}

export default Footer;
