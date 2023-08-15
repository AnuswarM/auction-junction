import React, { useState } from "react";
import { Link } from "react-router-dom";

function BidProduct(props) {
  const [date, setDate] = useState(new Date());
  props.product.bidEnd = new Date(props.product.bidEnd);

  setInterval(() => {
    setDate(new Date());
  }, 1000);

  return (
    <div className="col-md-12 col-lg-4 mb-4 mb-lg-0">
      <Link to={"/products/" + props.product._id} className="card product-card">
        <img
          src={props.product.images[0].url}
          className="card-img-top mx-auto"
          alt="Laptop"
          style={{ width: "250px", height: "250px" }}
        />

        <div className="card-body">
          <div className="d-flex justify-content-between mb-3">
            <h5 className="mb-0" style={{ textTransform: "capitalize" }}>
              {props.product.name}
            </h5>
            <h5 className="text-dark mb-0">
              You bid: ${props.bid}
            </h5>
          </div>

          <div className="d-flex justify-content-between mb-2">
            <p className="text-muted mb-0">
              {props.product.description.substr(0, 50)}
            </p>
          </div>

          <div className="d-flex justify-content-between mb-2">
            <p className="text-muted mb-0">
              {date < props.product.bidEnd ? "Active" : "Ended"}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default BidProduct;
