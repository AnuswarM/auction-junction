import React from "react";
import {Link} from 'react-router-dom';
import Auction1 from "./images/auction1.png";

function Home() {
  return (
    <div id="header">
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">
              <div
                className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <h1 className="homepage-h1">
                  Engage in auctions and trade items through
                  <strong className="brand-name">
                    <br />
                    Auction Junction
                  </strong>
                </h1>

                <h2 className="my-3">
                  An internet-based auction service where users sell or bid on
                  products and services online.
                </h2>
                <div className="mt-3">
                  <Link to="/login" className="btn-get-started">
                    Get Started
                  </Link>
                </div>
              </div>

              <div
                className="col-lg-6 order-1 order-lg-2 header-img "
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <img
                  src={Auction1}
                  className="img-fluid animated hedrimg"
                  alt="auction img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
