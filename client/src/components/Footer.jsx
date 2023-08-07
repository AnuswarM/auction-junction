import React from "react";

function Footer() {
  return (
    <div class="container footer">
      <footer class="py-3 my-4">
        <ul class="nav justify-content-center pb-3 mb-3">
          <li class="nav-item">
            <a href="#" class="nav-link px-2 text-muted">
              Home
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link px-2 text-muted">
              Features
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link px-2 text-muted">
              Pricing
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link px-2 text-muted">
              FAQs
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link px-2 text-muted">
              About
            </a>
          </li>
        </ul>
        <hr/>
        <p class="text-center text-muted copyright-text">&copy; Copyright 2023 Auction Junction. All rights Reserved.</p>
      </footer>
    </div>
  );
}

export default Footer;